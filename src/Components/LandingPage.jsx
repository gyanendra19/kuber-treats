import Navbar from "./Navbar";
import { motion } from "framer-motion";

const LandingPage = ({ currentSection, scrollToSection }) => {
  return (
    <main className="w-full z-[1] h-screen relative">
      <div className="relative h-screen w-full">
        {/* Dark overlay with fade in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-screen bg-black absolute z-[1]"
        ></motion.div>

        {/* Background image with scale animation */}
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-screen object-cover"
          src="/kfc2.jpg"
          alt="Landing"
        />

        {currentSection === 0 && (
          <>
            {/* FRANCHISE - Slide up from bottom */}
            <div className="overflow-hidden z-20 absolute top-[25%] sm:top-[28%] md:top-[30%] left-1/2 sm:left-[40%] md:left-[35%] -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-auto">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[85px] tracking-wider font-[Lilita_One] text-white text-center sm:text-left"
              >
                FRANCHISE
              </motion.h1>
            </div>

            {/* Mobile: PARTNERSHIP as one word, Desktop: Split with decorative P */}
            <div className="block sm:hidden overflow-hidden z-20 absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%]">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-4xl tracking-wider font-[Lilita_One] text-white text-center"
              >
                PARTNERSHIP
              </motion.h1>
            </div>

            {/* Desktop: P in PARTNERSHIP - Fade and scale */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: "easeOut",
              }}
              className="hidden sm:block z-20 tracking-wider font-[Dancing_Script] text-white absolute top-[42%] md:top-[45%] left-[43%] md:left-[47%] text-5xl md:text-7xl lg:text-8xl -translate-x-1/2 -translate-y-1/2"
            >
              P
            </motion.h1>

            {/* Desktop: ARTNERSHI - Slide from left */}
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="hidden sm:block text-4xl md:text-6xl lg:text-[80px] z-20 tracking-wider font-[Lilita_One] text-white absolute top-[42%] md:top-[45%] left-[58%] md:left-[65%] -translate-x-1/2 -translate-y-1/2"
            >
              ARTNERSHI
            </motion.h1>

            {/* Desktop: P at end - Fade and rotate */}
            <motion.h1
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.3,
                ease: "easeOut",
              }}
              className="hidden sm:block z-20 tracking-wider font-[Dancing_Script] text-white absolute top-[42%] md:top-[45%] left-[78%] md:left-[83%] text-5xl md:text-7xl lg:text-8xl -translate-x-1/2 -translate-y-1/2"
            >
              P
            </motion.h1>

            {/* FOCUS - Slide up from bottom */}
            <div className="overflow-hidden z-20 absolute top-[51%] sm:top-[55%] md:top-[58%] left-1/2 sm:left-[52%] md:left-[54%] -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-auto">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 1.6,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] tracking-wider font-[Lilita_One] text-white text-center sm:text-left"
              >
                FOCUS
              </motion.h1>
            </div>

            {/* Description - Fade and slide up */}
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 2,
                ease: "easeOut",
              }}
              className="text-sm sm:text-base md:text-[16px] z-20 w-[85%] sm:w-[60%] md:w-[40%] lg:w-[25%] text-white absolute top-[68%] sm:top-[70%] md:top-[74%] left-1/2 sm:left-[55%] md:left-[58%] -translate-x-1/2 -translate-y-1/2 font-[Montserrat] text-center sm:text-left px-4 sm:px-0"
            >
              Kuber Treats guides entrepreneurs to validated opportunities,
              building local success on a foundation of national strength.
            </motion.p>

            {/* GET IN TOUCH button */}
            {/* <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 2,
                ease: "easeOut",
              }}
              className="text-sm sm:text-base md:text-[16px] tracking-wider z-20 w-auto sm:w-[25%] md:w-[13%] text-white absolute top-[82%] sm:top-[84%] md:top-[86%] left-1/2 sm:left-[52%] -translate-x-1/2 -translate-y-1/2 font-[Montserrat] border-b border-white pb-1 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => scrollToSection(4)}
            >
              GET IN TOUCH
            </motion.p> */}
          </>
        )}
      </div>
    </main>
  );
};

export default LandingPage;
