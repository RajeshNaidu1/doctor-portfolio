import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const languageRef = useRef(null);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setLanguageOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target)
      ) {
        setLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-slate-700 hover:text-blue-600 transition";

  const currentLanguage =
    i18n.language === "te"
      ? "తెలుగు"
      : i18n.language === "hi"
      ? "हिन्दी"
      : "English";

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

<NavLink to="/" className="flex items-center">
  <img
    src="/logo.png"
    alt="Uday's Health Care Logo"
    className="
      h-14
      w-14
      rounded-full
      object-cover
      border-2
      border-blue-600
      shadow-md
      hover:scale-105
      transition-all
      duration-300
    "
  />
</NavLink>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-10">

            <NavLink to="/" className={navLinkClass}>
              {t("navbar.home")}
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              {t("navbar.about")}
            </NavLink>

            <NavLink to="/experience" className={navLinkClass}>
              {t("navbar.experience")}
            </NavLink>

            <NavLink to="/specialities" className={navLinkClass}>
              {t("navbar.specialities")}
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              {t("navbar.contact")}
            </NavLink>

            {/* Language Dropdown */}

            <div
              className="relative"
              ref={languageRef}
            >
              <button
                onClick={() =>
                  setLanguageOpen(!languageOpen)
                }
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-xl
                  border
                  border-slate-200
                  hover:bg-blue-50
                  transition
                  font-medium
                "
              >
                🌐 {currentLanguage}
              </button>

              {languageOpen && (
                <div
                  className="
                    absolute
                    right-0
                    mt-3
                    w-44
                    bg-white
                    rounded-xl
                    shadow-xl
                    border
                    overflow-hidden
                    z-50
                  "
                >
                  <button
                    onClick={() =>
                      changeLanguage("en")
                    }
                    className="
                      w-full
                      text-left
                      px-4
                      py-3
                      hover:bg-blue-50
                    "
                  >
                    🇬🇧 English
                  </button>

                  <button
                    onClick={() =>
                      changeLanguage("te")
                    }
                    className="
                      w-full
                      text-left
                      px-4
                      py-3
                      hover:bg-blue-50
                    "
                  >
                    🇮🇳 తెలుగు
                  </button>

                  <button
                    onClick={() =>
                      changeLanguage("hi")
                    }
                    className="
                      w-full
                      text-left
                      px-4
                      py-3
                      hover:bg-blue-50
                    "
                  >
                    🇮🇳 हिन्दी
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden text-2xl"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen ? (
              <FaXmark />
            ) : (
              <FaBars />
            )}
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
              {t("navbar.home")}
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {t("navbar.about")}
            </NavLink>

            <NavLink
              to="/experience"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {t("navbar.experience")}
            </NavLink>

            <NavLink
              to="/specialities"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {t("navbar.specialities")}
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {t("navbar.contact")}
            </NavLink>

            {/* Mobile Language */}

            <div className="pt-2 border-t">

              <p className="text-sm font-semibold mb-3">
                🌐 Language
              </p>

              <button
                onClick={() => {
                  changeLanguage("en");
                  setMenuOpen(false);
                }}
                className="block w-full text-left py-2"
              >
                🇬🇧 English
              </button>

              <button
                onClick={() => {
                  changeLanguage("te");
                  setMenuOpen(false);
                }}
                className="block w-full text-left py-2"
              >
                🇮🇳 తెలుగు
              </button>

              <button
                onClick={() => {
                  changeLanguage("hi");
                  setMenuOpen(false);
                }}
                className="block w-full text-left py-2"
              >
                🇮🇳 हिन्दी
              </button>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}