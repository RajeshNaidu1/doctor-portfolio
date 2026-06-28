import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageWrapper from "../components/PageWrapper";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation();

  const experiences = [
    {
      year: "2023 - Present",
      title: t("experience.exp1.title"),
      hospital: "Apollo Hospital",
      description: t("experience.exp1.description"),
    },
    {
      year: "2018 - 2023",
      title: t("experience.exp2.title"),
      hospital: "Fortis Hospital",
      description: t("experience.exp2.description"),
    },
    {
      year: "2014 - 2018",
      title: t("experience.exp3.title"),
      hospital: "Manipal Hospital",
      description: t("experience.exp3.description"),
    },
  ];

  return (
    <PageWrapper>
      <Navbar />

      <section className="pt-40 pb-24 bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center mb-20">
            <p className="uppercase tracking-widest text-blue-600 font-semibold">
              {t("experience.headingTag")}
            </p>

            <h1 className="text-6xl font-bold mt-4 text-slate-900">
              {t("experience.heading")}
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              {t("experience.subHeading")}
            </p>
          </div>

          {/* Timeline */}

          <div className="relative">

            {/* Vertical Line */}

            <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-200"></div>

            {experiences.map((item, index) => (
              <div
                key={index}
                className="relative pl-16 pb-16"
              >
                {/* Timeline Dot */}

                <div
                  className="
                    absolute
                    left-0
                    top-2
                    w-8
                    h-8
                    rounded-full
                    bg-blue-600
                    border-4
                    border-white
                    shadow-lg
                  "
                ></div>

                {/* Experience Card */}

                <div
                  className="
                    bg-white
                    rounded-3xl
                    p-8
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  <span
                    className="
                      inline-block
                      bg-blue-100
                      text-blue-700
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-semibold
                    "
                  >
                    {item.year}
                  </span>

                  <h2 className="text-3xl font-bold text-slate-900 mt-5">
                    {item.title}
                  </h2>

                  <p className="text-blue-600 font-semibold mt-2">
                    {item.hospital}
                  </p>

                  <p className="text-slate-600 mt-5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}