import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface DestinationCardProps {
  title: string;
  era: string;
  year: string;
  description: string;
  image: string;
  index: number;
}

const DestinationCard = ({ title, era, year, description, image, index }: DestinationCardProps) => {
  return (
    <motion.div
      className="group relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
      </div>

      {/* Gold Border Glow on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-500 z-10"
        whileHover={{ boxShadow: "0 0 40px hsla(42, 78%, 55%, 0.3)" }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-end">
        {/* Era Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 w-fit mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
        >
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-medium">{era}</span>
        </motion.div>

        {/* Title */}
        <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2 group-hover:text-gold-gradient transition-all duration-300">
          {title}
        </h3>

        {/* Year */}
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">{year}</span>
        </div>

        {/* Description - Visible on hover */}
        <motion.p
          className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="inline-flex items-center gap-2 text-primary font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100"
          whileHover={{ x: 5 }}
        >
          <span>Explore Voyage</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
