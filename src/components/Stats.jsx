import {
  FaAward,
  FaUserDoctor,
  FaUsers,
} from "react-icons/fa6";

export default function Stats() {
  const stats = [
    {
      icon: <FaAward />,
      value: "10+",
      label: "Years Experience",
    },
    {
      icon: <FaUsers />,
      value: "5000+",
      label: "Patients Treated",
    },
    {
      icon: <FaUserDoctor />,
      value: "3",
      label: "Specializations",
    },
    {
      icon: <FaAward />,
      value: "15+",
      label: "Awards & Honors",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
      <div className="grid md:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <div
  key={index}
  className="
    bg-white
    rounded-3xl
    shadow-lg
    p-10
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

            <h3 className="text-5xl font-bold text-slate-900">
              {item.value}
            </h3>

            <p className="mt-3 text-slate-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}