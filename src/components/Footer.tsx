import { motion } from "framer-motion";
import { Clock, Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative py-16 px-4 border-t border-border/30">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-light/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">
                TimeTravel<span className="text-primary">Agency</span>
              </span>
            </motion.div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-6">
              Pioneering luxury temporal tourism since 2089. Every journey is meticulously 
              crafted to deliver an unparalleled experience through history's most 
              extraordinary moments.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              Destinations
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/destinations/paris-1889" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  Paris 1889
                </Link>
              </li>
              <li>
                <Link to="/destinations/cretaceous" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  Cretaceous Period
                </Link>
              </li>
              <li>
                <Link to="/destinations/florence-1504" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  Florence 1504
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  View All
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/booking" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  Book a Journey
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  Safety Protocol
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} TimeTravel Agency. All rights reserved across all timelines.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            Temporal travel is subject to paradox insurance requirements.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
