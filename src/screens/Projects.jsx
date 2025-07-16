import React, { useState, useEffect } from 'react';
import { ChevronLeft, Tag, ArrowRight } from 'lucide-react';
// Import hook useApi, bukan fungsi spesifik
import { useApi } from '../hooks/useApi';

export default function Projects() {
    // State untuk UI: proyek yang dipilih dan filter kategori
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeFilter, setActiveFilter] = useState('Semua');

    // Panggil hook useApi untuk mengelola state data, loading, dan error
    // Kita beri nama 'data' menjadi 'projectData' agar jelas ini adalah respons mentah dari API
    // Kita beri nama 'execute' menjadi 'fetchProjects' agar lebih deskriptif
    const { data: projectData, loading, error, execute: fetchProjects } = useApi(null);

    // useEffect hanya bertugas memanggil fetchProjects sekali saat komponen dimuat
    useEffect(() => {
        // Panggil fungsi dari hook dengan endpoint yang benar, misal '/projects'
        fetchProjects('/projects').catch(err => {
            console.error("Gagal memuat proyek:", err.message);
        });
        // Dependensi pada fetchProjects memastikan useEffect berjalan jika fungsi (atau token) berubah.
    }, [fetchProjects]);

    // Ekstrak array proyek dari respons API.
    // Ini menangani struktur API Anda yang mengembalikan { data: [...] }
    const projects = projectData?.data || [];

    // Data kategori bisa dibuat dinamis atau tetap statis
    const categories = ['Semua', 'Keuangan', 'Survei', 'Aplikasi'];

    // Logika filter tetap sama, sekarang menggunakan data `projects` yang sudah benar
    const filteredProjects = activeFilter === 'Semua'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    // --- Tampilan Detail Proyek (Tidak ada perubahan di sini) ---
    if (selectedProject) {
        return (
            <div className="detail-page container">
                <button onClick={() => setSelectedProject(null)} className="back-button">
                    <ChevronLeft size={20} />
                    Kembali ke Daftar Proyek
                </button>
                <div className="detail-content">
                    <img src={selectedProject.iconUrl || 'https://placehold.co/800x400/cccccc/ffffff?text=Proyek'} alt={selectedProject.namaProyek} className="detail-image" />
                    <h1 className="detail-title">{selectedProject.namaProyek}</h1>
                    <div className="detail-meta">
                        <span><Tag size={16} /> {selectedProject.category || 'Umum'}</span>
                    </div>
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

    // --- Tampilan Daftar Proyek ---
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

                {/* Gunakan state `loading` dan `error` dari hook */}
                {loading && <p>Memuat proyek...</p>}
                {error && <p style={{color: 'red'}}>Error: {error.message}</p>}

                {/* Tampilkan data jika loading selesai, tidak ada error, dan data ada */}
                {!loading && !error && (
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
