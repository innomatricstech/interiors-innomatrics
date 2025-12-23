// src/components/Services.jsx
import React from "react";
import {
  Building2,
  Palette,
  Layout,
  Lightbulb,
  Shield,
  ShowerHead,
  ExternalLink,
  GlassWater,
  Ruler,
  Sparkles,
  Sun,
  Home,
} from "lucide-react";
import Card from "./Card";

const Services = () => {
  const services = [
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "Commercial Projects",
      description:
        "Expert guidance for commercial glass projects from conception through installation. We have worked on commercial projects both large and small.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "Designer Glass",
      description:
        "Enticing range of Designer Glass Panels used in homes and offices for decorative purposes. Available in numerous designs, shapes and sizes.",
      image:
        "https://images.unsplash.com/photo-1604014238687-e6cbb6a5e50f?w=800&auto=format&fit=crop",
    },
    {
      icon: <Layout className="h-10 w-10" />,
      title: "Office Partition",
      description:
        "The glass in your workspace is more than function, it's a feature. Perfect products that look and perform the way you want within your budget.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Innovative Glass",
      description:
        "Unique and innovative glass design for each and every project. Customized solutions to give your project a great new look.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Lacquered Glass",
      description:
        "High quality lacquered glass with highly durable and resistant coating. Wonderful opaque and colorful decorative applications.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    },
    {
      icon: <ShowerHead className="h-10 w-10" />,
      title: "Shower Partition",
      description:
        "Best shower partitions for your bathroom. Helps retain your bathroom's value and creates a less corrosive atmosphere.",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop",
    },
    {
      icon: <ExternalLink className="h-10 w-10" />,
      title: "Glass Glazing for Exterior",
      description:
        "Spider glazing creates designs with vast expanse of glass, frameless entrances and canopies with uninterrupted views.",
      image:
        "https://images.unsplash.com/photo-1487956382158-bb926046304a?w=800&auto=format&fit=crop",
    },
    {
      icon: <GlassWater className="h-10 w-10" />,
      title: "Glass Railing",
      description:
        "Wide range of patch fitting services using advanced technology. Producing spectacular results with uniform quality.",
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&auto=format&fit=crop",
    },
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: "Designer Mirror",
      description:
        "Beautifully designed lacquered glass with beautiful designs. An innovative way to add color and glamour to your space.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop",
    },
    {
      icon: <Sun className="h-10 w-10" />,
      title: "LED Mirror",
      description:
        "Expert guidance for commercial mirror projects from conception through installation with LED lighting solutions.",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop",
    },
    {
      icon: <Ruler className="h-10 w-10" />,
      title: "Custom Measurements",
      description:
        "Precision measurements for perfect fit. We ensure every installation matches your exact specifications.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
    },
    {
      icon: <Home className="h-10 w-10" />,
      title: "Residential Projects",
      description:
        "Complete glass solutions for residential spaces including windows, doors, partitions, and decorative elements.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium Glass Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a complete range of glass solutions for residential and
            commercial projects, ensuring quality, durability, and aesthetic
            appeal in every installation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Need Custom Glass Solutions?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Every project is unique. We specialize in customized glass
              solutions tailored to your specific requirements.
            </p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
              Get Your Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
