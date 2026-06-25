import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import { motion } from "framer-motion";
import AboutSection from "../components/AboutSection";
import ContactStrip from "../components/ContactStrip";
import PageWrapper from "../components/PageWrapper";
import Footer from "../components/Footer";

const whatsappLink =
  "https://wa.me/917386292575?text=Hello%20Doctor,%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName:%20%0APhone:%20%0APreferred%20Date:%20%0APreferred%20Time:%20%0AReason%20for%20Consultation:%20";


export default function Home() {
  return (
    <PageWrapper>
      <Navbar />

      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">

        <section className="relative min-h-screen">

  {/* Background Doctor Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/doctor.jpeg')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center">

    <div className="max-w-3xl text-white">

      <div className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-8">
        CONSULTANT PHYSICIAN
      </div>

      <h1 className="text-6xl md:text-8xl font-bold leading-tight">
        Dr. Uday
      </h1>

      <div className="w-24 h-1 bg-blue-400 my-8"></div>

      <p className="text-2xl md:text-3xl leading-relaxed">
        Dedicated to compassionate,
        evidence-based medical care.
      </p>

      <p className="mt-6 text-lg text-white/90 max-w-xl">
        With over a decade of experience providing
        personalized healthcare and long-term wellness support.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">

        <a
          href={whatsappLink}
          className="
            bg-blue-600
            hover:bg-blue-700
            px-8
            py-4
            rounded-xl
            transition
          "
        >
          Book Appointment
        </a>

        <a
          href="/about"
          className="
            bg-white/20
            backdrop-blur-sm
            border border-white/30
            px-8
            py-4
            rounded-xl
          "
        >
          Learn More
        </a>

      </div>

    </div>

  </div>

</section>

        <Stats />

        
        <div className="mt-16 md:mt-24">
  <AboutSection />
</div>

        <div className="mt-16 md:mt-24">
  <ContactStrip />
</div>
        <Footer />

      </div>
    </PageWrapper>
  );
}