import { motion } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();
  const points = [
  t("aboutSection.point1"),
  t("aboutSection.point2"),
  t("aboutSection.point3"),
  t("aboutSection.point4"),
];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -100,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative"
          >
            <img
              src="/clinic.jpg.avif"
              alt="Clinic"
              className="rounded-3xl shadow-xl"
            />

            <div
              className="
                absolute
                bottom-8
                left-8
                bg-blue-600
                text-white
                px-8
                py-6
                rounded-2xl
                shadow-lg
              "
            >
              <p className="text-lg font-semibold">
                {t("aboutSection.imageTitle1")}
              </p>

              <p className="text-lg font-semibold">
                {t("aboutSection.imageTitle2")}
              </p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <p className="uppercase tracking-widest text-blue-600 font-semibold mb-4">
              {t("aboutSection.smallTitle")}
            </p>

            <h2 className="text-5xl font-bold text-slate-900 leading-tight">
              {t("aboutSection.title")}

              <span className="block text-blue-600">
                {t("aboutSection.titleBlue")}
              </span>
            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed">
              {t("aboutSection.description")}
            </p>

            <div className="mt-10 space-y-4">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex items-center gap-3"
                >
                  <FaCircleCheck className="text-blue-600" />

                  <span className="text-slate-700">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
  }}
  transition={{
    duration: 0.6,
    delay: 0.6,
  }}
>
  <NavLink
    to="/about"
    className="
      inline-block
      mt-10
      bg-white
      border
      border-slate-200
      px-8
      py-4
      rounded-xl
      shadow-sm
      text-slate-700
      font-medium
      hover:bg-blue-600
      hover:text-white
      hover:shadow-lg
      hover:-translate-y-1
      transition-all
      duration-300
    "
  >
    {t("aboutSection.button")}
  </NavLink>
</motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}