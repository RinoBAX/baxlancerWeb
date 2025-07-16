import React, { useState, useEffect } from 'react';

// FIX: Impor komponen dari file mereka masing-masing.
import Home from './pages/Home';
import News from './pages/News';
import Projects from './pages/Projects';
// Anda tidak perlu mengimpor useApi di sini jika setiap halaman mengelolanya sendiri.

// Komponen Navigasi (tetap di sini atau pindahkan ke file sendiri)
const Navbar = ({ navigate }) => (
    <nav className="navbar"> {/* Tambahkan styling untuk navbar Anda di CSS */}
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
        <a href="/listproject" onClick={(e) => { e.preventDefault(); navigate('/listproject'); }}>Projects</a>
        <a href="/news" onClick={(e) => { e.preventDefault(); navigate('/news'); }}>News</a>
    </nav>
);

export default function App() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const navigate = (path) => {
        window.history.pushState({}, '', path);
        setCurrentPath(path);
    };

    useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const renderPage = () => {
        switch (currentPath) {
            case '/listproject':
                return <Projects />;
            case '/news':
                return <News />;
            case '/':
            default:
                return <Home navigate={navigate} />;
        }
    };

    return (
        <div>
            <Navbar navigate={navigate} />
            <main>
                {renderPage()}
            </main>
        </div>
    );
}