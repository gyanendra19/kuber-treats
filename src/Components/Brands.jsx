import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Brands = () => {
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Brand logos data
  const loopBrands = [
    {
      id: 1,
      name: "KFC",
      logo: "/kfclogo.png",
      category: "Quick Service Restaurant",
      description: "World's second-largest restaurant chain",
    },
    {
      id: 2,
      name: "Subway",
      logo: "/subway.png",
      category: "Fast Food",
      description: "Fresh and healthy sandwich specialists",
    },
    {
      id: 3,
      name: "Domino's Pizza",
      logo: "/dominos.png",
      category: "Pizza Chain",
      description: "Leading pizza delivery company",
    },
    {
      id: 4,
      name: "Tea Junction",
      logo: "/tjlogo.png",
      category: "Beverage",
      description: "Premium tea and snacks franchise",
    },
    {
      id: 5,
      name: "Puchkaman",
      logo: "/puchkalogo.jpg",
      category: "Street Food",
      description: "Authentic street-style snacks",
    },
    {
      id: 6,
      name: "Baskin Robbins",
      logo: "/baskin.png",
      category: "Coffee Shop",
      description: "Global coffee house chain",
    },
    {
      id: 7,
      name: "Burger King",
      logo: "/bking.png",
      category: "Fast Food",
      description: "World's largest restaurant chain",
    },
    {
      id: 8,
      name: "Keventers",
      logo: "/keventers.jpg",
      category: "Beverage",
      description: "Global Milkshake and Waffle chain",
    },
    {
      id: 9,
      name: "Adidas",
      logo: "/adidas.png",
      category: "Sports",
      description: "Global sports brand chain",
    },
    {
      id: 10,
      name: "Reebok",
      logo: "/reebok.png",
      category: "Sports",
      description: "Global sports brand chain",
    },
    {
      id: 11,
      name: "Nike",
      logo: "/nike.png",
      category: "Sports",
      description: "Global sports brand chain",
    },
    {
      id: 12,
      name: "Crocs",
      logo: "/crocs.jpg",
      category: "Ice Cream",
      description: "American multinational ice cream chain",
    },
    {
      id: 13,
      name: "Sketchers",
      logo: "/sketchers.png",
      category: "Sports",
      description: "Global sports brand chain",
    },
    {
      id: 14,
      name: "Zudio",
      logo: "/zudio.png",
      category: "Cloths",
      description: "TATA Cloth Brand",
    },
    {
      id: 15,
      name: "Kalyan Jewellers",
      logo: "/kalyan.png",
      category: "Jewellery",
      description: "Indian Jewelley Manufacturer",
    },
    {
      id: 16,
      name: "Tanishq",
      logo: "/tansihq.png",
      category: "Jewellery",
      description: "Indian Jewelley Manufacturer",
    },
    {
      id: 17,
      name: "Lord of the Drinks",
      logo: "/lotd.jpg",
      category: "Tea Cafe",
      description: "Indian tea cafe chain",
    },
    {
      id: 18,
      name: "Titan Eye+",
      logo: "/titan.png",
      category: "Eye Wear",
      description: "Indian food delivery service",
    },
    {
      id: 19,
      name: "Red Hot Chilli Peppers",
      logo: "/red-pepper.png",
      category: "Bakery",
      description: "Premium bakery and patisserie chain",
    },
    {
      id: 20,
      name: "Giva",
      logo: "/giva.jpeg",
      category: "Jewellery",
      description: "Jewellery Chain",
    },
  ];

  const seamlessBrands = [...loopBrands, ...loopBrands];

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(loopBrands.map((brand) => brand.category)),
  ];

  const filteredBrands =
    selectedCategory === "All"
      ? seamlessBrands
      : seamlessBrands.filter((brand) => brand.category === selectedCategory);

  // Reset page when category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0);
  };

  return (
    <main className="h-screen w-full relative flex flex-col overflow-hidden">
      <div className="bg-gradient-to-br from-[#f5f1e8] via-[#faf8f4] to-[#f5f1e8]">
        <div className="text-center pt-8 pb-4 px-4">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-[Dancing_Script] mb-4 text-gray-800"
          >
            Our Brand Partners
          </motion.h1>
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-2xl md:text-5xl font-[Montserrat] font-bold mb-4 text-gray-900"
          >
            TRUSTED BRANDS
          </motion.h2>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-sm md:text-lg mb-2 font-[Montserrat] text-gray-600 max-w-3xl mx-auto"
          >
            We proudly partner with industry-leading brands to deliver
            exceptional experiences across India
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex justify-center items-center mt-4 gap-2 md:gap-16 pb-12 px-4"
        >
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold font-[Montserrat] text-[#8b6f47]">
              20+
            </p>
            <p className="text-xs md:text-sm font-[Montserrat] text-gray-600 mt-1">
              Brand Partners
            </p>
          </div>
          <div className="w-px h-12 bg-gray-300"></div>
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold font-[Montserrat] text-[#8b6f47]">
              30+
            </p>
            <p className="text-xs md:text-sm font-[Montserrat] text-gray-600 mt-1">
              Active Locations
            </p>
          </div>
          <div className="w-px h-12 bg-gray-300"></div>
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-bold font-[Montserrat] text-[#8b6f47]">
              5+
            </p>
            <p className="text-xs md:text-sm font-[Montserrat] text-gray-600 mt-1">
              Years Experience
            </p>
          </div>
        </motion.div>
      </div>

      {/* Infinite Scrolling Brand Row */}
      <div className="relative w-full overflow-hidden py-10">
        <motion.div
          className="flex gap-6 md:gap-10 w-[200%]"
          animate={
            selectedCategory === "All" ? { x: ["0%", "-180%"] } : { x: "0%" } // no movement
          }
          transition={
            selectedCategory === "All"
              ? {
                  ease: "linear",
                  duration: 25,
                  repeat: Infinity,
                }
              : { duration: 0 } // no animation
          }
        >
          {filteredBrands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.05 }}
              onHoverStart={() => setHoveredBrand(brand.id)}
              onHoverEnd={() => setHoveredBrand(null)}
              className="relative group flex-shrink-0 w-40 md:w-52"
            >
              {/* Glass Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 h-44 flex flex-col items-center justify-center overflow-hidden">
                <div className="relative w-[90%] h-24 flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-2 text-center font-[Montserrat] font-semibold text-white text-xs md:text-sm line-clamp-1">
                  {brand.name}
                </h3>

                {/* Hover Overlay */}
                {hoveredBrand === brand.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-2xl p-4 flex flex-col justify-center items-center text-white"
                  >
                    <p className="text-xs md:text-sm font-[Dancing_Script] mb-2 text-yellow-400">
                      {brand.category}
                    </p>
                    <p className="text-xs md:text-sm font-[Montserrat] text-center">
                      {brand.description}
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Accent Dot */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Brands;
