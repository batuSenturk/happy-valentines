import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-16 text-center"
    >
      <h1 className="text-6xl md:text-8xl font-bold text-romantic-dark mb-4">
        My Valentine
      </h1>
      <p className="text-xl md:text-2xl text-romantic-dark/80 italic">
        A journey of love and memories
      </p>
    </motion.header>
  );
};