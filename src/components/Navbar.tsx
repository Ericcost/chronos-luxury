import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <span className="font-serif text-xl font-semibold text-foreground">
            Chronos<span className="text-primary">Voyages</span>
          </span>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Destinations", "Experience", "About", "Contact"].map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
              whileHover={{ y: -2 }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className="btn-premium px-6 py-2.5 rounded-lg text-primary-foreground text-sm font-medium"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Now
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
