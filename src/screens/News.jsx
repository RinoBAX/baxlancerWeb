import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft } from 'lucide-react';
// Import hook useApi, bukan fungsi spesifik
import { useApi } from '../hooks/useApi';

export default function News() {
    // State untuk UI, yaitu berita mana yang sedang dipilih
    const [selectedNews, setSelectedNews] = useState(null);

    // Panggil hook useApi.
    // Kita bisa menamai ulang 'execute' menjadi 'fetchNews' agar lebih deskriptif.
    // 'data' akan berisi hasil dari API, 'loading' dan 'error' adalah state dari hook.
    // Kita asumsikan endpoint berita tidak memerlukan token, jadi kita bisa pass `null`.
    const { data: newsList, loading, error, execute: fetchNews } = useApi(null);

    // useEffect sekarang hanya bertugas untuk memanggil fungsi fetchNews sekali.
    useEffect(() => {
        // Panggil fungsi execute dari hook dengan endpoint yang benar, misal '/news'
        // Gunakan .catch() untuk menangani error jika perlu, meskipun error sudah ada di state `error`
        fetchNews('api/news').catch(err => {
            console.error("Gagal memuat berita:", err.message);
        });
        // Dependensi pada fetchNews memastikan useEffect berjalan jika fungsi (atau token) berubah.
    }, [fetchNews]);

    // --- Tampilan Detail Berita (Tidak ada perubahan di sini) ---
    if (selectedNews) {
        return (
            <div className="detail-page container">
                <button onClick={() => setSelectedNews(null)} className="back-button">
                    <ChevronLeft size={20} />
                    Kembali ke Berita
                </button>
                <div className="detail-content">
                    <img src={selectedNews.imageNews} alt={selectedNews.description} className="detail-image" />
                    <h1 className="detail-title">{selectedNews.description}</h1>
                    <p className="detail-meta">
                        {new Date(selectedNews.tglDibuat).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <div className="detail-description">
                       <p>Informasi lebih lanjut dapat dilihat pada tautan berikut: <a href={selectedNews.newsUrl} target="_blank" rel="noopener noreferrer">{selectedNews.newsUrl}</a></p>
                    </div>
                </div>
            </div>
        );
    }

    // --- Tampilan Daftar Berita ---
    return (
        <div className="news-page">
            <div className="page-header">
                <div className="container section-title">
                    <h2>Berita & Pengumuman</h2>
                    <p>Informasi terbaru seputar BaxLancer dan perkembangan platform kami.</p>
                </div>
            </div>
            <div className="container list-page-container">
                {/* Gunakan state `loading` dari hook */}
                {loading && <p>Memuat berita...</p>}

                {/* Gunakan state `error` dari hook. Pesan error akan lebih detail. */}
                {error && <p style={{color: 'red'}}>Error: {error.message}</p>}

                {/* Tampilkan data jika loading selesai, tidak ada error, dan data ada */}
                {!loading && !error && newsList && (
                    <div className="item-grid">
                        {/* Ganti newsList dengan `data` dari hook, yang sudah kita ganti namanya menjadi `newsList` */}
                        {newsList.map(item => (
                            <article key={item.id} className="item-card" onClick={() => setSelectedNews(item)}>
                                 <img src={item.imageNews} alt={item.description} className="item-card-image" />
                                <div className="item-card-content">
                                    <p className="item-card-date">
                                        {new Date(item.tglDibuat).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </p>
                                    <h3 className="item-card-title">{item.description}</h3>
                                    <div className="item-card-footer">
                                        <button>
                                            Baca Selengkapnya <ArrowRight size={16} style={{display: 'inline', marginLeft: '4px'}}/>
                                        </button>
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
