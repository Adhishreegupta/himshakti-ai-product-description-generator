import hero from "../assets/hero-bg1.jpg";

function Hero() {
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

          <h1 className="
            text-3xl sm:text-5xl lg:text-7xl
            font-bold text-white leading-tight mt-4
          ">
            Generate Product Descriptions That Sell
          </h1>

          <p className="
            text-gray-200 mt-6 sm:mt-8
            text-base sm:text-lg lg:text-xl
            leading-7 sm:leading-8
          ">
            Generate compelling, SEO-optimized product descriptions for food brands and e-commerce marketplaces using AI.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-10">

            <button
              className="
                bg-green-600 hover:bg-green-700
                px-6 sm:px-8 py-3 sm:py-4
                rounded-full text-white font-semibold
                transition duration-300
              "
            >
              Start Creating
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