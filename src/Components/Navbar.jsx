import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-orange-400 font-semibold border-b-2 border-orange-400"
      : "text-gray-300 hover:text-orange-300 transition";

  const [open, setOpen] = useState(false);
  return (
    <header className="bg-slate-900 text-white border-b border-red-600">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white font-bold">
            S
          </div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
            sunlix
          </h1>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/products" className={linkClass}>
            Products
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="p-2 rounded bg-slate-800 hover:bg-slate-700"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`${open ? "block" : "hidden"} md:hidden bg-slate-800 border-t border-slate-700`}
      >
        <div className="flex flex-col px-4 py-3 gap-3">
          <NavLink
            to="/"
            className={linkClass}
            end
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/products"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
