import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-slate-700 hover:text-blue-600 transition";

  return (
    <nav
      className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2
        w-[95%]
        max-w-7xl
        z-50
      "
    >
      <div
        className="
          bg-white/90
          backdrop-blur-xl
          rounded-2xl
          shadow-lg
          px-8
          py-5
        "
      >
        <div className="flex items-center justify-between">

          {/* Logo */}

          <h1 className="text-2xl font-bold text-slate-900">
            Dr. Uday
          </h1>

          {/* Desktop Menu */}

          <div className="hidden md:flex gap-10">

            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            <NavLink to="/experience" className={navLinkClass}>
              Experience
            </NavLink>

            <NavLink to="/specialities" className={navLinkClass}>
              Specialities
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

          </div>

          {/* Mobile Button */}

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div
            className="
              md:hidden
              flex
              flex-col
              gap-5
              mt-6
              pb-4
            "
          >
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/experience"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </NavLink>

            <NavLink
              to="/specialities"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Specialities
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>

          </div>
        )}
      </div>
    </nav>
  );
}