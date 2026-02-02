import { motion } from "framer-motion";
import DestinationCard from "./DestinationCard";
import parisBg from "@/assets/paris-1889.jpg";
import cretaceousBg from "@/assets/cretaceous.jpg";
import florenceBg from "@/assets/florence-1504.jpg";

const destinations = [
  {
    title: "Paris",
    era: "Belle Époque",
    year: "1889",
    description: "Witness the birth of the Eiffel Tower during the World Exposition. Stroll through gas-lit boulevards and dine in the cafés of Montmartre.",
    image: parisBg,
  },
  {
    title: "Cretaceous",
    era: "Prehistoric Era",
    year: "-65 Million Years",
    description: "Walk among the giants. Our secure temporal dome lets you observe majestic dinosaurs in their natural habitat, moments before the asteroid.",
    image: cretaceousBg,
  },
  {
    title: "Florence",
    era: "High Renaissance",
    year: "1504",
    description: "Meet Leonardo da Vinci and Michelangelo. Witness the unveiling of David and explore the workshops of history's greatest artists.",
    image: florenceBg,
  },
];

const DestinationsSection = () => {
  return (
    <section className="py-24 md:py-32 px-4 relative">
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
            <DestinationCard
              key={destination.title}
              {...destination}
              index={index}
            />
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
          <button className="btn-outline-gold px-8 py-4 rounded-lg font-medium text-lg">
            View All Destinations
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
