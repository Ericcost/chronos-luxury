import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DestinationCard from "./DestinationCard";
import { destinations } from "@/data/destinations";

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-24 md:py-32 px-4 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal-light/30 to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Featured Destinations
          </motion.span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Iconic <span className="text-gold-gradient">Moments</span> in Time
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Curated temporal experiences for the discerning traveler. 
            Each journey is crafted with meticulous attention to historical authenticity.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((destination, index) => (
            <Link to={`/destinations/${destination.slug}`} key={destination.id}>
              <DestinationCard
                title={destination.title}
                era={destination.era}
                year={destination.year}
                description={destination.shortDescription}
                image={destination.image}
                index={index}
              />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link to="/destinations">
            <button className="btn-outline-gold px-8 py-4 rounded-lg font-medium text-lg">
              View All Destinations
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
