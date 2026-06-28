import { useState } from "react";
import { useTranslation } from "react-i18next";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";

import {
  FaHeartPulse,
  FaStethoscope,
  FaUserDoctor,
  FaKitMedical,
  FaNotesMedical,
  FaHospitalUser,
} from "react-icons/fa6";

export default function Specialities() {
  const { t } = useTranslation();

  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const bookingLink =
  "https://book.healthplix.com/dr-dr-yerramsetty-uday-kumar-consulting-physician-yendada-visak_791638";
  const whatsappLink =
  "https://wa.me/916303594165?text=Hi";
  const specialties = [
    {
      icon: <FaHeartPulse />,
      title: t("specialities.preventive.title"),
      description: t("specialities.preventive.description"),
      details: [
        t("specialities.preventive.d1"),
        t("specialities.preventive.d2"),
        t("specialities.preventive.d3"),
        t("specialities.preventive.d4"),
      ],
    },

    {
      icon: <FaStethoscope />,
      title: t("specialities.general.title"),
      description: t("specialities.general.description"),
      details: [
        t("specialities.general.d1"),
        t("specialities.general.d2"),
        t("specialities.general.d3"),
        t("specialities.general.d4"),
      ],
    },

    {
      icon: <FaUserDoctor />,
      title: t("specialities.internal.title"),
      description: t("specialities.internal.description"),
      details: [
        t("specialities.internal.d1"),
        t("specialities.internal.d2"),
        t("specialities.internal.d3"),
        t("specialities.internal.d4"),
      ],
    },

    {
      icon: <FaKitMedical />,
      title: t("specialities.checkups.title"),
      description: t("specialities.checkups.description"),
      details: [
        t("specialities.checkups.d1"),
        t("specialities.checkups.d2"),
        t("specialities.checkups.d3"),
        t("specialities.checkups.d4"),
      ],
    },

    {
      icon: <FaNotesMedical />,
      title: t("specialities.chronic.title"),
      description: t("specialities.chronic.description"),
      details: [
        t("specialities.chronic.d1"),
        t("specialities.chronic.d2"),
        t("specialities.chronic.d3"),
        t("specialities.chronic.d4"),
      ],
    },

    {
      icon: <FaHospitalUser />,
      title: t("specialities.consultation.title"),
      description: t("specialities.consultation.description"),
      details: [
        t("specialities.consultation.d1"),
        t("specialities.consultation.d2"),
        t("specialities.consultation.d3"),
        t("specialities.consultation.d4"),
      ],
    },
  ];

  return (
    <PageWrapper>
      <Navbar />

      <section className="pt-32 md:pt-40 pb-24 bg-gradient-to-b from-blue-50 to-white min-h-screen">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-widest text-blue-600 font-semibold">
              {t("specialities.subtitle")}
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-4 text-slate-900">
              {t("specialities.heading")}
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
              {t("specialities.description")}
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {specialties.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  p-10
                  min-h-[280px]
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  hover:shadow-2xl
                  group
                "
              >
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                    text-blue-600
                    text-3xl
                    mb-6
                    group-hover:bg-blue-600
                    group-hover:text-white
                    transition-all
                  "
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <button
                  onClick={() => setSelectedSpecialty(item)}
                  className="mt-8 text-blue-600 font-semibold hover:translate-x-1 transition"
                >
                  {t("specialities.learnMore")} →
                </button>

              </div>
            ))}

          </div>

          <div
            className="
              mt-24
              bg-blue-600
              rounded-3xl
              text-white
              p-8
              md:p-12
              text-center
            "
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("specialities.ctaTitle")}
            </h2>

            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              {t("specialities.ctaDescription")}
            </p>

            <a
              href={bookingLink}
              target="_blank"
              rel="noreferrer"
              className="
                inline-block
                mt-8
                bg-white
                text-blue-600
                px-8
                py-4
                rounded-xl
                font-semibold
                hover:scale-105
                transition
              "
            >
              {t("specialities.bookAppointment")}
            </a>

          </div>

        </div>

        {selectedSpecialty && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-6"
            onClick={() => setSelectedSpecialty(null)}
          >
            <div
              className="bg-white rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold text-slate-900">
                {selectedSpecialty.title}
              </h2>

              <p className="mt-4 text-slate-600 leading-relaxed">
                {selectedSpecialty.description}
              </p>

              <div className="mt-8 space-y-4">
                {selectedSpecialty.details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span className="text-slate-700">{detail}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelectedSpecialty(null)}
                className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                {t("specialities.close")}
              </button>

            </div>
          </div>
        )}

      </section>

      <Footer />
    </PageWrapper>
  );
}