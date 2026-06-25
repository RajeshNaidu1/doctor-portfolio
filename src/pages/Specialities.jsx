import { useState } from "react";
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
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const whatsappLink =
  "https://wa.me/917386292575?text=Hello%20Doctor,%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName:%20%0APhone:%20%0APreferred%20Date:%20%0APreferred%20Time:%20%0AReason%20for%20Consultation:%20";
  const specialties = [
    {
      icon: <FaHeartPulse />,
      title: "Preventive Care",
      description:
        "Comprehensive health screenings, vaccinations, wellness planning, and disease prevention strategies.",
      details: [
        "Annual health checkups",
        "Vaccination guidance",
        "Lifestyle counseling",
        "Early disease detection",
      ],
    },

    {
      icon: <FaStethoscope />,
      title: "General Medicine",
      description:
        "Diagnosis and treatment of common illnesses with a focus on long-term patient wellbeing.",
      details: [
        "Fever and infections",
        "Respiratory illnesses",
        "Digestive disorders",
        "Routine medical care",
      ],
    },

    {
      icon: <FaUserDoctor />,
      title: "Internal Medicine",
      description:
        "Specialized care for chronic diseases, complex medical conditions, and adult healthcare.",
      details: [
        "Diabetes management",
        "Hypertension care",
        "Thyroid disorders",
        "Adult healthcare",
      ],
    },

    {
      icon: <FaKitMedical />,
      title: "Health Checkups",
      description:
        "Routine medical evaluations and personalized health assessments for early detection.",
      details: [
        "Executive health packages",
        "Lab investigations",
        "Risk assessment",
        "Preventive screening",
      ],
    },

    {
      icon: <FaNotesMedical />,
      title: "Chronic Disease Management",
      description:
        "Long-term management plans for diabetes, hypertension, thyroid disorders, and more.",
      details: [
        "Long-term monitoring",
        "Medication management",
        "Lifestyle modifications",
        "Regular follow-ups",
      ],
    },

    {
      icon: <FaHospitalUser />,
      title: "Patient Consultation",
      description:
        "Personalized consultations focused on accurate diagnosis, treatment planning, and recovery.",
      details: [
        "Personalized treatment plans",
        "Second opinions",
        "Medical counseling",
        "Follow-up consultations",
      ],
    },
  ];

  return (
    <PageWrapper>
      <Navbar />

      <section className="pt-32 md:pt-40 pb-24 bg-gradient-to-b from-blue-50 to-white min-h-screen">

        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}

          <div className="text-center mb-20">

            <p className="uppercase tracking-widest text-blue-600 font-semibold">
              Areas of Expertise
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-4 text-slate-900">
              Medical Specialities
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
              Providing comprehensive healthcare services
              with a focus on prevention, diagnosis,
              treatment, and long-term patient wellness.
            </p>

          </div>

          {/* Cards */}

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
                  className="
                    mt-8
                    text-blue-600
                    font-semibold
                    hover:translate-x-1
                    transition
                  "
                >
                  Learn More →
                </button>
              </div>
            ))}

          </div>

          {/* CTA Section */}

          <div
            className="
              mt-24
              bg-blue-600
              rounded-3xl
              text-white
              p-8 md:p-12
              text-center
            "
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Need Medical Consultation?
            </h2>

            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              Schedule an appointment today and receive
              personalized healthcare guidance tailored
              to your needs.
            </p>

            <a
              href={whatsappLink}
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
              Book Appointment
            </a>
          </div>

        </div>

        {/* Modal */}

        {selectedSpecialty && (
          <div
            className="
              fixed
              inset-0
              bg-black/50
              flex
              items-center
              justify-center
              z-[100]
              p-6
            "
            onClick={() => setSelectedSpecialty(null)}
          >
            <div
              className="
                bg-white
                rounded-3xl
                p-8 md:p-10
                max-w-lg
                w-full
                shadow-2xl
              "
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
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <span className="text-blue-600 font-bold">
                      ✓
                    </span>

                    <span className="text-slate-700">
                      {detail}
                    </span>
                  </div>
                ))}

              </div>

              <button
                onClick={() => setSelectedSpecialty(null)}
                className="
                  mt-8
                  bg-blue-600
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  hover:bg-blue-700
                  transition
                "
              >
                Close
              </button>

            </div>
          </div>
        )}

      </section>

      <Footer />
    </PageWrapper>
  );
}