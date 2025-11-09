import { motion } from "framer-motion";

const AboutUs = ({ scrollToSection }) => {
  // Brand logos array for the infinite loop
  const brands = [
    { src: "/kfclogo.png", alt: "KFC" },
    { src: "/towlogo.png", alt: "TOW" },
    { src: "/puchkalogo.jpg", alt: "Puchkaman" },
    { src: "/tjlogo.png", alt: "Tea Junction" },
    { src: "/kfclogo.png", alt: "KFC" }, // Duplicate for seamless loop
    { src: "/towlogo.png", alt: "TOW" },
    { src: "/puchkalogo.jpg", alt: "Puchkaman" },
    { src: "/tjlogo.png", alt: "Tea Junction" },
  ];

  return (
    <main className="h-screen z-[100] bg-[#f5f1e8] w-full relative overflow-hidden">
      <div className="h-full relative pt-6 md:pt-10 px-4 md:px-0 flex flex-col md:flex-row">
        {/* Left Side - Content Section */}
        <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-4 sm:mt-8 md:mt-0 ml-4 sm:ml-8 md:ml-20 text-lg sm:text-xl font-[Dancing_Script]"
          >
            ABOUT US
          </motion.h1>

          <div className="overflow-hidden ml-4 sm:ml-12 md:ml-20 mt-4 sm:mt-6 md:mt-4">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              transition={{
                duration: 1.5,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-xl sm:text-3xl md:text-4xl font-[Montserrat] w-full sm:w-[90%] md:w-[30rem] pr-4 md:pr-0"
            >
              Growing Together Through Collaboration
            </motion.h2>
          </div>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-4 sm:mt-5 font-[Montserrat] ml-4 sm:ml-12 md:ml-20 w-[85%] sm:w-[70%] md:w-[600px] text-xs sm:text-base"
          >
            At <strong>Kuber Treats Pvt. Ltd.</strong>, we are passionate about
            bringing exceptional food experiences to people by investing in and
            managing popular food brands. Our company specializes in acquiring
            and operating franchises such as Tea Junction and Puchkaman, while
            also strategically investing in renowned global food chains like
            KFC, Subway, and Domino's. With a strong focus on quality, customer
            satisfaction, and growth, we aim to expand our presence across
            India's vibrant food and beverage industry.
          </motion.p>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-4 hidden sm:block sm:mt-5 font-[Montserrat] ml-4 sm:ml-12 md:ml-20 w-[85%] sm:w-[70%] md:w-[600px] text-xs sm:text-base"
          >
            Driven by innovation and a love for great taste, Kuber Treats Pvt.
            Ltd. is committed to building a diverse portfolio of trusted food
            brands that deliver consistent excellence. Our mission is to create
            opportunities, serve happiness, and become a leading name in India's
            dynamic food franchise landscape.
          </motion.p>

          <button
            onClick={() => scrollToSection(5)}
            className="ml-4 sm:ml-12 md:ml-20 font-[Lora] w-[150px] sm:w-[180px] md:w-[200px] text-left border-b border-black text-base sm:text-lg md:text-xl mt-4 pb-1 hover:border-b-2 transition-all cursor-pointer"
          >
            Learn More
          </button>
        </div>

        {/* Right Side - Brand Logos Infinite Loop */}
        <div className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center relative">
          {/* Heading */}
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-[Montserrat] font-bold mb-8 text-center"
          >
            OUR BRANDS
          </motion.h2>

          {/* Infinite Loop Container */}
          <div className="relative w-full max-w-md h-[70vh] overflow-hidden">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#f5f1e8] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f5f1e8] to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling logos - Duplicate for seamless loop */}
            <motion.div
              animate={{
                y: ["0%", "-50%"],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex flex-col gap-6"
            >
              {/* First set */}
              {brands.slice(0, 4).map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center justify-center rounded-xl p-4 h-45 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {brands.slice(0, 4).map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center justify-center rounded-xl p-4 h-45  hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile - Show brands in a simple grid below content */}
        <div className="md:hidden w-full mt-8 mb-4">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl font-[Montserrat] font-bold mb-4 text-center"
          >
            OUR BRANDS
          </motion.h2>

          <div className="grid grid-cols-2 gap-4 px-4">
            {brands.slice(0, 4).map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center bg-white rounded-xl shadow-lg p-4 h-24"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
