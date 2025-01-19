import { motion } from "framer-motion";
import { useState } from "react";

export const InteractiveHeart = () => {
  const [isBeating, setIsBeating] = useState(false);

  return (
    <section className="py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-romantic-dark text-center mb-12">
        My Heart Beats for You
      </h2>
      <motion.div
        className="w-32 h-32 mx-auto cursor-pointer"
        animate={{
          scale: isBeating ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 0.5,
          repeat: isBeating ? Infinity : 0,
        }}
        onClick={() => setIsBeating(!isBeating)}
      >
        <svg
          viewBox="0 0 32 32"
          className="w-full h-full fill-romantic-dark hover:fill-romantic transition-colors"
        >
          <path d="M16,28.261c0,0-14-7.926-14-17.046c0-8.565,9.333-11.48,14-4.05c4.667-7.43,14-4.515,14,4.05
            C30,20.335,16,28.261,16,28.261z" />
        </svg>
      </motion.div>
      <p className="text-center mt-4 text-romantic-dark/80">
        {isBeating ? "Beating... women... with a stick because I'm all yours" : "Click the heart!"}
      </p>
    </section>
  );
};