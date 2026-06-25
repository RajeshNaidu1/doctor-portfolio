import { NavLink } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Doctor Info */}

          <div>
            <h2 className="text-3xl font-bold">
              Dr. Uday
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Dedicated to providing compassionate,
              evidence-based healthcare and personalized
              treatment plans for every patient.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <NavLink
                to="/"
                className="text-slate-400 hover:text-white transition"
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className="text-slate-400 hover:text-white transition"
              >
                About
              </NavLink>

              <NavLink
                to="/experience"
                className="text-slate-400 hover:text-white transition"
              >
                Experience
              </NavLink>

              <NavLink
                to="/specialities"
                className="text-slate-400 hover:text-white transition"
              >
                Specialities
              </NavLink>

              <NavLink
                to="/contact"
                className="text-slate-400 hover:text-white transition"
              >
                Contact
              </NavLink>

            </div>
          </div>

          {/* Contact Info */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex items-center gap-3">
                <FaPhone />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope />
                <span>doctor@email.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaLocationDot />
                <span>Bangalore, Karnataka</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Section */}

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-500">

          © {new Date().getFullYear()} Rajesh Naidu.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}