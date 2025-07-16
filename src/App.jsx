
import React, { useState, useEffect } from 'react';

// Impor semua halaman/komponen Anda
import Home from './pages/Home';
import News from './pages/News';
import Projects from './pages/Projects';
import { useApi } from './hooks/useApi'; // Asumsi useApi ada di sini

// Komponen Navigasi (opsional, tapi bagus untuk struktur)
const Navbar = ({ navigate }) => (
    <nav className="navbar"> {/* Tambahkan styling untuk navbar Anda di CSS */}
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
        <a href="/listproject" onClick={(e) => { e.preventDefault(); navigate('/listproject'); }}>Projects</a>
        <a href="/news" onClick={(e) => { e.preventDefault(); navigate('/news'); }}>News</a>
    </nav>
);


export default function App() {
    // State untuk melacak path URL saat ini, diinisialisasi dari URL browser.
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // Fungsi untuk navigasi. Mengubah URL tanpa me-reload halaman.
    const navigate = (path) => {
        window.history.pushState({}, '', path);
        setCurrentPath(path);
    };

    // useEffect untuk menangani tombol back/forward di browser.
    useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    // Hook API yang akan di-pass ke komponen anak jika diperlukan
    const { execute: request, loading, error } = useApi('YOUR_AUTH_TOKEN_IF_NEEDED');

    // Fungsi untuk merender halaman berdasarkan path URL saat ini.
    const renderPage = () => {
        switch (currentPath) {
            case '/listproject':
                // Sekarang URL /listproject akan merender komponen Projects
                return <Projects request={request} />;
            case '/news':
                return <News />; // Asumsi komponen News ada
            case '/':
            default:
                // Pass fungsi `navigate` ke Home agar bisa mengubah URL
                return <Home navigate={navigate} />;
        }
    };

    return (
        <div>
            {/* Anda bisa menempatkan komponen yang selalu ada seperti Navbar di sini */}
            <Navbar navigate={navigate} />
            <main>
                {/* Merender halaman yang sesuai dengan URL */}
                {renderPage()}
            </main>
        </div>
    );
}
