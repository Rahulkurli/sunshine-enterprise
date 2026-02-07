import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-4">
            Innovation in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Science & Technology
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Harness cutting-edge solutions for tomorrow's challenges
          </p>
          <button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🔬",
              title: "Research",
              desc: "Cutting-edge research and development",
            },
            {
              icon: "⚡",
              title: "Innovation",
              desc: "Next-generation technology solutions",
            },
            {
              icon: "🎯",
              title: "Solutions",
              desc: "Tailored for your business needs",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-slate-700 p-6 rounded-lg border-l-4 border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
