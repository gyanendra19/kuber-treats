import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <main className="h-screen z-[100] bg-[#f5f1e8] w-full relative">
      <div className="h-full relative pt-6 md:pt-24 px-4 md:px-0">
        {/* Large Image - Right side */}
        <div className="absolute left-[5%] sm:left-[50%] bottom-[15%] sm:right-[15%] md:right-[30%] h-[35%] sm:h-[50%] md:h-[70%] w-[45%] sm:w-[40%] md:w-[20%] overflow-hidden">
          <motion.img
            src="/gallery5.jpg"
            className="h-full w-full object-cover rounded-md"
            initial={{ clipPath: "inset(0 0 50% 0)" }}
            whileInView={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.3 }}
          />
        </div>

        {/* Small Image - Bottom Right */}
        <motion.img
          className="h-[12%] sm:h-[15%] md:h-[25%] w-auto absolute right-[5%] md:right-[7%] bottom-[38%] sm:bottom-[15%] md:bottom-auto md:top-auto rounded-md"
          src="/landing.jpg"
          initial={{ clipPath: "inset(0 0 50% 0)" }}
          whileInView={{ clipPath: "inset(0 0 0 0)" }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.5 }}
        />

        {/* Content Section - Left side */}
        <div className="relative z-10">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-4 sm:mt-8 md:mt-20 ml-4 sm:ml-8 md:ml-12 text-lg sm:text-xl font-[Dancing_Script]"
          >
            ABOUT US
          </motion.h1>

          <div className="overflow-hidden ml-4 sm:ml-12 md:ml-20 mt-4 sm:mt-6 md:mt-8">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              transition={{
                duration: 1.5,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-xl sm:text-3xl md:text-4xl font-[Montserrat] w-full sm:w-[90%] md:w-[30rem] pr-4 md:pr-0"
            >
              Growing Together Through Franchising
            </motion.h2>
          </div>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-4 sm:mt-5 font-[Montserrat] ml-4 sm:ml-12 md:ml-20 w-[85%] sm:w-[70%] md:w-[350px] text-xs sm:text-base"
          >
            We believe in building opportunities that empower entrepreneurs to
            succeed. Our proven business model and dedicated support system make
            franchising simple. Together, we create lasting partnerships that
            drive growth and success.
          </motion.p>

          <button className="ml-4 sm:ml-12 md:ml-20 font-[Lora] w-[150px] sm:w-[180px] md:w-[200px] text-left border-b border-black text-base sm:text-lg md:text-xl mt-4 pb-1 hover:border-b-2 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
