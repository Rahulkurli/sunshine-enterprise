import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-red-600 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-3">
            sunlix
          </h3>
          <p className="text-sm">
            Leading innovation in science and technology solutions.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Products</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-400 transition">
                AI Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition">
                Cloud Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition">
                Analytics
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-orange-400 transition">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 transition">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-700 pt-8">
        <p className="text-center text-sm">
          © 2024 sunlix. All rights reserved. |
          <a href="#" className="hover:text-orange-400 transition mx-2">
            Privacy
          </a>{" "}
          |
          <a href="#" className="hover:text-orange-400 transition mx-2">
            Terms
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
