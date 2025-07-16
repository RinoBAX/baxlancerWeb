import React, { useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { ChevronLeft, Tag, ExternalLink, Paperclip } from 'lucide-react';
import { useApi } from '../hooks/useApi';
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

export default function ProjectDetail() {
    const { projectId } = useParams();
    const { data: projectData, loading, error, execute: fetchProject } = useApi();

    useEffect(() => {
        if (projectId) {
            fetchProject(`api/projects/${projectId}`).catch(err => {
                console.error("Gagal memuat detail project:", err.message);
            });
        }
    }, [projectId, fetchProject]);

    const project = projectData;
    if (loading) return <div className="container"><p>Memuat project...</p></div>;
    if (error) return <div className="container"><p style={{color: 'red'}}>Error: {error.message}</p></div>;
    if (!project) return <div className="container"><p>Project tidak ditemukan.</p></div>;

    return (
        <div className="project-detail-page container">
            <RouterLink to="/listproject" className="back-button">
                <ChevronLeft size={20} />
                Kembali ke Daftar Project
            </RouterLink>
            
            <div className="detail-content">
                <img 
                    src={project.iconUrl || 'https://placehold.co/800x400/cccccc/ffffff?text=Project'} 
                    alt={project.namaProyek}
                    className="detail-image" 
                />
                <h1 className="detail-title">{project.namaProyek}</h1>
                
                <div className="detail-meta">
                    <span><Tag size={16} /> {project.category || 'Umum'}</span>
                </div>
                {project.fields && project.fields.length > 0 && (
                    <div className="project-fields-section">
                        <h2 className="fields-title">Data yang Diperlukan</h2>
                        <ul className="fields-list">
                            {project.fields.map(field => (
                                <li key={field.id} className="field-item">
                                    <Paperclip size={16} />
                                    <span>{field.label} ({field.fieldType})</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
                <div className="project-detail-reward">
                    <span>
                        Hasil Pengerjaan: {formatReward(project.nilaiProyek)}
                    </span>
                </div>
                {project.projectUrl && (
                    <a 
                        href={project.projectUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-url-button"
                    >
                        Lihat Panduan Pengerjaan
                        <ExternalLink size={18} />
                    </a>
                )}
            </div>
        </div>
    );
}
