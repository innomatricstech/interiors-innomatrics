import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './components/Services';
import ServicesList from '../src/components/ServicesLayout'; // New - All services listing page
import BalconyRailing from './components/BalconyRailing';
import LacqueredGlass from './components/LacquredGlass';
import PVCUPVCDoors from './components/PVCUPVCDoors';
import UPVCWindowsPrice from './components/UPVCWindowsPrice';
import GlassShopNearMe from './components/Glassshopnearme.jsx';
import ShowerDoorsInstallation from './components/ShowerDoorsInstallation.jsx';
import ShowerEnclosures from './components/ShowerEnclosures.jsx';
import ToughenedGlass from './components/ToughenedGlass.jsx';
import InteriorDesignHouseGlass from './components/InteriorDesignHouseGlass.jsx';
import GlassInstallation from './components/GlassInstallation.jsx';
import ShowerDoors from './components/ShowerDoors.jsx';
import AluminiumGlassPartition from './components/AluminiumGlassPartition.jsx';
import GlassPartitionWithDoor from './components/GlassPartitionWithDoor.jsx';
import GlassPartitionCompany from './components/GlassPartitionCompany.jsx';
 
 
import LEDSmartMirrors from './components/LEDSmartMirrors';
import SpiderGlassFacade from './components/SpiderGlassFacade';
import GalleryPage from './components/Gallery';
import Contact from './components/ContactForm';
import FloatingSupport from "./components/FloatingSupport";
import OurWorks from './pages/OurWorks';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Services Routes */}
            <Route path="/services" element={<ServicesList />} /> {/* All services list */}
            <Route path="/services/:id" element={<ServicesPage />} /> {/* Old service modal view */}
            
            {/* Individual Service Pages */}
            <Route path="/services/balcony-railing" element={<BalconyRailing />} />
            <Route path="/services/lacquered-glass" element={<LacqueredGlass />} />
            <Route path="/services/pvc-upvc-doors" element={<PVCUPVCDoors />} />
            <Route path="/services/upvc-windows-price" element={<UPVCWindowsPrice />} />
            <Route path="/services/glass-shop-near-me" element={<GlassShopNearMe />} />
            <Route path="/services/shower-doors-installation" element={<ShowerDoorsInstallation />} />
            <Route path="/services/shower-enclosures" element={<ShowerEnclosures />} />
            <Route path="/services/toughened-glass" element={<ToughenedGlass />} />
            <Route path="/services/interior-design-house-glass" element={<InteriorDesignHouseGlass />} />
            <Route path="/services/glass-installation" element={<GlassInstallation />} />
            <Route path="/services/shower-doors" element={<ShowerDoors />} />
            <Route path="/services/aluminium-glass-partition" element={<AluminiumGlassPartition />} />
            <Route path="/services/glass-partition-with-door" element={<GlassPartitionWithDoor />} />
            <Route path="/services/glass-partition-company" element={<GlassPartitionCompany />} />
                      
            <Route path="/services/led-smart-mirrors" element={<LEDSmartMirrors />} />
            <Route path="/services/spider-glass-facade" element={<SpiderGlassFacade />} />
            
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/our-works" element={<OurWorks />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <FloatingSupport />
        <Footer />
        <ScrollToTopBtn />
      </div>
    </Router>
  );
}

export default App;