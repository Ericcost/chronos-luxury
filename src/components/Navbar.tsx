import { motion } from "framer-motion";
import { Clock, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (link: string) => {
    setMobileMenuOpen(false);
    if (link === "Destinations") {
      navigate("/destinations");
    } else if (link === "Contact") {
      // Scroll to footer
      document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // For Experience and About, scroll to destinations section on home page
      const element = document.getElementById("destinations");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/#destinations");
      }
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-background/80 backdrop-blur-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              TimeTravel<span className="text-primary">Agency</span>
            </span>
          </motion.div>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {["Destinations", "Experience", "About", "Contact"].map((link) => (
            <motion.button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
              whileHover={{ y: -2 }}
            >
              {link}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* CTA Button - Desktop */}
        <Link to="/booking" className="hidden md:block">
          <motion.button
            className="btn-premium px-6 py-2.5 rounded-lg text-primary-foreground text-sm font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Now
          </motion.button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border/50 py-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col gap-4 px-4">
            {["Destinations", "Experience", "About", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide text-left"
              >
                {link}
              </button>
            ))}
            <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
              <button className="btn-premium w-full px-6 py-2.5 rounded-lg text-primary-foreground text-sm font-medium mt-2">
                Book Now
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
