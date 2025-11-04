import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="bg-white">
      {/* Contact Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[65vh]">
        {/* Left Side - Text */}
        <div className="flex items-center justify-center p-6 lg:p-20">
          <div>
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-serif mb-2 md:mb-6"
              style={{ fontFamily: "serif" }}
            >
              LET'S BEGIN A
            </motion.h1>
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-serif italic mb-4 md:mb-8"
              style={{ fontFamily: "serif" }}
            >
              CONVERSATION
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-gray-600 text-sm leading-relaxed max-w-md font-[montserrat]"
            >
              Tell us more about your space, your ideas,
              <br />
              and your aspirations. We'll guide you through
              <br />
              the next steps with care and intention.
            </motion.p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex items-center justify-center p-6 md:p-12 lg:p-20 bg-gray-50">
          <motion.form
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: false }}
            onSubmit={handleSubmit}
            className="w-full max-w-lg"
          >
            {/* Name Input */}
            <div className="mb-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-0 py-3 border-0 border-b border-gray-300 bg-transparent focus:border-black focus:outline-none transition-colors text-sm"
              />
            </div>

            {/* Phone and Email Row */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="px-0 py-1 md:py-3 border-0 border-b border-gray-300 bg-transparent focus:border-black focus:outline-none transition-colors text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="px-0 py-1 md:py-3 border-0 border-b border-gray-300 bg-transparent focus:border-black focus:outline-none transition-colors text-sm"
              />
            </div>

            {/* Message Textarea */}
            <div className="mb-8">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-0 py-1 md:py-3 border-0 border-b border-gray-300 bg-transparent focus:border-black focus:outline-none transition-colors resize-none text-sm"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group flex items-center gap-3 text-sm tracking-widest font-medium hover:gap-5 transition-all duration-300"
            >
              SEND REQUEST
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
            </button>
          </motion.form>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#f5f1e8] py-12 relative overflow-hidden">
        {/* Scrolling Text */}
        <div className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="text-6xl lg:text-8xl font-serif text-[#d4c5b0] opacity-50"
          >
            GET IN TOUCH · GET IN TOUCH · GET IN TOUCH · GET IN TOUCH ·
          </motion.div>
        </div>

        {/* Footer Content */}
        <div className="container mx-auto px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
            {/* Logo */}
            <div>
              <h3 className="font-bold text-lg mb-6">KUBER TREATS</h3>
            </div>

            {/* Menu Column */}
            <div>
              <h4 className="font-medium mb-4">MENU</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    PORTFOLIO
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    SERVICES
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    JOURNAL
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us Column */}
            <div>
              <h4 className="font-medium mb-4">FOLLOW US</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    INSTAGRAM
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    PINTEREST
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    BEHANCE
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">
                    LINKEDIN
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-medium mb-4">CONTACT</h4>
              <p className="text-gray-600 text-xs leading-relaxed mb-3">
                RUA DE SÃO BENTO 542,
                <br />
                LISBON, PORTUGAL
              </p>
              <p className="text-gray-600 text-xs mb-1">
                HELLO@SOLIHAUS.STUDIO
              </p>
              <p className="text-gray-600 text-xs">+351 123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
