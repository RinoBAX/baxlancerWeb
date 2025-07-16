import React, { useEffect, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApi } from '../hooks/useApi';

export default function News() {
    // State `selectedNews` tidak lagi diperlukan
    const { data: newsData, loading, error, execute: fetchNews } = useApi(null);

    useEffect(() => {
        fetchNews('api/news').catch(err => {
            console.error("Gagal memuat berita:", err.message);
        });
    }, [fetchNews]);

    const newsList = useMemo(() => {
        if (!newsData) return [];
        if (Array.isArray(newsData)) return newsData;
        if (newsData.data && Array.isArray(newsData.data)) return newsData.data;
        return [];
    }, [newsData]);

    return (
        <div className="news-page">
            <div className="page-header">
                <div className="container section-title">
                    <h2>Berita & Pengumuman</h2>
                    <p>Informasi terbaru seputar BaxLancer dan perkembangan platform kami.</p>
                </div>
            </div>
            <div className="container list-page-container">
                {loading && <p>Memuat berita...</p>}
                {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
                
                {!loading && !error && newsList.length === 0 && (
                    <p>Saat ini tidak ada berita yang tersedia.</p>
                )}

                {!loading && !error && newsList.length > 0 && (
                    <div className="item-grid">
                        {newsList.map(item => (
                            <Link to={`/news/${item.id}`} key={item.id} className="item-card-link">
                                <article className="item-card">
                                    <img src={item.imageNews} alt={item.description} className="item-card-image" />
                                    <div className="item-card-content">
                                        <p className="item-card-date">
                                            {new Date(item.tglDibuat).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </p>
                                        <h3 className="item-card-title">{item.description}</h3>
                                        <div className="item-card-footer">
                                            <button>
                                                Baca Selengkapnya <ArrowRight size={16} style={{ display: 'inline', marginLeft: '4px' }} />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}