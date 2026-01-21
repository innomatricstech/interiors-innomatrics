import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopBtn from './components/ScrollToTopBtn';
import Home from './pages/Home';
import About from './pages/About';
 
import ServicesList from './components/ServicesLayout.jsx';
// All services listing page
import BalconyRailing from './components/BalconyRailing.jsx';
import LacqueredGlass from './components/LacqueredGlass.jsx';
import PVCUPVCDoors from './components/PVCUPVCDoors.jsx';
import UPVCWindowsPrice from './components/UPVCWindowsPrice.jsx';
import GlassShopNearMe from './components/GlassShopNearMe.jsx';
import ShowerDoorsInstallation from './components/ShowerDoorsInstallation.jsx';
import ShowerEnclosures from './components/ShowerEnclosures.jsx';
import ToughenedGlass from './components/ToughenedGlass.jsx';
import GlassInstallation from './components/GlassInstallation.jsx';
import ShowerDoors from './components/ShowerDoors.jsx';
 
import GlassPartitionWithDoor from './components/GlassPartitionWithDoor.jsx';
import GlassPartitionCompany from './components/GlassPartitionCompany.jsx';
import LEDSmartMirrors from './components/LEDSmartMirrors';
import SpiderGlassFacade from './components/SpiderGlassFacade';
import GalleryPage from './components/Gallery.jsx';
import Contact from './components/ContactForm';
import FloatingSupport from "./components/FloatingSupport";
import OurWorks from './pages/OurWorks';
import ServiceDetails from './pages/ServicesDetails.jsx';
import ServicesPage from './components/Services.jsx';

// ADDING THE MISSING SERVICES FROM SCREENSHOT

import GlassPartitionPriceCost from './components/GlassPartitionPriceCost.jsx';
import WallGlassPartition from './components/WallGlassPartition.jsx';
import CallFloatingIcon from "./components/CallFloatingIcon";
import ContactPopup from "./components/ContactPopup";
import ActorGallery from "./components/ActorGallery";

function App() {
  return (
    <Router>
      <FloatingSupport />
     
      <ScrollToTopBtn />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Services Routes */}
            <Route path="/services" element={<ServicesList />} />
            <Route path="/services/:id" element={<ServicesPage />} />
            <Route path="/services-details" element={<ServiceDetails/>}/>
            
            {/* ALL SERVICE PAGES FROM YOUR SCREENSHOT */}
            
            {/* First row from screenshot */}
            <Route path="/services/balcony-railing" element={<BalconyRailing />} />
            <Route path="/services/lacquered-glass" element={<LacqueredGlass />} />
            <Route path="/services/pvc-upvc-doors" element={<PVCUPVCDoors />} />
            <Route path="/services/upvc-windows-price" element={<UPVCWindowsPrice />} />
            <Route path="/services/glass-shop-near-me" element={<GlassShopNearMe />} />
            <Route path="/services/shower-doors-installation" element={<ShowerDoorsInstallation />} />
            <Route path="/services/shower-enclosures" element={<ShowerEnclosures />} />
            <Route path="/services/toughened-glass" element={<ToughenedGlass />} />
            <Route path="/services/glass-installation" element={<GlassInstallation />} />
            <Route path="/services/shower-doors" element={<ShowerDoors />} />
            
            {/* Second row from screenshot */}
           
            <Route path="/services/glass-partition-with-door" element={<GlassPartitionWithDoor />} />
            <Route path="/services/glass-partition-company" element={<GlassPartitionCompany />} />
            <Route path="/services/glass-partition-price-cost" element={<GlassPartitionPriceCost />} />
            <Route path="/services/wall-glass-partition" element={<WallGlassPartition />} />
            <Route path="/services/led-smart-mirrors" element={<LEDSmartMirrors />} />
            <Route path="/services/spider-glass-facade" element={<SpiderGlassFacade />} />
            <Route path="/actors-gallery" element={<ActorGallery />} />
            
            {/* Added missing UPVC Windows (UPVC WINDOWS PRICE in screenshot) */}
            
            
            {/* Other pages */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/our-works" element={<OurWorks />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;