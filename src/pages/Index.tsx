import { motion } from "framer-motion";
import { HeartCursor } from "@/components/HeartCursor";
import { FloatingHearts } from "@/components/FloatingHearts";
import { ValentineProposal } from "@/components/ValentineProposal";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-romantic-light to-romantic">
      <HeartCursor />
      <FloatingHearts />
      
      <main className="container mx-auto px-4">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-screen flex flex-col items-center justify-center gap-12 relative z-10"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-center text-romantic-dark"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Be Mine
          </motion.h1>
          
          <ValentineProposal />
        </motion.section>
      </main>
    </div>
  );
};

export default Index;