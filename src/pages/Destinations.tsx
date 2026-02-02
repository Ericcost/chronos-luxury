import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { destinations } from "@/data/destinations";

const Destinations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Destinations
          </motion.span>
          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Choose Your <span className="text-gold-gradient">Era</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Each journey is meticulously crafted to immerse you in history's most iconic moments.
          </motion.p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Link to={`/destinations/${destination.slug}`} key={destination.id}>
                <motion.div
                  className="group relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={destination.image}
                      alt={destination.title}
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
                    <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 w-fit mb-4">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-primary text-sm font-medium">{destination.era}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2 group-hover:text-gold-gradient transition-all duration-300">
                      {destination.title}
                    </h3>

                    {/* Year */}
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{destination.year}</span>
                    </div>

                    {/* Price */}
                    <p className="text-primary font-semibold mb-4">{destination.price}</p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {destination.shortDescription}
                    </p>

                    {/* CTA Button */}
                    <div className="inline-flex items-center gap-2 text-primary font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <span>Explore Voyage</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Destinations;
