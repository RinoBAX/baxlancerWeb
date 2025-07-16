import React, { useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
// import { useApi } from '../hooks/useApi'; // Pastikan path ini benar

export function NewsDetail() {
    const { newsId } = useParams();
    const { data: newsItem, loading, error, execute: fetchNewsItem } = useApi(null);

    useEffect(() => {
        if (newsId) {
            // Panggil API untuk mengambil data berita spesifik ini
            // PASTIKAN ENDPOINT INI ADA DI BACKEND ANDA
            fetchNewsItem(`api/news/${newsId}`).catch(err => {
                console.error("Gagal memuat detail berita:", err.message);
            });
        }
    }, [newsId, fetchNewsItem]);

    if (loading) return <div className="container"><p>Memuat berita...</p></div>;
    if (error) return <div className="container"><p style={{color: 'red'}}>Error: {error.message}</p></div>;
    if (!newsItem) return <div className="container"><p>Berita tidak ditemukan.</p></div>;

    return (
        <div className="detail-page container">
            <RouterLink to="/news" className="back-button">
                <ChevronLeft size={20} />
                Kembali ke Berita
            </RouterLink>
            <div className="detail-content">
                <img src={newsItem.imageNews} alt={newsItem.description} className="detail-image" />
                <h1 className="detail-title">{newsItem.description}</h1>
                <p className="detail-meta">
                    {new Date(newsItem.tglDibuat).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <div className="detail-description">
                    <p>Informasi lebih lanjut dapat dilihat pada tautan berikut: <a href={newsItem.newsUrl} target="_blank" rel="noopener noreferrer">{newsItem.newsUrl}</a></p>
                </div>
            </div>
        </div>
    );
}