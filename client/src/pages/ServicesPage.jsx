import React from "react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      title: "Hospital Consumables",
      description:
        "High-quality hospital consumables including gloves, masks, syringes, and daily-use medical essentials",
      icon: "🏥",
    },
    {
      title: "Laboratory Equipment",
      description:
        "Reliable lab equipment and tools for research labs, diagnostics, and scientific institutions",
      icon: "🔬",
    },
    {
      title: "Scientific Study Materials",
      description:
        "Educational science kits and study materials for schools, colleges, and training institutes",
      icon: "📚",
    },
    {
      title: "Medical Instruments",
      description:
        "Precision medical instruments designed for clinical accuracy and long-term durability",
      icon: "🩺",
    },
    {
      title: "Research & Testing Supplies",
      description:
        "Complete range of testing and research supplies for laboratories and healthcare professionals",
      icon: "🧪",
    },
    {
      title: "Safety & Hygiene Products",
      description:
        "Certified safety and hygiene products to maintain sterile and safe medical environments",
      icon: "🧼",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            Products
          </span>
        </h2>

        <p className="text-center text-gray-300 mb-12">
          Trusted medical, hospital, and scientific supplies for professionals
          and institutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-slate-700 rounded-lg p-6 border border-slate-600 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-orange-400 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Looking for Reliable Medical Supplies?
          </h3>
          <p className="text-gray-100 mb-6">
            Connect with Sunlix for quality hospital and scientific products you
            can trust
          </p>
          <button className="bg-slate-900 hover:bg-slate-800 text-orange-400 font-bold py-3 px-8 rounded-lg transition">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
