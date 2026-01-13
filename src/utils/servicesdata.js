import images from "../utils/images";

export const servicesData = [
  // 1️⃣ BALCONY GLASS (images.js la balconyGlass array)
  {
    id: 1,
    title: "Balcony Glass",
    category: "Architectural",
    images: images.balconyGlass, // [balcony1, balcony2, balcony3, balcony4, balcony5, balcony6]
  },

  // 2️⃣ SS RAILING GLASS (images.js la ssRailingGlass array)
  {
    id: 2,
    title: "SS Railing Glass",
    category: "Architectural",
    images: images.ssRailingGlass, // [ss1, ss2, ss3, ss4, ss5]
  },

  // 3️⃣ LACQUERED GLASS (images.js la lacquredGlass array)
  {
    id: 3,
    title: "Lacquered Glass Works",
    category: "Decorative",
    images: [
      ...images.lacquredGlass, // [lacqured2, lacqured3, lacqured4, lacqured5]
      images.videos.lacquredGlassVideo, // videolacqured
    ],
  },

  // 4️⃣ LED SMART MIRROR (images.js la ledSmartMirror array)
  {
    id: 4,
    title: "LED Smart Mirrors",
    category: "Technology",
    images: images.ledSmartMirror, // [led1, led2, led3, led4, led5, led6, led7, led8, led9, led10, led11]
  },

  // 5️⃣ SHOWER DOORS (images.js la showerDoors array)
  {
    id: 5,
    title: "Shower Doors",
    category: "Bathroom",
    images: images.showerDoors, // [shower1, shower2, shower3, shower4, shower5, shower6, shower7, shower8, shower9, shower10, showerbox]
  },

  // 6️⃣ SHOWER ENCLOSURES (images.js la showerEnclosures array)
  {
    id: 6,
    title: "Shower Enclosures",
    category: "Bathroom",
    images: images.showerEnclosures, // [glassShowerEnclosures1, glassShowerEnclosures2, glassShowerEnclosures3, glassShowerEnclosures4, glassShowerEnclosures5, glassShowerEnclosures6]
  },

  // 7️⃣ SHOWER INSTALLATION (images.js la showerInstallation array)
  {
    id: 7,
    title: "Shower Installation",
    category: "Bathroom",
    images: images.showerInstallation, // [Glassshowerdoorinstallation1, Glassshowerdoorinstallation2, Glassshowerdoorinstallation3, Glassshowerdoorinstallation4]
  },

  // 8️⃣ TOUGHENED GLASS (images.js la toughenedGlass array)
  {
    id: 8,
    title: "Toughened Glass",
    category: "General",
    images: images.toughenedGlass, // [toughened1, toughened2, toughened3, toughened4, toughened5]
  },

  // 9️⃣ SPIDER GLASS (images.js la spiderGlass array)
  {
    id: 9,
    title: "Spider Glass",
    category: "Commercial",
    images: images.spiderGlass, // [spider1, spider2, spider3, spider4]
  },

  // 🔟 ALUMINIUM GLASS PARTITION (images.js la aluminiumGlassPartition array)
  {
    id: 10,
    title: "Aluminium Glass Partition",
    category: "Partitions",
    images: images.aluminiumGlassPartition, // [aluminiumglass1, aluminiumglass2, aluminiumglass3, aluminiumglass4, aluminiumglass5]
  },

  // 1️⃣1️⃣ GLASS PARTITION WITH DOOR (images.js la glassPartitionWithDoor array)
  {
    id: 11,
    title: "Glass Partition with Door",
    category: "Partitions",
    images: images.glassPartitionWithDoor, // [Glasspartitionwithdoor1, Glasspartitionwithdoor2, Glasspartitionwithdoor3, Glasspartitionwithdoor4, Glasspartitionwithdoor5]
  },

  // 1️⃣2️⃣ GLASS PARTITION COMPANY (images.js la glassPartitionCompany array)
  {
    id: 12,
    title: "Glass Partition Company",
    category: "Commercial",
    images: images.glassPartitionCompany, // [Glasspartitioncompany1, Glasspartitioncompany2, Glasspartitioncompany3, Glasspartitioncompany4, Glasspartitioncompany5]
  },

  // 1️⃣3️⃣ GLASS PARTITION PRICE COST (images.js la glassPartitionPriceCost array)
  {
    id: 13,
    title: "Glass Partition Price & Cost",
    category: "Commercial",
    images: images.glassPartitionPriceCost, // [Glasspartitionpricecost1, Glasspartitionpricecost2, Glasspartitionpricecost3, Glasspartitionpricecost4, Glasspartitionpricecost5]
  },

  // 1️⃣4️⃣ WALL GLASS PARTITION (images.js la wallGlassPartition array)
  {
    id: 14,
    title: "Wall Glass Partition",
    category: "Partitions",
    images: images.wallGlassPartition, // [wallglasspartition1, wallglasspartition2, wallglasspartition3, wallglasspartition4, wallglasspartition5]
  },

  // 1️⃣5️⃣ GLASS INSTALLATION (images.js la glassInstallation array)
  {
    id: 15,
    title: "Glass Installation",
    category: "Installation",
    images: images.glassInstallation, // [install1, install2, install3, install4, install5]
  },

  // 1️⃣6️⃣ GLASS SHOP NEAR ME (images.js la glassShopNearMe array)
  {
    id: 16,
    title: "Glass Shop Near Me",
    category: "General",
    images: images.glassShopNearMe, // [Glassshopnearme1, Glassshopnearme2, Glassshopnearme3, Glassshopnearme4, Glassshopnearme5]
  },

  // 1️⃣7️⃣ UPVC DOORS (images.js la upvcDoors array)
  {
    id: 17,
    title: "UPVC Doors",
    category: "Windows",
    images: images.upvcDoors, // [upvcDoors1, upvcDoors2, upvcDoors3, upvcDoors4, upvcDoors5]
  },

  // 1️⃣8️⃣ UPVC WINDOWS (images.js la upvcWindows array)
  {
    id: 18,
    title: "UPVC Windows",
    category: "Windows",
    images: images.upvcWindows, // [upvcwindows1, upvcwindows2, upvcwindows3, upvcwindows4, upvcwindows5]
  },

  // 1️⃣9️⃣ GALLERY IMAGES (images.js la gallery array)
  {
    id: 19,
    title: "Gallery",
    category: "General",
    images: images.gallery, // [gallery1 to gallery12]
  },

  // 2️⃣0️⃣ VIDEOS (images.js la videos object)
  {
    id: 20,
    title: "Videos",
    category: "Multimedia",
    images: [
      images.videos.lacquredGlassVideo, // videolacqured
      images.videos.showerVideo, // showerVideo
    ],
  },
];