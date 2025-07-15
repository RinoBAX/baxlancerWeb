import React, { useState, useEffect } from 'react';
import { ChevronLeft, Briefcase as BriefcaseIcon, Building, Tag, ArrowRight } from 'lucide-react';
import { getProjects } from '../hooks/useApi'; // Import fungsi API

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Data kategori bisa dibuat dinamis atau tetap statis
    const categories = ['Semua', 'Keuangan', 'Survei', 'Aplikasi']; 
    const [activeFilter, setActiveFilter] = useState('Semua');

    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            setError(null);
            const projectData = await getProjects();
            if (projectData && projectData.data) {
                setProjects(projectData.data);
            } else {
                setError('Tidak dapat memuat data proyek.');
            }
            setIsLoading(false);
        };

        fetchProjects();
    }, []);

    const filteredProjects = activeFilter === 'Semua' 
        ? projects 
        : projects.filter(p => p.category === activeFilter);

    if (selectedProject) {
        return (
            <div className="detail-page container">
                <button onClick={() => setSelectedProject(null)} className="back-button">
                    <ChevronLeft size={20} />
                    Kembali ke Daftar Proyek
                </button>
                <div className="detail-content">
                    {/* Menggunakan properti dari API */}
                    <img src={selectedProject.iconUrl || 'https://placehold.co/800x400/cccccc/ffffff?text=Proyek'} alt={selectedProject.namaProyek} className="detail-image" />
                    <h1 className="detail-title">{selectedProject.namaProyek}</h1>
                    <div className="detail-meta">
                        <span><Tag size={16} /> {selectedProject.category || 'Umum'}</span>
                    </div>
                    {/* Deskripsi dari API */}
                    <div className="detail-description" dangerouslySetInnerHTML={{ __html: selectedProject.deskripsi }} />
                     <div className="project-detail-reward">
                        <span>
                            Hasil Pengerjaan: Rp {Number(selectedProject.nilaiProyek).toLocaleString('id-ID')}
                        </span>
                    </div>
                </div>
            </div>
        );
    }

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

                {isLoading && <p>Memuat proyek...</p>}
                {error && <p style={{color: 'red'}}>{error}</p>}

                {!isLoading && !error && (
                    <div className="item-grid">
                        {filteredProjects.map(project => (
                            <article key={project.id} className="item-card" onClick={() => setSelectedProject(project)}>
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
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}