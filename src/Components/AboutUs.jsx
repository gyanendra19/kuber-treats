import { motion } from "framer-motion";

const AboutUs = ({ scrollToSection }) => {
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

        {/* Right Side - Visual Elements */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center relative">
          <div className="relative w-[500px] h-[500px]">
            {/* Decorative circles */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#8b6f47]"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute bottom-10 left-0 w-64 h-64 rounded-full bg-[#d4a574]"
            />

            {/* Central content cards */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute top-20 left-10 bg-white p-6 rounded-lg shadow-lg w-48 z-10"
            >
              <h3 className="font-[Montserrat] font-bold text-3xl text-[#8b6f47]">
                15+
              </h3>
              <p className="font-[Montserrat] text-sm mt-2 text-gray-700">
                Years of Excellence
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute top-64 right-10 bg-white p-6 rounded-lg shadow-lg w-48 z-10"
            >
              <h3 className="font-[Montserrat] font-bold text-3xl text-[#8b6f47]">
                50+
              </h3>
              <p className="font-[Montserrat] text-sm mt-2 text-gray-700">
                Franchise Locations
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute bottom-0 left-24 bg-white p-6 rounded-lg shadow-lg w-52 z-10"
            >
              <h3 className="font-[Montserrat] font-bold text-3xl text-[#8b6f47]">
                1000+
              </h3>
              <p className="font-[Montserrat] text-sm mt-2 text-gray-700">
                Happy Customers Daily
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
