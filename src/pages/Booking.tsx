import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Check, Sparkles } from "lucide-react";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { destinations } from "@/data/destinations";

const preferences = [
  { id: "culture", label: "Culture & Art" },
  { id: "adventure", label: "Adventure & Nature" },
  { id: "architecture", label: "Architecture" },
];

const Booking = () => {
  const [selectedDestination, setSelectedDestination] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [travelers, setTravelers] = useState<string>("");
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePreferenceChange = (prefId: string, checked: boolean) => {
    if (checked) {
      setSelectedPreferences([...selectedPreferences, prefId]);
    } else {
      setSelectedPreferences(selectedPreferences.filter(p => p !== prefId));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const selectedDest = destinations.find(d => d.id === selectedDestination);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Begin Your Journey
          </motion.span>
          <motion.h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Book Your <span className="text-gold-gradient">Time Travel</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Complete the form below to reserve your exclusive temporal voyage.
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-24 px-4">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-8 p-8 rounded-2xl bg-card border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Destination Selector */}
                <div className="space-y-3">
                  <Label className="text-foreground font-medium">Destination</Label>
                  <Select value={selectedDestination} onValueChange={setSelectedDestination}>
                    <SelectTrigger className="w-full h-14 bg-secondary/50 border-border/50 text-foreground">
                      <SelectValue placeholder="Select your destination" />
                    </SelectTrigger>
                    <SelectContent>
                      {destinations.map((dest) => (
                        <SelectItem key={dest.id} value={dest.id}>
                          <div className="flex items-center gap-3">
                            <span className="font-medium">{dest.title}</span>
                            <span className="text-muted-foreground text-sm">{dest.year}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedDest && (
                    <motion.p
                      className="text-sm text-primary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {selectedDest.price} per traveler
                    </motion.p>
                  )}
                </div>

                {/* Date Picker */}
                <div className="space-y-3">
                  <Label className="text-foreground font-medium">Departure Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full h-14 justify-start text-left font-normal bg-secondary/50 border-border/50",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <Calendar className="mr-3 h-5 w-5 text-primary" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Number of Travelers */}
                <div className="space-y-3">
                  <Label className="text-foreground font-medium">Number of Travelers</Label>
                  <Select value={travelers} onValueChange={setTravelers}>
                    <SelectTrigger className="w-full h-14 bg-secondary/50 border-border/50 text-foreground">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <SelectValue placeholder="Select number of travelers" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Traveler" : "Travelers"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Travel Preferences */}
                <div className="space-y-4">
                  <Label className="text-foreground font-medium">Travel Preferences</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {preferences.map((pref) => (
                      <div
                        key={pref.id}
                        className={cn(
                          "flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all",
                          selectedPreferences.includes(pref.id)
                            ? "border-primary bg-primary/10"
                            : "border-border/50 bg-secondary/30 hover:border-primary/50"
                        )}
                        onClick={() => handlePreferenceChange(pref.id, !selectedPreferences.includes(pref.id))}
                      >
                        <Checkbox
                          id={pref.id}
                          checked={selectedPreferences.includes(pref.id)}
                          onCheckedChange={(checked) => handlePreferenceChange(pref.id, checked as boolean)}
                          className="border-primary data-[state=checked]:bg-primary"
                        />
                        <Label htmlFor={pref.id} className="cursor-pointer text-foreground text-sm">
                          {pref.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full btn-premium py-6 text-lg font-medium"
                  disabled={!selectedDestination || !date || !travelers}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Reserve My Journey
                </Button>
              </motion.form>
            ) : (
              <motion.div
                key="confirmation"
                className="p-12 rounded-2xl bg-card border border-primary/30 text-center space-y-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <Check className="w-10 h-10 text-primary" />
                </motion.div>
                
                <motion.h2
                  className="font-serif text-3xl font-semibold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Booking Confirmed!
                </motion.h2>
                
                <motion.div
                  className="space-y-2 text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-lg">
                    Your journey to <span className="text-primary font-semibold">{selectedDest?.title} {selectedDest?.year}</span> has been reserved.
                  </p>
                  <p>Departure: <span className="text-foreground">{date && format(date, "PPP")}</span></p>
                  <p>Travelers: <span className="text-foreground">{travelers}</span></p>
                </motion.div>
                
                <motion.p
                  className="text-sm text-muted-foreground max-w-md mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Our temporal travel specialists will contact you within 24 hours to finalize the details of your exclusive experience.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    variant="outline"
                    className="mt-4 border-primary/50 text-primary hover:bg-primary/10"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Book Another Journey
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Booking;
