import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <main className="h-screen relative">
      <div className="h-full w-full md:p-8 p-5">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl text-white font-light tracking-wider mb-2 font-[Dancing_Script]"
          >
            Gallery
          </motion.h1>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl md:text-4xl text-white font-[Montserrat]"
          >
            MOMENTS THAT MATTER
          </motion.h2>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="w-full h-[80vh] scroll-smooth scrollbar-hide">
          <div className="grid grid-cols-2 md:grid-cols-5 auto-cols-[minmax(50px,1fr)] md:auto-cols-[minmax(200px,1fr)] gap-3 md:gap-8 auto-rows-[minmax(0,110px)] md:auto-rows-[minmax(0,130px)]">
            {/* Large image */}
            <motion.div
              initial={{ clipPath: "inset(0% 0% 50% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="overflow-hidden row-span-2 rounded-xl [will-change:clip-path]"
            >
              <img
                src="/gallery2.jpg"
                alt="Gallery 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Tall image */}
            <motion.div
              initial={{ clipPath: "inset(0% 0% 50% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="overflow-hidden md:row-span-2 md:col-span-2 rounded-xl [will-change:clip-path]"
            >
              <img
                src="/gallery1.jpg"
                alt="Gallery 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(0% 0% 50% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="overflow-hidden rounded-xl [will-change:clip-path]"
            >
              <img
                src="/gallery3.jpg"
                alt="Gallery 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(0% 0% 50% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="overflow-hidden rounded-xl [will-change:clip-path] md:row-span-2"
            >
              <img
                src="/gallery5.jpg"
                alt="Gallery 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(0% 0% 50% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="overflow-hidden grid-col-2 rounded-xl [will-change:clip-path]"
            >
              <img
                src="/gallery4.jpg"
                alt="Gallery 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(0% 0% 50% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="overflow-hidden grid-col-2 rounded-xl [will-change:clip-path] md:col-span-2"
            >
              <img
                src="/gallery6.JPG"
                alt="Gallery 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(0% 0% 50% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="overflow-hidden grid-col-2 rounded-xl [will-change:clip-path]"
            >
              <img
                src="/kfc.webp"
                alt="Gallery 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ clipPath: "inset(0% 0% 50% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="overflow-hidden grid-col-2 rounded-xl [will-change:clip-path] col-span-2"
            >
              <img
                src="/kfc2.jpg"
                alt="Gallery 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gallery;
