import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import logoBax from '../assets/iconBaxRemovedBG.png';

export default function Navbar({ setCurrentPage }) {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', page: 'home' },
        { name: 'Proyek', page: 'projects' },
        { name: 'Cara Kerja', page: 'how-it-works' },
        { name: 'Berita', page: 'news' },
    ];
    return (
        <header className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <a href="#" onClick={() => setCurrentPage('home')} className="navbar-brand">
                       <img src={logoBax} height={80} />
                    </a>
                    <nav className="navbar-links">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href="#"
                                onClick={(e) => { e.preventDefault(); setCurrentPage(link.page); }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <button onClick={() => setIsOpen(!isOpen)} type="button" className="mobile-menu-button">
                        {isOpen ? <X color="#0f172a" /> : <Menu color="#0f172a" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="mobile-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setCurrentPage(link.page);
                                setIsOpen(false);
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}