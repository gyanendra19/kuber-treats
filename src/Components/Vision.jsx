import { motion } from "framer-motion";

const OurVision = () => {
  return (
    <main className="h-screen bg-gradient-to-br from-[#f5f1e8] via-[#faf8f4] to-[#f5f1e8] w-full relative overflow-hidden flex items-center justify-center">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-orange-400/20 to-yellow-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-20 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="px-5 py-2 bg-white shadow-md rounded-full text-sm font-[Montserrat] font-semibold border border-gray-200 text-gray-800">
              Our Vision
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-3">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.76, 0, 0.24, 1],
                }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-[Dancing_Script] text-gray-700"
              >
                Expanding Horizons
              </motion.h2>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                }}
                viewport={{ once: true }}
                className="text-xl sm:text-4xl font-[Montserrat] font-bold text-gray-900 leading-tight"
              >
                FROM REGIONAL
                <br className="hidden md:block" />
                TO{" "}
                <span className="relative inline-block">
                  NATIONAL
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 1.3 }}
                    viewport={{ once: true }}
                    className="absolute bottom-2 left-0 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 -z-10"
                  />
                </span>
              </motion.h1>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-sm md:text-lg font-[Montserrat] mb-2 leading-relaxed text-gray-700"
          >
            We have successfully established ourselves as a trusted partner with
            leading brands across{" "}
            <span className="font-bold text-gray-900">
              North East India and Bengal
            </span>
            , creating thriving food & retail ecosystems in these vibrant
            markets.
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-sm md:text-lg font-[Montserrat] mb-4 leading-relaxed text-gray-700"
          >
            Now, we're embarking on an ambitious{" "}
            <span className="font-bold text-gray-900">Pan-India expansion</span>
            , bringing our proven expertise and operational excellence to every
            corner of the nation.
          </motion.p>

          {/* Key Points with elegant icons
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-4 pt-4"
          >
            {[
              { text: "Strong foothold in North East & Bengal" },
              { text: "Expanding to major metros nationwide" },
              { text: "Building partnerships across India" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                </div>
                <p className="text-sm md:text-base font-[Montserrat] text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {item.text}
                </p>
              </div>
            ))}
          </motion.div> */}

          {/* CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <button className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-[Montserrat] font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="flex items-center gap-2">
                Be Part of Our Journey
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side - Elegant Visual */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative hidden md:block"
        >
          {/* Decorative frame */}
          <div className="relative">
            {/* Background decorative element */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-3xl transform rotate-3" />

            {/* Main content card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    label: "Current Presence",
                    value: "NE & Bengal",
                    icon: "📍",
                  },
                  {
                    label: "Next Target",
                    value: "Pan India",
                    icon: "🚀",
                  },
                  {
                    label: "Target Cities",
                    value: "50+",
                    icon: "🏙️",
                  },
                  {
                    label: "Target States",
                    value: "15+",
                    icon: "🗺️",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 1 + index * 0.1,
                      type: "spring",
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-[#faf8f4] to-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-3xl mb-3">{stat.icon}</div>
                    <p className="text-xs font-[Montserrat] text-gray-500 mb-2">
                      {stat.label}
                    </p>
                    <h3 className="text-xl md:text-2xl font-[Montserrat] font-bold text-gray-900">
                      {stat.value}
                    </h3>
                  </motion.div>
                ))}
              </div>

              {/* Center connecting element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-xl"
                />
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-2xl" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200"
            >
              <p className="text-sm font-[Montserrat] font-semibold text-gray-900">
                🎯 Expansion in Progress
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default OurVision;
