import {
  FaLocationDot,
  FaClock,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function ContactStrip() {
  const { t } = useTranslation();

  const items = [
    {
      icon: <FaLocationDot />,
      title: t("contactStrip.addressTitle"),
      text: t("contactStrip.address"),
      link: "https://www.google.com/maps/search/Uday's+Health+Clinic/@12.989836,77.6484,14z?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: <FaClock />,
      title: t("contactStrip.hoursTitle"),
      text: t("contactStrip.hours"),
    },
    {
      icon: <FaPhone />,
      title: t("contactStrip.phoneTitle"),
      text: "+91 6303594165",
      link: "tel:+916303594165",
    },
    {
      icon: <FaEnvelope />,
      title: t("contactStrip.emailTitle"),
      text: "doctor@email.com",
      link: "mailto:doctor@email.com",
    },
  ];

  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            bg-white
            rounded-3xl
            shadow-lg
            p-10
            transition-all
            duration-300
            hover:shadow-2xl
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {items.map((item, index) => {
              const content = (
                <div
                  className="
                    flex
                    gap-4
                    items-start
                    cursor-pointer
                    group
                  "
                >
                  <div
                    className="
                      text-blue-600
                      text-2xl
                      mt-1
                      transition
                      group-hover:scale-110
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h4
                      className="
                        font-semibold
                        text-slate-900
                        group-hover:text-blue-600
                        transition
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        text-slate-500
                        text-sm
                        mt-2
                        leading-relaxed
                        group-hover:text-slate-700
                        transition
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              );

              return item.link ? (
                <a
                  key={index}
                  href={item.link}
                  target={
                    item.link.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="
                    block
                    rounded-xl
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}