import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import complimentsData from "../data/compliments.json";

interface DailyLoveProps {
  showOnlyTimer: boolean;
}

export const DailyLove = ({ showOnlyTimer }: DailyLoveProps) => {
  const [compliment, setCompliment] = useState("");
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Get today's compliment based on days until Valentine's
    const getComplimentForToday = () => {
      const today = new Date();
      const currentYear = today.getFullYear();
      const valentinesDay = new Date(currentYear, 1, 14); // Month is 0-based
      
      // If Valentine's Day has passed this year, look at next year
      if (today > valentinesDay) {
        valentinesDay.setFullYear(currentYear + 1);
      }
      
      const daysUntil = Math.floor((valentinesDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      const complimentIndex = daysUntil % complimentsData.compliments.length;
      return complimentsData.compliments[complimentIndex];
    };

    // Update compliment
    setCompliment(getComplimentForToday());

    // Update countdown
    const updateCountdown = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let valentinesDay = new Date(currentYear, 1, 14);
      
      if (now > valentinesDay) {
        valentinesDay = new Date(currentYear + 1, 1, 14);
      }
      
      const difference = valentinesDay.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    // Update countdown every second
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  if (showOnlyTimer) {
    return (
      <div className="text-lg md:text-xl font-bold text-romantic-dark font-mono">
        {timeLeft}
      </div>
    );
  }

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-light/50 via-romantic/30 to-romantic-dark/20 backdrop-blur-sm" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-romantic/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-romantic-dark text-center mb-8 font-playfair">
              Daily Love Note
            </h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={compliment}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-2xl"
                  >
                    ❤️
                  </motion.div>
                </div>
                
                <p className="text-xl md:text-2xl text-romantic-dark/90 text-center italic font-playfair leading-relaxed">
                  "{compliment}"
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};