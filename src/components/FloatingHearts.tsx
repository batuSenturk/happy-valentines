import { motion } from "framer-motion";

const hearts = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  size: Math.random() * 30 + 10,
  left: Math.random() * 100,
  delay: Math.random() * 5,
}));

export const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-romantic opacity-30"
          style={{
            left: `${heart.left}%`,
            width: heart.size,
            height: heart.size,
          }}
          animate={{
            y: [0, -1000],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 10,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};