import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";

import {
  FaGraduationCap,
  FaLanguage,
  FaAward,
  FaUserDoctor,
} from "react-icons/fa6";

export default function About() {
  return (
    <PageWrapper>
      <Navbar />

      <section className="pt-40 pb-24 bg-gradient-to-b from-blue-50 to-white min-h-screen">

        <div className="max-w-7xl mx-auto px-6">

          {/* Hero Section */}

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <img
                src="/doctor.jpeg"
                alt="Doctor"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>

            <div>

              <p className="uppercase tracking-widest text-blue-600 font-semibold">
                About Me
              </p>

              <h1 className="text-6xl font-bold mt-4 text-slate-900">
                Compassionate Healthcare,
                Backed by Experience
              </h1>

              <p className="mt-8 text-lg text-slate-600 leading-relaxed">
                Dedicated physician committed to providing
                patient-centered healthcare through evidence-based
                medicine, preventive care, and personalized treatment plans.

                My goal is to help patients achieve better health outcomes
                while building long-term trust and confidence.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-4xl font-bold text-blue-600">
                    10+
                  </h3>

                  <p className="text-slate-600 mt-2">
                    Years Experience
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-4xl font-bold text-blue-600">
                    5000+
                  </h3>

                  <p className="text-slate-600 mt-2">
                    Patients Treated
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Qualifications */}

          <div className="mt-24">

            <h2 className="text-4xl font-bold text-center mb-12">
              Qualifications & Education
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <FaGraduationCap className="text-blue-600 text-4xl mb-4" />

                <h3 className="text-2xl font-bold">
                  MBBS
                </h3>

                <p className="mt-3 text-slate-600">
                  Bachelor of Medicine & Surgery
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <FaUserDoctor className="text-blue-600 text-4xl mb-4" />

                <h3 className="text-2xl font-bold">
                  MD
                </h3>

                <p className="mt-3 text-slate-600">
                  Internal Medicine
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <FaAward className="text-blue-600 text-4xl mb-4" />

                <h3 className="text-2xl font-bold">
                  Fellowship
                </h3>

                <p className="mt-3 text-slate-600">
                  Advanced Clinical Practice
                </p>
              </div>

            </div>

          </div>

          {/* Languages */}

          <div className="mt-24">

            <h2 className="text-4xl font-bold text-center mb-12">
              Languages Spoken
            </h2>

            <div className="max-w-3xl mx-auto">

              <div className="bg-white rounded-3xl shadow-lg p-10">

                <div className="flex items-center justify-center gap-4 mb-6">
                  <FaLanguage className="text-blue-600 text-3xl" />

                  <h3 className="text-2xl font-bold">
                    Communication
                  </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-4">

                  <span className="bg-blue-100 text-blue-700 px-5 py-3 rounded-full">
                    English
                  </span>

                  <span className="bg-blue-100 text-blue-700 px-5 py-3 rounded-full">
                    Telugu
                  </span>

                  <span className="bg-blue-100 text-blue-700 px-5 py-3 rounded-full">
                    Hindi
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Areas of Consultation */}

          <div className="mt-24">

            <h2 className="text-4xl font-bold text-center mb-12">
              Consultation Areas
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {[
                "Diabetes",
                "Hypertension",
                "General Medicine",
                "Preventive Care",
                "Health Checkups",
                "Lifestyle Disorders",
                "Internal Medicine",
                "Chronic Disease Management",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-white
                    p-6
                    rounded-2xl
                    shadow-lg
                    text-center
                    hover:-translate-y-2
                    hover:shadow-2xl
                    transition-all
                  "
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </PageWrapper>
  );
}