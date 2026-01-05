// src/utils/images.js

// Import all your gallery images
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

export const images = {
  // For Services.jsx
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
  
  // For Gallery.jsx (all gallery images)
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
};

// For Gallery component
export const galleryItems = [
  { id: 1, category: 'Residential', image: gallery1, title: 'Modern Bathroom' },
  { id: 2, category: 'Technology', image: gallery2, title: 'LED Glass' },
  { id: 3, category: 'Commercial', image: gallery3, title: 'Glazing Works' },
  { id: 4, category: 'Bathroom', image: gallery4, title: 'Frame Shower' },
  { id: 5, category: 'Decorative', image: gallery5, title: 'Lacquered Glass' },
  { id: 6, category: 'Architectural', image: gallery6, title: 'Spider Fittings' },
  { id: 7, category: 'Commercial', image: gallery7, title: 'Hotel Interior' },
  { id: 8, category: 'Residential', image: gallery8, title: 'Dining Area' },
  { id: 9, category: 'Bathroom', image: gallery9, title: 'Bathroom Design' },
  { id: 10, category: 'Technology', image: gallery10, title: 'Service Frame' },
  { id: 11, category: 'Technology', image: gallery11, title: 'Plumbing Setup' },
  { id: 12, category: 'Bathroom', image: gallery12, title: '90° Shower' },
];