import React, { useState, useEffect } from 'react';

// FIX: Path impor diubah dari './pages/' menjadi './screens/' agar sesuai dengan struktur folder Anda.
import Home from './screens/Home';
import News from './screens/News';
import Projects from './screens/Projects';
import Navbar from './components/Navbar'; 

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
