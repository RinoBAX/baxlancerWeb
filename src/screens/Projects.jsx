import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useApi } from '../hooks/useApi';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('Semua');
    const [categories, setCategories] = useState(['Semua']);
    const { data: projectData, loading, error, execute: fetchProjects } = useApi();

    useEffect(() => {
        fetchProjects('api/projects').catch(err => {
            console.error("Gagal memuat project:", err.message);
        });
    }, []);
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

    const formatReward = (value) => {
        if (!value) {
            return 'Rp 0';
        }
        const numericString = String(value).replace(/\D/g, '');
        const numberValue = parseInt(numericString, 10);
        if (isNaN(numberValue)) {
            return 'Rp 0';
        }
        return `Rp ${numberValue.toLocaleString('id-ID')}`;
    };

    return (
        <div className="projects-page">
            <div className="page-header">
                <div className="container section-title">
                    <h2>Project Tersedia</h2>
                    <p>Pilih project yang ingin Anda kerjakan hari ini dan dapatkan penghasilan.</p>
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

                {loading && <p>Memuat project...</p>}
                {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}

                {!loading && !error && projects.length > 0 && (
                    <div className="item-grid">
                        {filteredProjects.map(project => (
                            <Link to={project.projectUrl} key={project.id} className="item-card-link">
                                <article className="item-card">
                                    <img
                                        src={project.iconUrl || 'https://placehold.co/600x400/cccccc/ffffff?text=project'}
                                        alt={project.namaProyek}
                                        className="item-card-image"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e0e0e0/757575?text=Error'; }}
                                    />
                                    <div className="item-card-content">
                                        <p className="item-card-category">{project.category || 'Umum'}</p>
                                        <h3 className="item-card-title">{project.namaProyek}</h3>
                                        <p className="item-card-reward">{formatReward(project.nilaiProyek)}</p>
                                        <div className="item-card-footer">
                                            <button>Lihat Panduan <ArrowRight size={16} style={{ display: 'inline', marginLeft: '4px' }} /></button>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}

                {!loading && !error && filteredProjects.length === 0 && (
                    <p>Tidak ada project yang cocok dengan filter "{activeFilter}".</p>
                )}

                {!loading && !error && projects.length === 0 && (
                    <p>Saat ini tidak ada project yang tersedia.</p>
                )}
            </div>
        </div>
    );
}
