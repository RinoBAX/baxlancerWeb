import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './screens/Home';
import Projects from './screens/Projects';
import HowItWorks from './screens/HowItWorks';
import News from './screens/News';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.section-title, .feature-card, .item-card, .commission-box, .hero-title, .hero-subtitle, .hero-actions-wrapper');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, [currentPage]);


  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'projects':
        return <Projects />;
      case 'how-it-works':
        return <HowItWorks />;
      case 'news':
        return <News />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app-container">
      <Navbar setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}