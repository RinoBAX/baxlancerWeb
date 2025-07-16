import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
// FIX: Impor Link untuk navigasi
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
    
    // Mengembalikan fungsi execute yang bisa dipanggil, mirip dengan hook asli Anda
    return { data, loading, error, execute };
};
// --- Akhir dari mock useApi ---


export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('Semua');
    const [categories, setCategories] = useState(['Semua']);

    const { data: projectData, loading, error, execute: fetchProjects } = useApi();

    useEffect(() => {
        // Menggunakan fungsi execute dari useApi untuk memuat data
        // `fetchProjects` adalah alias untuk `execute`
        fetchProjects('api/projects').catch(err => {
            // Error handling jika promise di-reject
            console.error("Gagal memuat project:", err);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Cukup dijalankan sekali saat komponen dimuat

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
        // Jika value null, undefined, atau kosong, anggap 0
        if (!value) {
            return 'Rp 0';
        }
        
        // 1. Ubah ke string untuk memastikan method .replace() bisa digunakan.
        // 2. Gunakan regex /\\D/g untuk menghapus semua karakter non-digit.
        const numericString = String(value).replace(/\D/g, '');

        // 3. Konversi string yang sudah bersih menjadi angka.
        const numberValue = parseInt(numericString, 10);

        // 4. Jika hasilnya bukan angka (misal dari string kosong), kembalikan 0.
        if (isNaN(numberValue)) {
            return 'Rp 0';
        }

        // 5. Format angka ke dalam format mata uang Indonesia.
        return `Rp ${numberValue.toLocaleString('id-ID')}`;
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <div className="bg-white border-b">
                <div className="container mx-auto px-6 py-12 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">Project Tersedia</h2>
                    <p className="text-lg text-gray-600">Pilih project yang ingin Anda kerjakan hari ini dan dapatkan penghasilan.</p>
                </div>
            </div>
            <div className="container mx-auto px-6 py-8">
                <div className="flex justify-center flex-wrap gap-2 mb-8">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${activeFilter === category ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                            onClick={() => setActiveFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {loading && <p className="text-center text-gray-500">Memuat project...</p>}
                {error && <p className="text-center text-red-500">Error: {error.message}</p>}
                
                {!loading && !error && projects.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map(project => (
                            <Link to={`/listproject/${project.id}`} key={project.id} className="block group">
                                <article className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-transform duration-300 group-hover:scale-105">
                                    <img 
                                        src={project.iconUrl || 'https://placehold.co/600x400/e0e0e0/757575?text=Project'} 
                                        alt={project.namaproject} 
                                        className="w-full h-48 object-cover"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e0e0e0/757575?text=Error'; }}
                                    />
                                    <div className="p-6 flex flex-col flex-grow">
                                        <p className="text-sm font-semibold text-blue-600 mb-1">{project.category || 'Umum'}</p>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2 flex-grow">{project.namaproject}</h3>
                                        
                                        {/* PERBAIKAN DI SINI */}
                                        <p className="text-lg font-semibold text-green-600 mb-4">{formatReward(project.nilaiproject)}</p>
                                        
                                        <div className="mt-auto">
                                             <div className="flex items-center justify-center text-blue-600 font-semibold">
                                                <span>Lihat Panduan</span>
                                                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1"/>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
                
                {!loading && !error && filteredProjects.length === 0 && (
                     <p className="text-center text-gray-500 mt-8">Tidak ada project yang cocok dengan filter "{activeFilter}".</p>
                )}

                {!loading && !error && projects.length === 0 && (
                    <p className="text-center text-gray-500 mt-8">Saat ini tidak ada project yang tersedia.</p>
                )}
            </div>
        </div>
    );
}
