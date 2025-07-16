import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
// Anda perlu memastikan react-router-dom sudah terpasang: npm install react-router-dom
import { Link } from 'react-router-dom'; 

// Asumsi hook useApi ada di path ini
// import { useApi } from '../hooks/useApi'; 

// --- Mock useApi hook untuk demonstrasi ---
// Hapus atau ganti bagian ini dengan hook asli Anda
const useApi = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const mockProjects = {
        data: [
            { id: 1, namaproject: 'Desain Logo Perusahaan Kopi', category: 'Desain Grafis', nilaiproject: '1.500.000', iconUrl: 'https://placehold.co/600x400/3498db/ffffff?text=Logo+Design' },
            { id: 2, namaproject: 'Buat Website Toko Online', category: 'Web Development', nilaiproject: '5.000.000', iconUrl: 'https://placehold.co/600x400/2ecc71/ffffff?text=E-Commerce' },
            { id: 3, namaproject: 'Content Writing untuk Blog', category: 'Penulisan', nilaiproject: '750.000', iconUrl: 'https://placehold.co/600x400/e74c3c/ffffff?text=Writing' },
            { id: 4, namaproject: 'Video Promosi Produk', category: 'Video Editing', nilaiproject: '2.000.000', iconUrl: 'https://placehold.co/600x400/f39c12/ffffff?text=Video+Ad' },
            { id: 5, namaproject: 'Jasa SEO Website', category: 'Web Development', nilaiproject: null, iconUrl: 'https://placehold.co/600x400/9b59b6/ffffff?text=SEO' }, // Contoh dengan nilai null
        ]
    };

    const execute = async (url) => {
        setLoading(true);
        setError(null);
        console.log(`Fetching from: ${url}`);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulasi loading
        try {
            setData(mockProjects);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };
    
    return { data, loading, error, execute };
};
// --- Akhir dari mock useApi ---


export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('Semua');
    const [categories, setCategories] = useState(['Semua']);

    const { data: projectData, loading, error, execute: fetchProjects } = useApi();

    useEffect(() => {
        fetchProjects('api/projects').catch(err => {
            console.error("Gagal memuat project:", err);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        
    /**
     * Fungsi untuk memformat nilai project menjadi format mata uang Rupiah.
     * Membersihkan string dari karakter non-digit sebelum konversi.
     * @param {string | number | null} value - Nilai project dari API.
     * @returns {string} - Nilai yang sudah diformat, contoh: "Rp 1.500.000".
     */
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

    // Mengembalikan JSX dengan struktur dan nama class asli
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
                {error && <p style={{color: 'red'}}>Error: {error.message}</p>}
                
                {!loading && !error && projects.length > 0 && (
                    <div className="item-grid">
                        {filteredProjects.map(project => (
                            <Link to={`/listproject/${project.id}`} key={project.id} className="item-card-link">
                                <article className="item-card">
                                    <img 
                                        src={project.iconUrl || 'https://placehold.co/600x400/cccccc/ffffff?text=project'} 
                                        alt={project.namaproject} 
                                        className="item-card-image"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e0e0e0/757575?text=Error'; }}
                                    />
                                    <div className="item-card-content">
                                        <p className="item-card-category">{project.category || 'Umum'}</p>
                                        <h3 className="item-card-title">{project.namaproject}</h3>
                                        
                                        {/* PERBAIKAN DARI MASALAH NaN TETAP DIGUNAKAN */}
                                        <p className="item-card-reward">{formatReward(project.nilaiproject)}</p>
                                        
                                        <div className="item-card-footer">
                                            <button>Lihat Panduan <ArrowRight size={16} style={{display: 'inline', marginLeft: '4px'}}/></button>
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
