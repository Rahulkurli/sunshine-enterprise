import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          About <span className="text-orange-500">sunlix</span>
        </h2>

        <div className="bg-slate-700 rounded-lg p-8 mb-8 border-l-4 border-red-600">
          <h3 className="text-2xl font-bold text-orange-400 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-200 text-lg">
            At sunlix, we pioneer breakthrough technologies that transform
            industries and empower innovations. We believe in the power of
            science and technology to create meaningful change and sustainable
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-700 rounded-lg p-6 border-t-2 border-orange-500">
            <h3 className="text-xl font-bold text-orange-400 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-300">
              To be a global leader in next-generation technology solutions that
              push the boundaries of human potential.
            </p>
          </div>
          <div className="bg-slate-700 rounded-lg p-6 border-t-2 border-red-600">
            <h3 className="text-xl font-bold text-orange-400 mb-3">
              Our Values
            </h3>
            <p className="text-gray-300">
              Innovation, integrity, and impact drive everything we do. We're
              committed to excellence and sustainability.
            </p>
          </div>
        </div>

        <div className="bg-slate-700 rounded-lg p-8 border-l-4 border-orange-500">
          <h3 className="text-2xl font-bold text-orange-400 mb-4">
            Why Choose sunlix?
          </h3>
          <ul className="text-gray-300 space-y-3">
            <li className="flex items-center">
              <span className="text-red-500 mr-3">✓</span>Award-winning research
              team
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-3">✓</span>State-of-the-art
              facilities
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-3">✓</span>Global industry
              partnerships
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-3">✓</span>Commitment to
              sustainability
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
