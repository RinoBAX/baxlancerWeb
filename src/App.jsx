import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import News from './screens/News';
import NewsDetail from './screens/NewsDetail'; // <-- Impor komponen baru
import Projects from './screens/Projects';
import ProjectDetail from './screens/ProjectDetail';
import HowItWorks from './screens/HowItWorks';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/listproject/:projectId" element={<ProjectDetail />} />
            <Route path="/listproject" element={<Projects />} />
            <Route path="/news/:newsId" element={<NewsDetail />} /> {/* <-- Route baru untuk detail berita */}
            <Route path="/news" element={<News />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}