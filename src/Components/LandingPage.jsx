import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LandingPage = ({ currentSection, scrollToSection }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/gallery5.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/landing.jpg",
  ];

  useEffect(() => {
    if (currentSection === 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentSection, images.length]);

  return (
    <main className="w-full z-[1] h-screen relative">
      <div className="relative h-screen w-full">
        {/* Dark overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-screen bg-black absolute z-[1]"
        ></motion.div>

        {/* Background image */}
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-screen object-cover"
          src="/kfc2.jpg"
          alt="Landing"
        />

        {currentSection === 0 && (
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-20">
            <div className="max-w-7xl w-full grid grid-cols-1 mt-4 md:mt-12 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left Side - Carousel */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="relative flex justify-center"
              >
                <div className="relative group w-full max-w-[420px] sm:max-w-[360px] md:max-w-[420px]">
                  <div className="absolute -top-4 -left-4 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-36 sm:w-40 md:w-48 h-36 sm:h-40 md:h-48 bg-orange-500/20 rounded-full blur-3xl"></div>

                  <div className="relative hidden md:block h-[250px] sm:h-[320px] md:h-[420px] w-full mx-auto">
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-full h-full bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 transform rotate-3"></div>

                    <div className="relative hidden md:block h-full w-full rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          src={images[currentImageIndex]}
                          alt={`Slide ${currentImageIndex + 1}`}
                          initial={{ opacity: 0, scale: 1.2, rotate: 5 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, scale: 0.8, rotate: -5 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                          className="w-full h-full object-cover"
                        />
                      </AnimatePresence>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-[Montserrat]">
                        {currentImageIndex + 1} / {images.length}
                      </div>
                    </div>

                    {/* Dots */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className="group relative"
                          aria-label={`Go to image ${index + 1}`}
                        >
                          <div
                            className={`h-2 rounded-full transition-all duration-500 ${
                              currentImageIndex === index
                                ? "w-10 sm:w-12 bg-yellow-400"
                                : "w-2 bg-white/30 group-hover:bg-white/60"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="text-white mt-4 sm:mt-0 space-y-5 text-center md:text-left px-2 sm:px-0"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                  className="inline-block"
                >
                  <span className="px-4 py-1.5 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-[Montserrat] font-semibold border border-yellow-400/30 text-yellow-400">
                    ✦ SINCE 2023
                  </span>
                </motion.div>

                <div className="space-y-2">
                  <div className="overflow-hidden">
                    <motion.h2
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.8,
                        delay: 0.8,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                      className="text-lg sm:text-xl md:text-2xl font-[Dancing_Script] text-gray-300"
                    >
                      Who We Are
                    </motion.h2>
                  </div>

                  <div className="overflow-hidden">
                    <motion.h1
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 0.8,
                        delay: 1,
                        ease: [0.76, 0, 0.24, 1],
                      }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-[Montserrat] font-bold leading-tight"
                    >
                      KUBER TREATS{" "}
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                        PVT. LTD.
                      </span>
                    </motion.h1>
                  </div>
                </div>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                  className="text-xs sm:text-sm md:text-base font-[Montserrat] leading-relaxed text-gray-300 max-w-lg mx-auto md:mx-0"
                >
                  Transforming India's food landscape through strategic
                  franchise partnerships and exceptional brand management.
                  Building success stories, one outlet at a time.
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                  className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
                >
                  {[
                    { number: "20+", label: "Brands" },
                    { number: "50+", label: "Outlets" },
                    { number: "15+", label: "Cities" },
                    { number: "10M+", label: "Served" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center group hover:scale-110 transition-transform duration-300"
                    >
                      <h3 className="text-lg sm:text-xl md:text-2xl font-[Montserrat] font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                        {stat.number}
                      </h3>
                      <p className="text-[10px] sm:text-xs font-[Montserrat] text-gray-400 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4"
                >
                  <button
                    onClick={() => scrollToSection(1)}
                    className="group relative px-6 sm:px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-[Montserrat] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-yellow-400/50"
                  >
                    <span className="relative z-10 text-sm sm:text-base">
                      Explore More
                    </span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                  <button
                    onClick={() => scrollToSection(4)}
                    className="px-6 sm:px-8 py-3 cursor-pointer bg-white/10 backdrop-blur-sm border border-white/30 text-white font-[Montserrat] font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                  >
                    Get In Touch
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default LandingPage;
