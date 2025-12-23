import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './components/Services';
import GalleryPage from './components/Gallery';
import Contact from './components/ContactForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopBtn />
      </div>
    </Router>
  );
}

export default App;