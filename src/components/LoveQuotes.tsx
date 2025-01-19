import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const quotes = [
  "You're the rest of my heart.",
  "You're the Catwoman to my Batman.",
  "I love you more than any corgi.",
  "Sorry Bibbly.",
  "I zinged with you.",
];

export const LoveQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-romantic/10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-romantic-dark text-center mb-12">
          Love Notes
        </h2>
        <div className="h-32 relative">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-2xl md:text-3xl text-romantic-dark text-center italic absolute w-full"
            >
              {quotes[currentQuote]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};