import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
// FIX: Impor Link untuk navigasi
import { Link } from 'react-router-dom';
import { useApi } from '../hooks/useApi';

export default function Projects() {
    // FIX: State `selectedProject` tidak lagi diperlukan
    // const [selectedProject, setSelectedProject] = useState(null);
    const [activeFilter, setActiveFilter] = useState('Semua');
    const [categories, setCategories] = useState(['Semua']);

    const { data: projectData, loading, error, execute: fetchProjects } = useApi(null);

    useEffect(() => {
        fetchProjects('api/projects').catch(err => {
            console.error("Gagal memuat proyek:", err.message);
        });
    }, [fetchProjects]);

    const projects = projectData?.data || [];
    
    useEffect(() => {
        if (projects.length > 0) {
            const uniqueCategories = [...new Set(projects.map(p => p.category).filter(Boolean))];
            setCategories(['Semua', ...uniqueCategories]);
        }
    }, [projects]);

    const filteredProjects = activeFilter === 'Semua'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    // FIX: Blok `if (selectedProject)` dihapus karena halaman detail sekarang ditangani oleh route terpisah.

    return (
        <div className="projects-page">
            <div className="page-header">
                <div className="container section-title">
                    <h2>Proyek Tersedia</h2>
                    <p>Pilih proyek yang ingin Anda kerjakan hari ini dan dapatkan penghasilan.</p>
                </div>
            </div>
            <div className="container list-page-container">
                <div className="filter-bar">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                            onClick={() => setActiveFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {loading && <p>Memuat proyek...</p>}
                {error && <p style={{color: 'red'}}>Error: {error.message}</p>}
                
                {!loading && !error && projects.length > 0 && (
                    <div className="item-grid">
                        {filteredProjects.map(project => (
                            // FIX: Bungkus kartu dengan komponen Link yang mengarah ke URL detail
                            <Link to={`/listproject/${project.id}`} key={project.id} className="item-card-link">
                                <article className="item-card">
                                    <img src={project.iconUrl || 'https://placehold.co/600x400/cccccc/ffffff?text=Proyek'} alt={project.namaProyek} className="item-card-image" />
                                    <div className="item-card-content">
                                        <p className="item-card-category">{project.category || 'Umum'}</p>
                                        <h3 className="item-card-title">{project.namaProyek}</h3>
                                        <p className="item-card-reward">Rp {Number(project.nilaiProyek).toLocaleString('id-ID')}</p>
                                        <div className="item-card-footer">
                                            <button>Lihat Panduan <ArrowRight size={16} style={{display: 'inline', marginLeft: '4px'}}/></button>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
                
                {!loading && !error && projects.length === 0 && (
                    <p>Saat ini tidak ada proyek yang tersedia.</p>
                )}
            </div>
        </div>
    );
}