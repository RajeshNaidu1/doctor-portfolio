import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";

import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaClock,
} from "react-icons/fa6";

const whatsappLink =
  "https://wa.me/917386292575?text=Hello%20Doctor,%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName:%20%0APhone:%20%0APreferred%20Date:%20%0APreferred%20Time:%20%0AReason%20for%20Consultation:%20";
export default function Contact() {
  return (
    <PageWrapper>
      <Navbar />

      <section className="pt-40 pb-24 bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}

          <div className="text-center mb-20">
            <p className="uppercase tracking-widest text-blue-600 font-semibold">
              Contact Me
            </p>

            <h1 className="text-6xl font-bold mt-4 text-slate-900">
              Book Your Appointment
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
              Reach out for consultations, preventive care,
              health checkups, and personalized medical guidance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Information */}

            <div className="space-y-6">

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                    <FaWhatsapp className="text-green-600 text-2xl" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      WhatsApp Appointment
                    </h3>

                    <p className="text-slate-600">
                      Fastest way to schedule a consultation.
                    </p>
                  </div>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    mt-6
                    inline-block
                    bg-green-600
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    hover:bg-green-700
                    transition
                  "
                >
                  Book via WhatsApp
                </a>

                <p className="mt-4 text-sm text-slate-500">
                  Average response time: Within 24 hours
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4">
                  <FaPhone className="text-blue-600 text-2xl" />
                  <div>
                    <h3 className="font-bold">
                      Phone
                    </h3>
                    <p className="text-slate-600">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-blue-600 text-2xl" />
                  <div>
                    <h3 className="font-bold">
                      Email
                    </h3>
                    <p className="text-slate-600">
                      doctor@email.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4">
                  <FaLocationDot className="text-blue-600 text-2xl" />
                  <div>
                    <h3 className="font-bold">
                      Clinic Address
                    </h3>
                    <p className="text-slate-600">
                      Bangalore, Karnataka
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4">
                  <FaClock className="text-blue-600 text-2xl" />
                  <div>
                    <h3 className="font-bold">
                      Consultation Hours
                    </h3>
                    <p className="text-slate-600">
                      Mon - Sat : 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side Card */}

            <div
              className="
                bg-white
                rounded-3xl
                shadow-xl
                p-10
                flex
                flex-col
                justify-center
              "
            >
              <h2 className="text-4xl font-bold text-slate-900">
                Ready to Schedule?
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Whether you need a routine checkup,
                preventive healthcare consultation,
                chronic disease management, or a second opinion,
                I'm here to help.
              </p>

              <div className="mt-10 space-y-4">

                <div className="flex items-center gap-3">
                  ✅ Personalized Medical Care
                </div>

                <div className="flex items-center gap-3">
                  ✅ Preventive Health Planning
                </div>

                <div className="flex items-center gap-3">
                  ✅ Long-Term Patient Support
                </div>

                <div className="flex items-center gap-3">
                  ✅ Evidence-Based Treatment
                </div>

              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="
                  mt-10
                  bg-blue-600
                  text-white
                  text-center
                  px-8
                  py-4
                  rounded-xl
                  hover:bg-blue-700
                  transition
                "
              >
                Schedule Consultation
              </a>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}