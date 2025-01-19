import { motion } from "framer-motion";
import { HeartCursor } from "@/components/HeartCursor";
import { FloatingHearts } from "@/components/FloatingHearts";
import { ValentineProposal } from "@/components/ValentineProposal";
import { Header } from "@/components/Header";
import { Timeline } from "@/components/Timeline";
import { LoveQuotes } from "@/components/LoveQuotes";
import { InteractiveHeart } from "@/components/InteractiveHeart";
import { Footer } from "@/components/Footer";
import { DailyLove } from "@/components/DailyLove";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-romantic-light to-romantic">
      <HeartCursor />
      <FloatingHearts />
      
      <div className="fixed top-4 left-4 z-50">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/30 backdrop-blur-md rounded-2xl p-4 shadow-xl"
        >
          <DailyLove showOnlyTimer={true} />
        </motion.div>
      </div>
      
      <main className="container mx-auto px-4 relative z-10">
        <Header />
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16 relative"
        >
          <Timeline />
          <LoveQuotes />
          <ValentineProposal />
          <div className="py-16">
            <DailyLove showOnlyTimer={false} />
          </div>
          <InteractiveHeart />
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;