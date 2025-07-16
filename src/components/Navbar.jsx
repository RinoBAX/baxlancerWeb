import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Impor logo dari folder assets.
// Path '../assets/' sudah benar jika Navbar.jsx ada di dalam src/components/
import logoBax from '../assets/iconBaxRemovedBG.png';

// Komponen Navbar menerima prop `navigate` dari App.jsx untuk mengubah URL.
export default function Navbar({ navigate }) {
    const [isOpen, setIsOpen] = useState(false);

    // Daftar link navigasi menggunakan path URL yang benar.
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Proyek', path: '/listproject' },
        // { name: 'Cara Kerja', path: '/how-it-works' }, // Anda bisa tambahkan ini nanti jika sudah ada halamannya
        { name: 'Berita', path: '/news' },
    ];

    // Fungsi helper untuk menangani klik navigasi.
    const handleNavigate = (e, path) => {
        e.preventDefault(); // Mencegah reload halaman
        navigate(path);     // Memanggil fungsi navigasi dari App.jsx
        setIsOpen(false);   // Menutup menu mobile setelah link diklik
    };

    return (
        <header className="navbar">
            <div className="container">
                <div className="navbar-content">
                    {/* Brand Logo */}
                    <a href="/" onClick={(e) => handleNavigate(e, '/')} className="navbar-brand">
                        <img src={logoBax} alt="BaxLancer Logo" style={{ height: '40px' }} />
                    </a>
                    
                    {/* Menu untuk Desktop (tersembunyi di mobile) */}
                    <nav className="navbar-links hidden md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={(e) => handleNavigate(e, link.path)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Tombol Menu untuk Mobile (hanya muncul di mobile) */}
                    <button onClick={() => setIsOpen(!isOpen)} type="button" className="mobile-menu-button md:hidden">
                        {isOpen ? <X color="#0f172a" /> : <Menu color="#0f172a" />}
                    </button>
                </div>
            </div>

            {/* Menu Dropdown untuk Mobile */}
            {isOpen && (
                <div className="mobile-menu md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            onClick={(e) => handleNavigate(e, link.path)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};
