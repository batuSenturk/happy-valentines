import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useToast } from "@/hooks/use-toast";

export const ValentineProposal = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);
  const { toast } = useToast();

  const handleNoHover = () => {
    setNoButtonPosition({
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    });
  };

  const handleNoClick = () => {
    handleNoHover();
  };

  const handleYes = () => {
    setAccepted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    toast({
      title: "Knew you'd click yes",
      description: "Thank you for being my Valentine once again!",
    });
  };

  return (
    <div className="relative flex flex-col items-center gap-8 p-8 rounded-lg bg-white/50 backdrop-blur-sm">
      <h2 className="text-4xl font-bold text-romantic-dark">
        Will you be my Valentine?
      </h2>
      <div className="flex gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleYes}
          className="px-8 py-4 text-xl font-bold text-white rounded-full bg-romantic-dark hover:bg-romantic transition-colors"
          disabled={accepted}
        >
          Yes!
        </motion.button>
        <motion.button
          animate={noButtonPosition}
          onHoverStart={handleNoHover}
          onClick={handleNoClick}
          className="px-8 py-4 text-xl font-bold text-romantic-dark rounded-full border-2 border-romantic-dark hover:bg-romantic/10 transition-colors"
        >
          No
        </motion.button>
      </div>
    </div>
  );
};