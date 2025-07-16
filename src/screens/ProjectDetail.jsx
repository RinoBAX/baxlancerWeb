import React, { useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { ChevronLeft, Tag } from 'lucide-react';
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

    const project = projectData?.data;

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
                
                <div className="detail-description" dangerouslySetInnerHTML={{ __html: project.deskripsi }} />
                
                <div className="project-detail-reward">
                    <span>
                        Hasil Pengerjaan: {formatReward(project.nilaiProyek)}
                    </span>
                </div>
            </div>
        </div>
    );
}
