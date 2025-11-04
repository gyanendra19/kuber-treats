import { motion } from "framer-motion";

const ArrowButtons = ({ portfolioNumber, setPortfolioNumber, maxCount }) => {
  const handlePrevious = () => {
    if (portfolioNumber > 0) {
      setPortfolioNumber(portfolioNumber - 1);
    }
  };

  const handleNext = () => {
    if (portfolioNumber < maxCount - 1) {
      setPortfolioNumber(portfolioNumber + 1);
    }
  };

  return (
    <div className="flex gap-3">
      {/* Left Arrow */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePrevious}
        disabled={portfolioNumber === 0}
        className={`w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-200 flex items-center justify-center ${
          portfolioNumber === 0
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-gray-50"
        }`}
        aria-label="Previous"
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

      {/* Right Arrow */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNext}
        disabled={portfolioNumber === maxCount - 1}
        className={`w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-md transition-all duration-200 flex items-center justify-center ${
          portfolioNumber === maxCount - 1
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-gray-50"
        }`}
        aria-label="Next"
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
  );
};

export default ArrowButtons;
