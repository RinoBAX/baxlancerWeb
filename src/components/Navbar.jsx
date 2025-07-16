import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import logoBax from '../assets/iconBaxRemovedBG.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // FIX: Tambahkan kembali link untuk 'Cara Kerja'
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Project-List', path: '/listproject' },
        { name: 'Cara Kerja', path: '/how-it-works' },
        { name: 'Berita', path: '/news' },
    ];

    return (
        <header className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
                        <img src={logoBax} alt="BaxLancer Logo" style={{ height: '60px' }} />
                    </Link>
                    
                    <nav className="navbar-links hidden md:flex">
                        {navLinks.map((link) => (
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
                        <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};
