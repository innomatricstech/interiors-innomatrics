import React, { useState } from "react";
import { X, Phone } from "lucide-react";
import { images } from "../utils/images";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { image: images.shower90, title: "SHOWER" },
    { image: images.upvcWindows, title: "WINDOWS" },
    { image: images.glassRailings, title: "RAILINGS" },
    { image: images.lacqueredGlass, title: "LACQUERED" },
    { image: images.ledMirrors, title: "MIRRORS" },
    { image: images.framelessShower, title: "FRAMELESS" },
    { image: images.toughenedGlass, title: "TOUGHENED" },
    { image: images.glassMirrors, title: "GLASS" },
    { image: images.spiderFittings, title: "SPIDER" },
  ];

  return (
    <>
      <style jsx>{`
        /* 🏴‍☠️ Dark Blue Background */
        .dark-blue-bg {
          background: linear-gradient(135deg, 
            rgba(12, 25, 74, 1) 0%,     /* very dark blue */
            rgba(15, 30, 90, 1) 50%,    /* dark blue */
            rgba(20, 40, 110, 1) 100%   /* medium dark blue */
          );
        }

        /* ⬜ Product Card - White */
        .white-product-card {
          background: white;
          border: 1px solid #dbeafe; /* blue-100 */
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          will-change: transform;
        }

        /* ✨ Hover Effect */
        .white-product-card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          border-color: #93c5fd; /* blue-300 */
        }

        /* 🏢 Hero Overlay */
        .hero-overlay {
          background: linear-gradient(135deg, 
            rgba(12, 25, 74, 0.85) 0%,    /* dark blue overlay */
            rgba(12, 25, 74, 0.6) 50%,
            rgba(12, 25, 74, 0.4) 100%
          );
        }

        /* 📞 CTA Container */
        .cta-container {
          background: white;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        /* 🔘 Call Button */
        .call-button {
          background: white;
          color: #1e40af; /* blue-800 */
          border: 2px solid #3b82f6; /* blue-500 */
          transition: all 0.25s ease;
        }

        .call-button:hover {
          background: #f8fafc; /* blue-50 */
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        /* 🧊 Modal Background */
        .modal-background {
          background: rgba(12, 25, 74, 0.95); /* dark blue modal */
        }

        /* ❌ Close Button */
        .close-button {
          background: white;
          border: 2px solid #3b82f6;
          transition: all 0.25s ease;
        }

        .close-button:hover {
          background: #f8fafc;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }

        /* 📱 Footer */
        .footer-text {
          color: white;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <div className="dark-blue-bg min-h-screen">
        {/* Hero Banner - Full Width */}
        <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
          <img 
            src={images.heroBanner} 
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-9xl font-bold text-white mb-4">PRODUCTS</h1>
              <p className="text-3xl text-white/90">PREMIUM GLASS COLLECTION</p>
            </div>
          </div>
        </div>

        {/* Products Grid - White Cards */}
        <div className="py-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1800px] mx-auto">
            {products.map((product, index) => (
              <div 
                key={index}
                className="white-product-card rounded-2xl overflow-hidden cursor-pointer aspect-square relative group"
                onClick={() => setSelectedProduct(product)}
              >
                <img 
                  src={product.image} 
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="absolute bottom-8 left-8">
                    <p className="text-4xl text-white font-medium">{product.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - White Container */}
        <div className="py-20 px-4">
          <div className="max-w-[1200px] mx-auto">
            <div className="cta-container h-[400px]">
              <img 
                src={images.glassRailings || images.heroBanner} 
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button 
                  onClick={() => window.location.href = "tel:+919141621820"}
                  className="call-button px-16 py-5 rounded-full text-2xl font-semibold flex items-center gap-4"
                >
                  <Phone className="w-8 h-8" />
                  CALL FOR INQUIRY
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-12 px-4 text-center footer-text">
          <p className="text-2xl font-medium">BANGALORE • +91 91416 21820 • +91 94810 16006</p>
        </div>
      </div>

      {/* Modal - Full Screen Product View */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="absolute inset-0 modal-background"></div>
          <div className="relative z-10 w-full h-full">
            <img 
              src={selectedProduct.image} 
              alt=""
              className="w-full h-full object-contain"
            />
            <button 
              onClick={() => setSelectedProduct(null)}
              className="close-button absolute top-8 right-8 p-4 rounded-full"
            >
              <X className="w-8 h-8 text-blue-700" />
            </button>
            <div className="absolute top-8 left-8">
              <p className="text-5xl text-white font-medium">{selectedProduct.title}</p>
            </div>
            <div className="absolute bottom-16 left-0 right-0 text-center">
              <button 
                onClick={() => window.location.href = "tel:+919141621820"}
                className="call-button px-16 py-5 rounded-full text-2xl font-semibold"
              >
                <Phone className="w-8 h-8 inline mr-3" />
                CALL FOR INQUIRY: +91 91416 21820
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;