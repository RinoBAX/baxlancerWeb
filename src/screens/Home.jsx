import React from 'react';
import { Users, DollarSign, ArrowRight, Newspaper, Zap as ZapIcon } from 'lucide-react';
// Pastikan path ke gambar ini sudah benar di dalam proyek Anda
import submissionsPage from '../assets/SubmissionsPage.jpeg';

// --- Helper Components & Data ---

// Ikon Android sebagai komponen SVG untuk konsistensi dan performa
const AndroidIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8.81a4 4 0 0 1-8 0"/>
        <path d="M12 15H12a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1Z"/>
        <path d="M18.2 12.11a7.5 7.5 0 0 1-12.4 0"/>
        <path d="M21 10.97c0-1.5-3-4.5-9-4.5s-9 3-9 4.5"/>
        <path d="M7 16.12a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5"/>
        <path d="M8.5 21a1.5 1.5 0 0 1-1.5-1.5v-2.62a1.5 1.5 0 0 1 1.5-1.5h0a1.5 1.5 0 0 1 1.5 1.5V19.5A1.5 1.5 0 0 1 8.5 21Z"/>
        <path d="M15.5 21a1.5 1.5 0 0 1-1.5-1.5v-2.62a1.5 1.5 0 0 1 1.5-1.5h0a1.5 1.5 0 0 1 1.5 1.5V19.5A1.5 1.5 0 0 1 15.5 21Z"/>
    </svg>
);

// Ikon iOS sebagai komponen SVG
const IosIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.33 8.64A6.2 6.2 0 0 0 9.24 6.5C8.04 5.4 6.53 4.81 5.14 5.11A3.42 3.42 0 0 0 2.22 8.2c0 2.47 1.63 4.26 3.42 4.26a3.4 3.4 0 0 0 2.55-1.12"/>
        <path d="M12.24 18.91c-1.63.93-3.42 1.3-4.81 1a6.8 6.8 0 0 1-4.21-4.21c-.3-1.39.29-2.9 1.39-4.1.93-1.09 2.12-1.87 3.42-2.17"/>
        <path d="M19.78 15.8c0-2.47-1.63-4.26-3.42-4.26a3.4 3.4 0 0 0-2.55 1.12"/>
        <path d="M11.76 5.09c1.63-.93 3.42-1.3 4.81-1a6.8 6.8 0 0 1 4.21 4.21c.3 1.39-.29 2.9-1.39 4.1-.93 1.09-2.12 1.87-3.42 2.17"/>
    </svg>
)

const features = [
    { icon: <DollarSign color="white" size={24} />, title: "Peluang Tanpa Batas", description: "Akses berbagai proyek tanpa perlu sistem bidding yang rumit." },
    { icon: <Users color="white" size={24} />, title: "Komunitas & Komisi", description: "Bangun jaringan Anda dan dapatkan penghasilan pasif dari komisi referral." },
    { icon: <ZapIcon color="white" size={24} />, title: "Proses Cepat & Mudah", description: "Mulai kerjakan proyek dan cairkan dana dengan proses yang simpel dan transparan." },
];

// --- Main Home Component ---

export default function Home({ setCurrentPage }) {
    return (
        <div>
            {/* Hero Section */}
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
                                        {/* <button disabled className="btn btn-download btn-disabled" title="Coming Soon!">
                                            <IosIcon />
                                            <span>iOS</span>
                                        </button> */}
                                        <a href="https://baxlancerimagefile.nos.wjv-1.neo.id/uploads/2-1752638807132-618504387.apk" className="btn btn-download">
                                            <AndroidIcon />
                                            <span>Android</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="hero-visual-placeholder">
                                <img src={submissionsPage} style={{height: '80%', width: '100%', objectFit: 'cover', borderRadius: '18px' }} alt="BaxLancer App Showcase"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
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
