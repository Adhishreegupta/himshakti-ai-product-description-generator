import hero from "../assets/hero-bg1.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function Hero() {
  const navigate = useNavigate();
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen max-w-7xl mx-auto px-6 sm:px-8">

        <div className="max-w-3xl">

          <p className="text-green-300 font-semibold text-base sm:text-lg">
            AI FOR E-COMMERCE CONTENT
          </p>

          <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 5, y: 3 }}
  transition={{ duration: 0.8 }}
  className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mt-4"
  style={{ fontFamily: "Poppins" }}
>
  From Product to Purchase.
</motion.h1>

          <motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 4, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
  className="text-gray-200 mt-6  sm:mt-8
  text-lg
  sm:text-xl
  lg:text-2xl
  leading-8
  sm:leading-9
  max-w-3xl"
  style={{ fontFamily: "Poppins" }}
>
  Give every product a voice that informs, engages, and inspires customers to buy.
</motion.p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-10">

            <button onClick={() => navigate("/create")} className="bg-green-600 hover:bg-green-700
             px-6 py-4 rounded-full text-white font-semibold transition duration-300">

             Create

            </button>
            <button
              className="
                border border-white text-white
                px-6 sm:px-8 py-3 sm:py-4
                rounded-full
                hover:bg-white hover:text-black
                transition duration-300
              "
            >
              Explore
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;