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

import { useTranslation } from "react-i18next";

const whatsappLink =
  "https://wa.me/916303594165?text=Hi";
export default function Contact() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <Navbar />

      <section className="pt-40 pb-24 bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}

          <div className="text-center mb-20">
            <p className="uppercase tracking-widest text-blue-600 font-semibold">
              {t("contact.subtitle")}
            </p>

            <h1 className="text-6xl font-bold mt-4 text-slate-900">
              {t("contact.title")}
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
              {t("contact.description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Left Side */}

            <div className="space-y-6">

              {/* WhatsApp */}

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                    <FaWhatsapp className="text-green-600 text-2xl" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">
                      {t("contact.whatsapp")}
                    </h3>

                    <p className="text-slate-600">
                      {t("contact.whatsappDesc")}
                    </p>
                  </div>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
                >
                  {t("contact.bookWhatsapp")}
                </a>

                <p className="mt-4 text-sm text-slate-500">
                  {t("contact.response")}
                </p>
              </div>

              {/* Phone */}

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4">
                  <FaPhone className="text-blue-600 text-2xl" />

                  <div>
                    <h3 className="font-bold">
                      {t("contact.phone")}
                    </h3>

                    <p className="text-slate-600">
                      +91 6303594165
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-blue-600 text-2xl" />

                  <div>
                    <h3 className="font-bold">
                      {t("contact.email")}
                    </h3>

                    <p className="text-slate-600">
                      doctor@email.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}

             <div
  className="
    bg-white
    p-8
    rounded-3xl
    shadow-lg
    hover:shadow-xl
    transition-all
    duration-300
  "
>
  <div className="flex items-start gap-4">
    <FaLocationDot className="text-blue-600 text-2xl mt-1" />

    <div className="w-full">
      <h3 className="font-bold text-lg">
        {t("contact.address")}
      </h3>

      <div className="mt-4 space-y-4">

        {/* Uday's Health Clinic */}

        <a
          href="https://www.google.com/maps/search/Uday's+Health+Clinic/@12.989836,77.6484,14z?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl p-4 border hover:bg-blue-50 hover:border-blue-300 transition cursor-pointer"
        >
          <p className="font-semibold text-slate-900">
            Uday's Health Clinic
          </p>

          <p className="text-slate-600 text-sm mt-1">
            Yendada, Visakhapatnam
          </p>
        </a>

        {/* Arogya Hospital */}

        <a
          href="https://www.google.com/maps?vet=10CAAQoqAOahcKEwjQ_LTV2aqVAxUAAAAAHQAAAAAQCQ..i&sca_esv=59bf8f1ca032d6d5&client=safari&hs=1kUV&pvq=Cg0vZy8xMW40c3A5MDcwIhUKD2Fyb2d5YSBob3NwaXRhbBACGAM&lqi=Ch1hcm9neWEgaG9zcGl0YWwgc3VqYXRoYSBuYWdhckjggdKKk7SAgAhaKxAAEAEYABgBGAIYAyIdYXJvZ3lhIGhvc3BpdGFsIHN1amF0aGEgbmFnYXKSAQhob3NwaXRhbA&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3a3967f99d5be38f:0xdd49a56ac2a9ea89"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl p-4 border hover:bg-blue-50 hover:border-blue-300 transition cursor-pointer"
        >
          <p className="font-semibold text-slate-900">
            Arogya Hospital
          </p>

          <p className="text-slate-600 text-sm mt-1">
            Sujatha Nagar, Visakhapatnam
          </p>
        </a>

      </div>
    </div>
  </div>
</div>

              {/* Hours */}

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <div className="flex items-center gap-4">
                  <FaClock className="text-blue-600 text-2xl" />

                  <div>
                    <h3 className="font-bold">
                      {t("contact.hours")}
                    </h3>

                    <p className="text-slate-600">
                      Mon - Sat : 9:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Card */}

            <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col justify-center">

              <h2 className="text-4xl font-bold text-slate-900">
                {t("contact.ready")}
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                {t("contact.readyDescription")}
              </p>

              <div className="mt-10 space-y-4">

                <div>✅ {t("contact.point1")}</div>
                <div>✅ {t("contact.point2")}</div>
                <div>✅ {t("contact.point3")}</div>
                <div>✅ {t("contact.point4")}</div>

              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">

  <a
    href="https://book.healthplix.com/dr-dr-yerramsetty-uday-kumar-consulting-physician-yendada-visak_791638"
    target="_blank"
    rel="noreferrer"
    className="
      flex-1
      bg-blue-600
      text-white
      text-center
      px-8
      py-4
      rounded-xl
      hover:bg-blue-700
      transition
      font-semibold
    "
  >
    {t("contact.onlineConsultation")}
  </a>

  <a
    href="https://book.healthplix.com/dr-dr-yerramsetty-uday-kumar-consulting-physician"
    target="_blank"
    rel="noreferrer"
    className="
      flex-1
      border-2
      border-blue-600
      text-blue-600
      text-center
      px-8
      py-4
      rounded-xl
      hover:bg-blue-600
      hover:text-white
      transition
      font-semibold
    "
  >
    {t("contact.inPersonConsultation")}
  </a>

</div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}