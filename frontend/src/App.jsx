import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import Skills from './pages/Skills';
import Contact from './pages/ContactPage';
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
          <Route path='/experience' element={<Experience/>}/>
          <Route path='*' element={<a href='www.google.com'/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;