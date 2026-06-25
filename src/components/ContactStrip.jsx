import {
  FaLocationDot,
  FaClock,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

export default function ContactStrip() {

  const items = [
    {
      icon: <FaLocationDot />,
      title: "Clinic Address",
      text: "Bangalore, Karnataka",
    },
    {
      icon: <FaClock />,
      title: "Consultation Hours",
      text: "9 AM - 7 PM",
    },
    {
      icon: <FaPhone />,
      title: "Emergency Care",
      text: "+91 XXXXX XXXXX",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      text: "doctor@email.com",
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

          <div className="grid md:grid-cols-4 gap-10">

            {items.map((item, index) => (
              <div
                key={index}
                className="flex gap-4"
              >
                <div className="text-blue-600 text-2xl">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold">
                    {item.title}
                  </h4>

                  <p className="text-slate-500 text-sm mt-2">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}