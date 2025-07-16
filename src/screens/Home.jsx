import React from 'react';
import { Users, DollarSign, ArrowRight, Newspaper, Zap as ZapIcon } from 'lucide-react';
import submissionsPage from '../assets/submissionsPage.jpeg';

export default function Home({ setCurrentPage }) {
    const features = [
        { icon: <DollarSign color="white" size={24} />, title: "Peluang Tanpa Batas", description: "Akses berbagai proyek tanpa perlu sistem bidding yang rumit." },
        { icon: <Users color="white" size={24} />, title: "Komunitas & Komisi", description: "Bangun jaringan Anda dan dapatkan penghasilan pasif dari komisi referral." },
        { icon: <ZapIcon color="white" size={24} />, title: "Proses Cepat & Mudah", description: "Mulai kerjakan proyek dan cairkan dana dengan proses yang simpel dan transparan." },
    ];

    return (
        <div>
            <section className="hero-section">
                <div className="container">
                    <div className="hero-grid">
                        <div className="hero-text">
                            <h1 className="hero-title fade-in-up">
                                Kesempatan Berpenghasilan <span className="highlight">Untuk Semua</span>
                            </h1>
                            <p className="hero-subtitle fade-in-up" style={{animationDelay: '0.2s'}}>
                                BaxLancer hadir untuk membuka pintu kesempatan. Apapun latar belakang Anda, di sini Anda bisa mendapatkan penghasilan dengan mengerjakan proyek-proyek sederhana.
                            </p>
                            <div className="hero-actions-wrapper fade-in-up" style={{animationDelay: '0.4s'}}>
                                <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('projects'); }} className="btn btn-primary">
                                    Mulai Cari Proyek <ArrowRight style={{marginLeft: '0.5rem'}}/>
                                </a>
                                <div className="download-box">
                                    <p className="download-prompt-text">Unduh aplikasi kami sekarang</p>
                                    <div className="app-downloads">
                                        {/* <a href="#" className="btn btn-download">
                                            <img 
                                                src="[https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWp4PiyqvbzAhipkkD_WjOYUV6HqqmEMjPgA&s](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWp4PiyqvbzAhipkkD_WjOYUV6HqqmEMjPgA&s)" 
                                                alt="Logo iOS" 
                                                className="btn-icon-img" 
                                            />
                                            <span>iOS</span>
                                        </a> */}
                                        <a href="https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/2-1752638807132-618504387.apk" className="btn btn-download">
                                            <img 
                                                src="data:image/png;base64,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" 
                                                alt="Logo Android" 
                                                className="btn-icon-img btn-icon-android" 
                                            />
                                            <span>Android</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="hero-visual-placeholder">
                                <img src={submissionsPage} style={{height: '100%', objectFit: 'cover', borderRadius: '18px' }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <div className="container">
                    <div className="section-title">
                         <h2>Kenapa Memilih BaxLancer?</h2>
                         <p>Platform yang dirancang untuk memberikan kemudahan, keamanan, dan kesempatan bertumbuh bagi semua freelancer.</p>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card" style={{animationDelay: `${index * 0.1}s`}}>
                                <div className="feature-icon-wrapper">
                                    {feature.icon}
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}