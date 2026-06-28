import {
  FaAward,
  FaUserDoctor,
  FaUsers,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function Stats() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: <FaAward />,
      value: "10+",
      label: t("stats.experience"),
    },
    {
      icon: <FaUsers />,
      value: "5000+",
      label: t("stats.patients"),
    },
    {
      icon: <FaUserDoctor />,
      value: "3",
      label: t("stats.specializations"),
    },
    {
      icon: <FaAward />,
      value: "15+",
      label: t("stats.awards"),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
              md:p-10
              text-center
              transition-all
              duration-300
              hover:-translate-y-3
              hover:shadow-2xl
            "
          >
            <div className="text-blue-600 text-3xl mb-4 flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
              {item.value}
            </h3>

            <p className="mt-3 text-sm md:text-base text-slate-600">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}