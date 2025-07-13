import React, { useState } from 'react';
import { ChevronLeft, Briefcase as BriefcaseIcon, Building, Tag, ArrowRight } from 'lucide-react';
import { mockProjects } from '../dummy.js';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeFilter, setActiveFilter] = useState('Semua');

    const categories = ['Semua', ...new Set(mockProjects.map(p => p.category))];

    const filteredProjects = activeFilter === 'Semua' 
        ? mockProjects 
        : mockProjects.filter(p => p.category === activeFilter);

    if (selectedProject) {
        return (
            <div className="detail-page container">
                <button onClick={() => setSelectedProject(null)} className="back-button">
                    <ChevronLeft size={20} />
                    Kembali ke Daftar Proyek
                </button>
                <div className="detail-content">
                    <img src={selectedProject.image} alt={selectedProject.title} className="detail-image" />
                    <h1 className="detail-title">{selectedProject.title}</h1>
                    <div className="detail-meta">
                        <span><Building size={16} /> {selectedProject.client}</span>
                        <span><Tag size={16} /> {selectedProject.category}</span>
                    </div>
                    <div className="detail-description" dangerouslySetInnerHTML={{ __html: selectedProject.guide }} />
                     <div className="project-detail-reward">
                        <span>
                            Hasil Pengerjaan: {selectedProject.reward}
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
                <div className="item-grid">
                    {filteredProjects.map(project => (
                        <article key={project.id} className="item-card" onClick={() => setSelectedProject(project)}>
                            <img src={project.image} alt={project.title} className="item-card-image" />
                            <div className="item-card-content">
                                <p className="item-card-category">{project.category}</p>
                                <h3 className="item-card-title">{project.title}</h3>
                                <p className="item-card-reward">{project.reward}</p>
                                <div className="item-card-footer">
                                    <button>Lihat Panduan <ArrowRight size={16} style={{display: 'inline', marginLeft: '4px'}}/></button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}