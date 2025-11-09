import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Directors = () => {
  const [currentDirector, setCurrentDirector] = useState(0);

  // Directors data
  const directors = [
    {
      id: 1,
      name: "Veena Kumari",
      position: "Managing Director",
      image: "/Director.jpg",
      description:
        "With tons of experience in the food and beverage industry, Veena leads Kuber Treats with a vision to create exceptional dining experiences across India. Her strategic leadership has driven the company's expansion into multiple franchise partnerships.",
    },
    {
      id: 2,
      name: "Gautam Verma",
      position: "Director of Operations",
      image: "/Director2.jpg",
      description:
        "Gautam brings extensive expertise in operational excellence and franchise management. Her innovative approach to quality control and customer satisfaction has been instrumental in maintaining the high standards across all our brands.",
    },
  ];

  const handlePrevious = () => {
    setCurrentDirector((prev) =>
      prev === 0 ? directors.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentDirector((prev) =>
      prev === directors.length - 1 ? 0 : prev + 1
    );
  };

  const director = directors[currentDirector];

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      handleNext();
    } else {
      handlePrevious();
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f1e8] w-full relative py-8 px-4 md:px-8 flex flex-col justify-center">
      {/* Header */}
      <div className="text-center mb-8">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-[Dancing_Script] mb-4"
        >
          Our Leadership
        </motion.h1>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl font-[Montserrat] font-bold"
        >
          MEET OUR TEAM
        </motion.h2>
      </div>

      {/* Director Display with Navigation */}
      <div className="max-w-7xl mx-auto w-full relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentDirector}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="flex flex-col md:flex-row sm:mt-10 gap-8 md:gap-12 items-center"
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <div className="relative overflow-hidden rounded-2xl h-[200px] sm:h-[360px] shadow-2xl max-w-md mx-auto">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-[Montserrat] font-bold mb-2">
                  {director.name}
                </h3>
                <p className="text-lg md:text-xl font-[Dancing_Script] text-gray-600 mb-4">
                  {director.position}
                </p>
              </div>

              <p className="text-base md:text-md w-full md:w-[80%] font-[Montserrat] text-gray-700 leading-relaxed">
                {director.description}
              </p>

              {/* Counter */}
              <div className="flex items-center gap-2 text-sm font-[Montserrat] text-gray-600">
                <span className="font-semibold text-lg">
                  {currentDirector + 1}
                </span>
                <span>/</span>
                <span>{directors.length}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left Arrow */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className="hidden md:flex absolute left-12 top-1/2 -translate-y-1/2 -translate-x-16 w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl items-center justify-center transition-all duration-300 hover:bg-gray-50 z-10"
          aria-label="Previous Director"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-gray-800 stroke-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 translate-x-16 w-14 h-14 rounded-full bg-white shadow-lg hover:shadow-xl items-center justify-center transition-all duration-300 hover:bg-gray-50 z-10"
          aria-label="Next Director"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 stroke-gray-800 stroke-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.button>

        {/* Mobile Navigation Arrows */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center"
            aria-label="Previous Director"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 stroke-gray-800 stroke-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center"
            aria-label="Next Director"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 stroke-gray-800 stroke-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </motion.button>
        </div>
      </div>
    </main>
  );
};

export default Directors;
