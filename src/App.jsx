import React, { useState, useEffect } from 'react';

import Home from './pages/Home';
import News from './pages/News';
import Projects from './pages/Projects';
const Navbar = ({ navigate }) => (
    <nav className="navbar">
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