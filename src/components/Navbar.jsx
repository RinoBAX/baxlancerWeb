import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
// 1. Impor `Link` dari react-router-dom
import { Link } from 'react-router-dom';

import logoBax from '../assets/iconBaxRemovedBG.png';

// 2. Hapus prop `navigate` yang sudah tidak diperlukan
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Proyek', path: '/listproject' },
        { name: 'Berita', path: '/news' },
    ];

    // Fungsi ini tidak lagi diperlukan
    // const handleNavigate = (e, path) => { ... };

    return (
        <header className="navbar">
            <div className="container">
                <div className="navbar-content">
                    {/* 3. Ganti `<a>` dengan `<Link>` dan `href` dengan `to` */}
                    <Link to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
                        <img src={logoBax} alt="BaxLancer Logo" style={{ height: '40px' }} />
                    </Link>
                    
                    <nav className="navbar-links hidden md:flex">
                        {navLinks.map((link) => (
                            // Ganti `<a>` dengan `<Link>`
                            <Link key={link.name} to={link.path}>
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <button onClick={() => setIsOpen(!isOpen)} type="button" className="mobile-menu-button md:hidden">
                        {isOpen ? <X color="#0f172a" /> : <Menu color="#0f172a" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="mobile-menu md:hidden">
                    {navLinks.map((link) => (
                        // Ganti `<a>` dengan `<Link>` dan hapus onClick manual
                        <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};