import { motion } from "framer-motion";
import { HeartCursor } from "@/components/HeartCursor";
import { FloatingHearts } from "@/components/FloatingHearts";
import { ValentineProposal } from "@/components/ValentineProposal";
import { Header } from "@/components/Header";
import { Timeline } from "@/components/Timeline";
import { LoveQuotes } from "@/components/LoveQuotes";
import { InteractiveHeart } from "@/components/InteractiveHeart";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-romantic-light to-romantic">
      <HeartCursor />
      <FloatingHearts />
      
      <main className="container mx-auto px-4">
        <Header />
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 relative z-10"
        >
          <Timeline />
          <LoveQuotes />
          <ValentineProposal />
          <InteractiveHeart />
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;