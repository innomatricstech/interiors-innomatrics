// src/utils/images.js

// ===== OLD IMAGES =====
import gallery1 from "../assets/img/modern-bathroom-with-small-space-contemporary-decor.jpg";
import gallery2 from "../assets/img/led galss.jpg";
import gallery3 from "../assets/img/glazing works.jpg";
import gallery4 from "../assets/img/frame shower partition.jpg";
import gallery5 from "../assets/img/lacqured-glass.jpg";
import gallery6 from "../assets/img/spider-fitting glass.jpg";
import gallery7 from "../assets/img/beautiful-hotel-insights-details.jpg";
import gallery8 from "../assets/img/dinner-table-cafe.jpg";
import gallery9 from "../assets/img/bathroom-interior-design-zoom-calls.jpg";
import gallery10 from "../assets/img/service frame.jpg";
import gallery11 from "../assets/img/view-plumber-tool-box-ready-fixing-problems-bathroom.jpg";
import gallery12 from "../assets/img/90showerportion.jpg";

// ===== LACQUERED GLASS FOLDER =====
import lacquredglass1 from "../assets/img/lacquredGlass/lacquredglass1.jpeg";
import lacquredglass2 from "../assets/img/lacquredGlass/lacquredglass2.jpeg";
import lacquredglass3 from "../assets/img/lacquredGlass/lacquredglass3.jpeg";
import lacquredglass4 from "../assets/img/lacquredGlass/lacquredglass4.jpeg";
import lacquredglass5 from "../assets/img/lacquredGlass/lacquredglass5.jpeg";
// Video file for lacqured glass
import videolacqured from "../assets/img/lacquredGlass/videolacqured.mp4"; // or .mov, .avi, etc.

// ===== LED MIRROR/GLASS FOLDER =====
// Based on your table listing
import ledglass1 from "../assets/img/LedMirror/ledglass1.jpeg";
import ledglass2 from "../assets/img/LedMirror/ledglass2.jpeg";
import ledglass3 from "../assets/img/LedMirror/ledglass3.jpeg";
import ledglass4 from "../assets/img/LedMirror/ledglass4.jpeg";
import ledglass5 from "../assets/img/LedMirror/ledglass5.jpeg";
import ledglass6 from "../assets/img/LedMirror/ledglass6.jpeg";
import ledglass7 from "../assets/img/LedMirror/ledglass7.jpeg";
import ledglass8 from "../assets/img/LedMirror/ledglass8.jpeg";
import ledglass9 from "../assets/img/LedMirror/ledglass9.jpeg";
import ledglass10 from "../assets/img/LedMirror/ledglass10.jpeg";
import ledglass11 from "../assets/img/LedMirror/ledglass11.jpeg";

// ===== SHOWER FOLDER =====
import shower1 from "../assets/img/shower/shower1.jpeg";
import shower2 from "../assets/img/shower/shower2.jpeg";
import shower3 from "../assets/img/shower/shower3.jpeg";
// Shower video if exists
import showervideo from "../assets/img/shower/showervideo.mp4";

// ===== BALCONY FOLDER =====
import balcony1 from "../assets/img/raineebalcony/baclcony1.jpeg";
import balcony2 from "../assets/img/raineebalcony/baclcony2.jpeg";
import balcony3 from "../assets/img/raineebalcony/balcony3.jpeg";
import balcony4 from "../assets/img/raineebalcony/balcony4.jpeg";
import balcony5 from "../assets/img/raineebalcony/balcony5.jpeg";
import balcony6 from "../assets/img/raineebalcony/balcony6.jpeg";

// ===== EXPORT ALL IMAGES AND VIDEOS =====
export const images = {
  // OLD gallery images
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
  gallery7, gallery8, gallery9, gallery10, gallery11, gallery12,
  
  // Lacquered Glass images
  lacquredglass1, lacquredglass2, lacquredglass3, lacquredglass4, lacquredglass5,
  
  // LED Glass/Mirror images (from your table)
  ledglass1, ledglass2, ledglass3, ledglass4, ledglass5,
  ledglass6, ledglass7, ledglass8, ledglass9, ledglass10, ledglass11,
  
  // Shower images
  shower1, shower2, shower3,
  
  // Balcony images
  balcony1, balcony2, balcony3, balcony4, balcony5, balcony6,
  
  // Videos
  videolacqured,
  showervideo,
  
  // For Services.jsx (mapping old images to service names)
  heroBanner: gallery1,
  featureBanner: gallery3,
  shower90: gallery12,
  upvcWindows: gallery3,
  glassRailings: gallery10,
  toughenedGlass: gallery5,
  glassMirrors: gallery2,
  lacqueredGlass: gallery5,
  ledMirrors: gallery2,
  framelessShower: gallery4,
  spiderFittings: gallery6,
};

// Optional: Export arrays by category for easier access
export const imageCategories = {
  oldGallery: [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
    gallery7, gallery8, gallery9, gallery10, gallery11, gallery12
  ],
  
  lacqueredGlass: [
    lacquredglass1, lacquredglass2, lacquredglass3, lacquredglass4, lacquredglass5
  ],
  
  ledGlass: [
    ledglass1, ledglass2, ledglass3, ledglass4, ledglass5,
    ledglass6, ledglass7, ledglass8, ledglass9, ledglass10, ledglass11
  ],
  
  shower: [shower1, shower2, shower3],
  balcony: [balcony1, balcony2, balcony3, balcony4, balcony5, balcony6],
  
  videos: [videolacqured, showervideo]
};