import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import News from './screens/News';
import Projects from './screens/Projects';
import ProjectDetail from './screens/ProjectDetail'; // <-- Impor komponen baru
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            {/* FIX: Tambahkan route baru untuk detail proyek. :projectId adalah parameter dinamis. */}
            <Route path="/listproject/:projectId" element={<ProjectDetail />} />
            <Route path="/listproject" element={<Projects />} />
            <Route path="/news" element={<News />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}