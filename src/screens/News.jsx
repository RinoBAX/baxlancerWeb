import React, { useState } from 'react';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { mockNews } from '../dummy.js';

export default function News() {
    const [selectedNews, setSelectedNews] = useState(null);

    if (selectedNews) {
        return (
            <div className="detail-page container">
                <button onClick={() => setSelectedNews(null)} className="back-button">
                    <ChevronLeft size={20} />
                    Kembali ke Berita
                </button>
                <div className="detail-content">
                    <img src={selectedNews.image} alt={selectedNews.title} className="detail-image" />
                    <h1 className="detail-title">{selectedNews.title}</h1>
                    <p className="detail-meta">{selectedNews.date}</p>
                    <div className="detail-description" dangerouslySetInnerHTML={{ __html: selectedNews.description }} />
                </div>
            </div>
        );
    }

    return (
         <div className="news-page">
            <div className="page-header">
                <div className="container section-title">
                    <h2>Berita & Pengumuman</h2>
                    <p>Informasi terbaru seputar BaxLancer dan perkembangan platform kami.</p>
                </div>
            </div>
            <div className="container list-page-container">
                <div className="item-grid">
                    {mockNews.map(item => (
                        <article key={item.id} className="item-card" onClick={() => setSelectedNews(item)}>
                             <img src={item.image} alt={item.title} className="item-card-image" />
                            <div className="item-card-content">
                                <p className="item-card-date">{item.date}</p>
                                <h3 className="item-card-title">{item.title}</h3>
                                <p className="item-card-snippet">{item.snippet}</p>
                                <div className="item-card-footer">
                                    <button>
                                        Baca Selengkapnya <ArrowRight size={16} style={{display: 'inline', marginLeft: '4px'}}/>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
