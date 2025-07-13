import React from 'react';
import { Share2, UserPlus, Award, Briefcase as BriefcaseIcon } from 'lucide-react';

export default function HowItWorks() {
    return (
        <div>
             <div className="page-header">
                <div className="container section-title">
                    <h2>Bagaimana BaxLancer Bekerja?</h2>
                    <p>Sistem kami dirancang untuk memberikan keuntungan maksimal bagi Anda dan jaringan Anda. Ikuti 3 langkah mudah ini.</p>
                </div>
            </div>
            <div className="container" style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
                <div className="features-grid">
                    <div className="feature-card">
                         <div className="feature-icon-wrapper">
                            <UserPlus color="white" size={30} />
                        </div>
                        <h3>1. Daftar & Ajak Teman</h3>
                        <p>Gunakan kode referral Anda untuk mengundang teman bergabung dan membangun jaringan.</p>
                    </div>
                     <div className="feature-card">
                         <div className="feature-icon-wrapper">
                            <BriefcaseIcon color="white" size={30} />
                        </div>
                        <h3>2. Kerjakan Proyek</h3>
                        <p>Pilih dan selesaikan proyek yang tersedia di aplikasi untuk mendapatkan 100% hasil.</p>
                    </div>
                     <div className="feature-card">
                         <div className="feature-icon-wrapper">
                            <Share2 color="white" size={30} />
                        </div>
                        <h3>3. Nikmati Komisi</h3>
                        <p>Dapatkan komisi secara otomatis ketika anggota jaringan Anda menyelesaikan proyek.</p>
                    </div>
                </div>

                <div className="commission-section">
                     <div className="section-title">
                        <h2>Struktur Komisi Transparan</h2>
                        <p>Anda mendapatkan keuntungan dari 3 level di bawah Anda. Mari kita lihat contohnya.</p>
                    </div>
                    <div className="commission-box">
                        <p className="assumption">Asumsi: <strong>E</strong> mengerjakan proyek senilai <strong>Rp 25.000</strong>. E direkrut oleh D, D oleh C, C oleh B, dan B oleh A.</p>
                        <div className="commission-levels">
                            <div className="commission-line"></div>
                            <div className="level">
                                <div className="level-icon level-e">E</div>
                                <div className="level-info">
                                    <p className="level-title">Anda (Pekerja)</p>
                                    <p className="level-desc">Mendapatkan <strong>100%</strong> dari nilai proyek.</p>
                                </div>
                                <div className="level-amount" style={{color: '#16a34a'}}>Rp 25.000</div>
                            </div>
                            <div className="level">
                                <div className="level-icon level-d">D</div>
                                <div className="level-info">
                                    <p className="level-title">Upline 1</p>
                                    <p className="level-desc">Mendapatkan <strong>10%</strong> dari nilai proyek.</p>
                                </div>
                                <div className="level-amount" style={{color: '#0ea5e9'}}>Rp 2.500</div>
                            </div>
                            <div className="level">
                                <div className="level-icon level-c">C</div>
                                <div className="level-info">
                                    <p className="level-title">Upline 2</p>
                                    <p className="level-desc">Mendapatkan <strong>1%</strong> dari nilai proyek.</p>
                                </div>
                                <div className="level-amount" style={{color: '#0fb1b4'}}>Rp 250</div>
                            </div>
                            <div className="level">
                                <div className="level-icon level-b">B</div>
                                <div className="level-info">
                                    <p className="level-title">Upline 3</p>
                                    <p className="level-desc">Mendapatkan <strong>0.1%</strong> dari nilai proyek.</p>
                                </div>
                                <div className="level-amount" style={{color: '#14b8a6'}}>Rp 25</div>
                            </div>
                            <div className="level">
                                <div className="level-icon level-a">A</div>
                                <div className="level-info">
                                    <p className="level-title">Upline 4</p>
                                    <p className="level-desc">Komisi berhenti di level 3. Tidak mendapatkan komisi.</p>
                                </div>
                                <div className="level-amount" style={{color: '#94a3b8'}}>Rp 0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}