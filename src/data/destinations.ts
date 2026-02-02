import parisBg from "@/assets/paris-1889.jpg";
import cretaceousBg from "@/assets/cretaceous.jpg";
import florenceBg from "@/assets/florence-1504.jpg";

export interface Destination {
  id: string;
  slug: string;
  title: string;
  era: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  price: string;
  duration: string;
  highlights: string[];
  activities: string[];
}

export const destinations: Destination[] = [
  {
    id: "paris-1889",
    slug: "paris-1889",
    title: "Paris",
    era: "Belle Époque",
    year: "1889",
    shortDescription: "Witness the birth of the Eiffel Tower during the World Exposition. Stroll through gas-lit boulevards and dine in the cafés of Montmartre.",
    fullDescription: "Step into the glittering streets of Paris during its most legendary era. The year is 1889, and the city is alive with the excitement of the Universal Exhibition. Witness Gustave Eiffel's iron masterpiece pierce the sky for the very first time—a moment that would forever change the Parisian skyline. Wander through the gas-lit boulevards of Haussmann's newly transformed city, where artists, writers, and dreamers gather in the legendary cafés of Montmartre. Experience the birth of modern entertainment at the Moulin Rouge, savor exquisite cuisine in the grand restaurants of the era, and witness the cultural renaissance that would define European elegance for generations.",
    image: parisBg,
    price: "From €15,000",
    duration: "5-7 days",
    highlights: [
      "Witness the inaugural opening of the Eiffel Tower",
      "Attend the Universal Exhibition of 1889",
      "Dine at authentic Belle Époque restaurants",
      "Explore the artistic quarter of Montmartre",
      "Experience the premiere of the Moulin Rouge"
    ],
    activities: [
      "Private tour of the Eiffel Tower construction site",
      "Champagne dinner at Maxim's",
      "Artist's studio visit in Montmartre",
      "Horse-drawn carriage ride through the Champs-Élysées",
      "Exclusive access to the World Fair pavilions"
    ]
  },
  {
    id: "cretaceous",
    slug: "cretaceous",
    title: "Cretaceous",
    era: "Prehistoric Era",
    year: "-65 Million Years",
    shortDescription: "Walk among the giants. Our secure temporal dome lets you observe majestic dinosaurs in their natural habitat, moments before the asteroid.",
    fullDescription: "Embark on humanity's most extraordinary adventure—a journey 65 million years into the past, to the final days of the dinosaurs' reign. Our state-of-the-art temporal dome technology creates a secure observation environment, allowing you to witness the majesty of Tyrannosaurus Rex, the elegance of Pteranodons soaring overhead, and the thundering herds of Triceratops—all from complete safety. Feel the earth shake beneath the footsteps of titans. Breathe air from a world untouched by humanity. This is not merely observation; this is communion with Earth's most magnificent era. Our expert paleontologists guide every moment, ensuring an experience that is both thrilling and scientifically enriching.",
    image: cretaceousBg,
    price: "From €45,000",
    duration: "3-5 days",
    highlights: [
      "Observe T-Rex in its natural habitat",
      "Witness Pteranodons in flight",
      "Experience prehistoric flora and fauna",
      "State-of-the-art temporal dome protection",
      "Expert paleontologist accompaniment"
    ],
    activities: [
      "Dinosaur tracking expedition with safety dome",
      "Prehistoric sunrise observation",
      "Flora and fauna documentation session",
      "Night vision dinosaur watching",
      "Specimen photography workshop"
    ]
  },
  {
    id: "florence-1504",
    slug: "florence-1504",
    title: "Florence",
    era: "High Renaissance",
    year: "1504",
    shortDescription: "Meet Leonardo da Vinci and Michelangelo. Witness the unveiling of David and explore the workshops of history's greatest artists.",
    fullDescription: "Enter the golden age of human creativity in Florence, 1504—a moment when genius walked the cobblestone streets. Witness the unveiling of Michelangelo's David, a sculpture that would define artistic perfection for all time. Visit the workshops where Leonardo da Vinci sketches his impossible machines and paints his mysterious portraits. Stroll through the Piazza della Signoria as the Medici family shapes the destiny of art and politics. Our connections with the era's noble houses grant you exclusive access to private collections, intimate dinners with Renaissance masters, and moments that art historians can only dream of. This is more than a journey through time—it is an immersion into the very birth of the modern world.",
    image: florenceBg,
    price: "From €18,000",
    duration: "6-8 days",
    highlights: [
      "Witness the unveiling of Michelangelo's David",
      "Meet Leonardo da Vinci in his workshop",
      "Private audience with the Medici family",
      "Explore authentic Renaissance art studios",
      "Attend exclusive Renaissance banquets"
    ],
    activities: [
      "Private viewing of the David unveiling ceremony",
      "Workshop session with Renaissance masters",
      "Medici Palace exclusive dinner",
      "Art collection tour with period experts",
      "Traditional Florentine cooking experience"
    ]
  }
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find(d => d.slug === slug);
};
