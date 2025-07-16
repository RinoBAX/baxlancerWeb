import React from 'react';
import { ArrowRight } from 'lucide-react';
// ... import lainnya

// Terima prop `navigate` dari App.js
export function Home({ navigate }) {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-text">
                    {/* ... konten hero lainnya ... */}
                    <div className="hero-actions-wrapper">
                        {/* FIX: onClick sekarang memanggil navigate('/listproject') */}
                        <a href="/listproject" onClick={(e) => { e.preventDefault(); navigate('/listproject'); }} className="btn btn-primary">
                            Mulai Cari Proyek <ArrowRight style={{ marginLeft: '0.5rem' }} />
                        </a>
                        {/* ... sisa konten ... */}
                    </div>
                </div>
            </div>
        </section>
    );
}