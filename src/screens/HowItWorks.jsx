import React from 'react';
import { Share2, UserPlus, Award, Briefcase as BriefcaseIcon } from 'lucide-react';

// 1. Definisikan data untuk langkah-langkah dalam sebuah array.
// Ini membuat penambahan atau pengubahan langkah menjadi sangat mudah.
const stepsData = [
    {
        icon: <UserPlus color="white" size={30} />,
        title: "1. Daftar & Ajak Teman",
        description: "Gunakan kode referral Anda untuk mengundang teman bergabung dan membangun jaringan."
    },
    {
        icon: <BriefcaseIcon color="white" size={30} />,
        title: "2. Kerjakan project",
        description: "Pilih dan selesaikan project yang tersedia di aplikasi untuk mendapatkan 100% hasil."
    },
    {
        icon: <Share2 color="white" size={30} />,
        title: "3. Nikmati Komisi",
        description: "Dapatkan komisi secara otomatis ketika anggota jaringan Anda menyelesaikan project."
    }
];

// 2. Definisikan data untuk level komisi dalam sebuah array.
const commissionData = [
    { level: 'E', title: 'Anda (Pekerja)', desc: 'Mendapatkan <strong>100%</strong> dari nilai project.', amount: 'Rp 25.000', colorClass: 'text-green-500' },
    { level: 'D', title: 'Upline 1', desc: 'Mendapatkan <strong>10%</strong> dari nilai project.', amount: 'Rp 2.500', colorClass: 'text-sky-500' },
    { level: 'C', title: 'Upline 2', desc: 'Mendapatkan <strong>1%</strong> dari nilai project.', amount: 'Rp 250', colorClass: 'text-cyan-500' },
    { level: 'B', title: 'Upline 3', desc: 'Mendapatkan <strong>0.1%</strong> dari nilai project.', amount: 'Rp 25', colorClass: 'text-teal-500' },
    { level: 'A', title: 'Upline 4', desc: 'Komisi berhenti di level 3. Tidak mendapatkan komisi.', amount: 'Rp 0', colorClass: 'text-slate-400' }
];


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
                
                {/* 3. Gunakan .map() untuk merender langkah-langkah secara dinamis */}
                <div className="features-grid">
                    {stepsData.map((step, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon-wrapper">
                                {step.icon}
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="commission-section">
                    <div className="section-title">
                        <h2>Struktur Komisi Transparan</h2>
                        <p>Anda mendapatkan keuntungan dari 3 level di bawah Anda. Mari kita lihat contohnya.</p>
                    </div>
                    <div className="commission-box">
                        <p className="assumption">Asumsi: <strong>E</strong> mengerjakan project senilai <strong>Rp 25.000</strong>. E direkrut oleh D, D oleh C, C oleh B, dan B oleh A.</p>
                        
                        {/* 4. Gunakan .map() untuk merender level komisi secara dinamis */}
                        <div className="commission-levels">
                            <div className="commission-line"></div>
                            {commissionData.map((item) => (
                                <div key={item.level} className="level">
                                    <div className={`level-icon level-${item.level.toLowerCase()}`}>{item.level}</div>
                                    <div className="level-info">
                                        <p className="level-title">{item.title}</p>
                                        {/* Gunakan dangerouslySetInnerHTML untuk merender tag <strong> */}
                                        <p className="level-desc" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                                    </div>
                                    {/* Ganti inline style dengan class dari data */}
                                    <div className={`level-amount ${item.colorClass}`}>{item.amount}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
