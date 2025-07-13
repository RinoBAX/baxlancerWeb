import React from 'react';
import { Twitter, Instagram, Linkedin, Zap } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                           <Zap size={32} className="text-sky-500" />
                           <span style={{color: 'white', fontSize: '1.5rem', fontWeight: '700'}}>BaxLancer</span>
                        </div>
                        <p>Membuka pintu kesempatan bagi semua orang untuk berpenghasilan, tanpa batas.</p>
                    </div>
                    <div className="footer-links-grid">
                        <div>
                            <h2>Jelajahi</h2>
                            <ul>
                                <li><a href="#">Proyek</a></li>
                                <li><a href="#">Cara Kerja</a></li>
                                <li><a href="#">Berita</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2>Perusahaan</h2>
                            <ul>
                                <li><a href="#">Tentang Kami</a></li>
                                <li><a href="#">Kontak</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2>Legal</h2>
                            <ul>
                                <li><a href="#">Kebijakan Privasi</a></li>
                                <li><a href="#">Syarat & Ketentuan</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="footer-divider" />
                <div className="footer-bottom">
                    <span className="footer-copyright">© 2025 Bax Digital Indonesia. All Rights Reserved.</span>
                    <div className="footer-socials">
                        <a href="#"><Twitter size={20}/></a>
                        <a href="#"><Instagram size={20}/></a>
                        <a href="#"><Linkedin size={20}/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}