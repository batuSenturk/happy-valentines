import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-8 text-center text-romantic-dark/60"
    >
      <p>Made with ❤️ just for you</p>
    </motion.footer>
  );
};