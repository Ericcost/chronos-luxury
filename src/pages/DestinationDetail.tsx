import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Star, Check, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { getDestinationBySlug } from "@/data/destinations";
import { Button } from "@/components/ui/button";

const DestinationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const destination = slug ? getDestinationBySlug(slug) : undefined;

  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        </div>

        {/* Back Button */}
        <motion.div
          className="absolute top-24 left-4 md:left-8 z-20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/destinations">
            <Button variant="outline" className="gap-2 bg-background/50 backdrop-blur-sm border-primary/30 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4" />
              Back to Destinations
            </Button>
          </Link>
        </motion.div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">{destination.era}</span>
            </motion.div>
            
            <motion.h1
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {destination.title} <span className="text-gold-gradient">{destination.year}</span>
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-6 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>{destination.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{destination.era}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span>Exclusive Experience</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                  About This Journey
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {destination.fullDescription}
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                  Key Highlights
                </h2>
                <ul className="space-y-4">
                  {destination.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Activities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                  Suggested Activities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.activities.map((activity, index) => (
                    <motion.div
                      key={index}
                      className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-foreground">{activity}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <motion.div
                className="sticky top-24 p-6 rounded-2xl bg-card border border-border/50 space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <span className="text-muted-foreground text-sm">Starting from</span>
                  <p className="font-serif text-4xl font-semibold text-gold-gradient">
                    {destination.price}
                  </p>
                  <span className="text-muted-foreground text-sm">per traveler</span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="text-foreground">{destination.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Era</span>
                    <span className="text-foreground">{destination.era}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience Level</span>
                    <span className="text-foreground">All levels</span>
                  </div>
                </div>

                <Link to="/booking" className="block">
                  <Button className="w-full btn-premium py-6 text-lg font-medium">
                    Book Now
                  </Button>
                </Link>

                <p className="text-center text-muted-foreground text-xs">
                  Free cancellation up to 30 days before departure
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default DestinationDetail;
