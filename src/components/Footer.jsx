import { NavLink } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

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
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              {t("footer.quickLinks")}
            </h3>

            <div className="flex flex-col gap-3">

              <NavLink
                to="/"
                className="text-slate-400 hover:text-white transition"
              >
                {t("navbar.home")}
              </NavLink>

              <NavLink
                to="/about"
                className="text-slate-400 hover:text-white transition"
              >
                {t("navbar.about")}
              </NavLink>

              <NavLink
                to="/experience"
                className="text-slate-400 hover:text-white transition"
              >
                {t("navbar.experience")}
              </NavLink>

              <NavLink
                to="/specialities"
                className="text-slate-400 hover:text-white transition"
              >
                {t("navbar.specialities")}
              </NavLink>

              <NavLink
                to="/contact"
                className="text-slate-400 hover:text-white transition"
              >
                {t("navbar.contact")}
              </NavLink>

            </div>
          </div>

          {/* Contact Info */}

          <div>
            <h3 className="text-xl font-semibold mb-5">
              {t("footer.contact")}
            </h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex items-center gap-3">
  <FaPhone />

  <a
    href="tel:+916303594165"
    className="hover:text-blue-400 hover:underline transition"
  >
    +91 6303594165
  </a>
</div>

<div className="flex items-center gap-3">
  <FaEnvelope />

  <a
    href="mailto:doctor@email.com"
    className="hover:text-blue-400 hover:underline transition"
  >
    doctor@email.com
  </a>
</div>

              <div className="flex items-center gap-3">
  <FaLocationDot />
  <a
    href="https://www.google.com/maps/search/Uday's+Health+Clinic/@12.989836,77.6484,14z?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition underline-offset-2 hover:underline"
  >
    Yendada, Visakhapatnam
  </a>
</div>

            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-500">
          © {new Date().getFullYear()} Rajesh Naidu.
          {" "}
          {t("footer.copyright")}
        </div>

      </div>
    </footer>
  );
}