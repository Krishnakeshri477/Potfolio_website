// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter import
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import Skills from './pages/Skills';
import Contact from './pages/ContactPage';
import Blog from './pages/otherPage/Blog';
import PrivacyPolicy from './pages/otherPage/PrivacyPolicy';
import Sitemap from './pages/otherPage/Sitemap';
import Experience from './pages/Experience';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/privacy' element={<PrivacyPolicy/>}/>
          <Route path='/sitemap' element={<Sitemap/>}/>
          <Route path='/experience' element={<Experience/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;