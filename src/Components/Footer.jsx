import { motion } from "framer-motion";

const Footer = ({ scrollToSection }) => {
  return (
    <div className="bg-[#f5f1e8] h-[100vh] py-12 relative overflow-hidden">
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
            <img className="h-20" src="KTlogo.png" alt="" />
          </div>

          {/* Menu Column */}
          <div>
            <h4 className="font-medium mb-4">MENU</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <button
                  onClick={() => scrollToSection(1)}
                  href="#"
                  className="hover:text-black transition-colors"
                >
                  BRANDS
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(2)}
                  href="#"
                  className="hover:text-black transition-colors"
                >
                  ABOUT US
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(3)}
                  href="#"
                  className="hover:text-black transition-colors"
                >
                  OUR VISION
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(4)}
                  href="#"
                  className="hover:text-black transition-colors"
                >
                  PORTFOLIO
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(5)}
                  href="#"
                  className="hover:text-black transition-colors"
                >
                  GALLERY
                </button>
              </li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h4 className="font-medium mb-4">FOLLOW US</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/kuber_capital01/"
                  className="hover:text-black transition-colors"
                >
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/people/Kuber-Capital/61561871009629/"
                  className="hover:text-black transition-colors"
                >
                  FACEBOOK
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-medium mb-4">CONTACT</h4>
            <p className="text-gray-600 text-xs leading-relaxed mb-3">
              VEENA KUMARI
              <br />
              SILIGURI, WEST BENGAL
            </p>
            <p className="text-gray-600 text-xs mb-1">kubertreats@gmail.com</p>
            <p className="text-gray-600 text-xs">+91 9476293800</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
