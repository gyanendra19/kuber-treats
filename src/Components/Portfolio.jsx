import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ArrowButtons from "../utilities/Arrows";

const Portfolio = () => {
  const [portfolioNumber, setPortfolioNumber] = useState(0);

  // Portfolio data array
  const portfolios = [
    {
      id: 0,
      date: "03/2025",
      title: "PUCHKAMAN",
      description:
        "Puchkaman is a growing franchise business bringing the authentic taste of street-style snacks to communities everywhere. Our unique flavors, quality ingredients, and vibrant experience make every bite memorable.",
      mainImage: "/gallery3.jpg",
      secondaryImage: "/puchkaman.jpg",
      caption: "Great Taste as Always",
      font: "Montserrat",
    },
    {
      id: 1,
      date: "02/2025",
      title: "CAFE DELIGHT",
      description:
        "Cafe Delight brings premium coffee experiences to your neighborhood. With expertly crafted beverages and a cozy atmosphere, we create moments that matter for coffee lovers everywhere.",
      mainImage: "/kfc2.jpg",
      secondaryImage: "/aboutus1.jpg",
      caption: "Coffee Excellence",
      font: "Lora",
    },
    {
      id: 2,
      date: "01/2025",
      title: "FOOD HUB",
      description:
        "Food Hub revolutionizes the dining experience with diverse cuisines and innovative concepts. Our franchise model empowers entrepreneurs to succeed in the thriving food industry.",
      mainImage: "/landing.jpg",
      secondaryImage: "/puchkaman.jpg",
      caption: "Culinary Innovation",
      font: "Montserrat",
    },
  ];

  const currentPortfolio = portfolios[portfolioNumber];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const slideVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="h-screen z-[100] bg-[#f5f1e8] w-full relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={portfolioNumber}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative pt-6 md:pt-2 px-4 md:px-0 h-full"
        >
          {/* Header Section */}
          <motion.h1
            variants={textVariants}
            className="w-fit mx-auto font-light tracking-wider text-xl sm:text-2xl md:text-3xl mt-4 md:mt-8 font-[Dancing_Script]"
          >
            Portfolio
          </motion.h1>
          <motion.h1
            variants={textVariants}
            className="text-2xl sm:text-4xl md:text-5xl mt-3 md:mt-5 font-[Montserrat] w-fit mx-auto text-center px-4"
          >
            BUSINESS THAT LASTS
          </motion.h1>

          {/* Content Layout */}
          <div className="relative mt-6 md:mt-14">
            {/* Main Image - Left */}
            <motion.img
              variants={slideVariants}
              className="mx-auto sm:ml-6 md:ml-20 w-[75%] sm:w-[60%] md:w-[35%] h-auto max-h-[35vh] sm:max-h-[40vh] md:max-h-[50vh] object-cover rounded-md shadow-lg"
              src={currentPortfolio.mainImage}
              initial={{ clipPath: "inset(0 0 50% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
              viewport={{ once: false, amount: 0.5 }}
            />

            {/* Text Content - Right on Desktop, Below on Mobile */}
            <motion.div
              variants={textVariants}
              className="mt-4 ml-6 sm:ml-2 md:absolute md:top-0 md:left-[43%] md:mt-0"
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-sm md:text-base text-gray-600"
              >
                {currentPortfolio.date}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`font-[${currentPortfolio.font}] text-xl sm:text-3xl md:text-4xl mt-2 md:mt-16 font-bold`}
              >
                {currentPortfolio.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className={`w-full sm:w-[90%] md:w-[350px] font-[${currentPortfolio.font}] text-md md:text-base mt-2 md:mt-6 pr-4 md:pr-0 leading-relaxed`}
              >
                {currentPortfolio.description}
              </motion.p>
            </motion.div>
          </div>

          {/* Secondary Image - Bottom Right on Desktop, Below on Mobile */}
          <motion.img
            variants={slideVariants}
            className="mt-6 hidden md:block ml-4 sm:ml-6 md:mt-10 md:absolute md:top-[30%] md:right-[5%] w-[70%] sm:w-[50%] md:w-auto h-auto max-h-[25vh] md:max-h-[30vh] object-cover rounded-md shadow-lg"
            src={currentPortfolio.secondaryImage}
            initial={{ clipPath: "inset(0 0 50% 0)" }}
            whileInView={{ clipPath: "inset(0 0 0 0)" }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
            viewport={{ once: false, amount: 0.5 }}
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="font-[Lora] hidden md:block text-sm md:text-base ml-4 sm:ml-6 mt-2 md:absolute md:bottom-[25%] md:right-[7%] md:ml-0 italic text-gray-700"
          >
            {currentPortfolio.caption}
          </motion.p>

          {/* Arrow Navigation with Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute right-10 md:right-12 bottom-10 md:bottom-8 flex items-center gap-4"
          >
            <span className="text-sm font-medium text-gray-600">
              {portfolioNumber + 1} / {portfolios.length}
            </span>
            <ArrowButtons
              portfolioNumber={portfolioNumber}
              setPortfolioNumber={setPortfolioNumber}
              maxCount={portfolios.length}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Portfolio;
