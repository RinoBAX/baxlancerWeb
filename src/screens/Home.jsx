import React from 'react';
import { Users, DollarSign, ArrowRight, Zap as ZapIcon } from 'lucide-react';
import submissionsPage from '../assets/SubmissionsPage.jpeg';
import { Link } from 'react-router-dom';


// --- Helper Components & Data ---

// Ikon Android sebagai komponen SVG untuk konsistensi dan performa
const AndroidIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8.81a4 4 0 0 1-8 0" />
        <path d="M12 15H12a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1Z" />
        <path d="M18.2 12.11a7.5 7.5 0 0 1-12.4 0" />
        <path d="M21 10.97c0-1.5-3-4.5-9-4.5s-9 3-9 4.5" />
        <path d="M7 16.12a2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5" />
        <path d="M8.5 21a1.5 1.5 0 0 1-1.5-1.5v-2.62a1.5 1.5 0 0 1 1.5-1.5h0a1.5 1.5 0 0 1 1.5 1.5V19.5A1.5 1.5 0 0 1 8.5 21Z" />
        <path d="M15.5 21a1.5 1.5 0 0 1-1.5-1.5v-2.62a1.5 1.5 0 0 1 1.5-1.5h0a1.5 1.5 0 0 1 1.5 1.5V19.5A1.5 1.5 0 0 1 15.5 21Z" />
    </svg>
);

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Project-List', path: '/listproject' },
    { name: 'Cara Kerja', path: '/how-it-works' },
    { name: 'Berita', path: '/news' },
];

const features = [
    { icon: <DollarSign color="white" size={24} />, title: "Peluang Tanpa Batas", description: "Akses berbagai project tanpa perlu sistem bidding yang rumit." },
    { icon: <Users color="white" size={24} />, title: "Komunitas & Komisi", description: "Bangun jaringan Anda dan dapatkan penghasilan pasif dari komisi referral." },
    { icon: <ZapIcon color="white" size={24} />, title: "Proses Cepat & Mudah", description: "Mulai kerjakan project dan cairkan dana dengan proses yang simpel dan transparan." },
];


// --- Main Home Component ---

// Menggunakan `export default` agar sesuai dengan cara impor di App.jsx
export default function Home({ navigate }) {
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
                            <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>
                                BaxLancer hadir untuk membuka pintu kesempatan. Apapun latar belakang Anda, di sini Anda bisa mendapatkan penghasilan dengan mengerjakan project-project sederhana.
                            </p>
                            <div className="hero-actions-wrapper fade-in-up" style={{ animationDelay: '0.4s' }}>
                                <Link key="Project-List" to="/listproject">
                                    <a href="/listproject" onClick={(e) => { e.preventDefault(); navigate('/listproject'); }} className="btn btn-primary">
                                        Mulai Cari project <ArrowRight style={{ marginLeft: '0.5rem' }} />
                                    </a>
                                </Link>
                                <div className="download-box">
                                    <p className="download-prompt-text">Unduh aplikasi kami sekarang</p>
                                    <div className="app-downloads">
                                        {/* https://drive.usercontent.google.com/download?id=1vNDJqd_6dZ4ifjZICKrgvXOsvKgxQ4XH&export=download&authuser=0&confirm=t&uuid=a0beaf99-58f5-4cf0-a4d2-66fe870dc838&at=AN8xHor1ZIbw6nAu1__Ku17tZddO:1752744119847 */}
                                        <a href="baxlancerimagefile/uploads/berkas-1753027848904-195246689.apk" className="btn btn-download">
                                            <AndroidIcon />
                                            <span>Android</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-visual">
                            <div className="hero-visual-placeholder">
                                <img src={submissionsPage} style={{ height: '90%', objectFit: 'cover', borderRadius: '18px' }} alt="BaxLancer App Showcase" />
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
                            <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
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
