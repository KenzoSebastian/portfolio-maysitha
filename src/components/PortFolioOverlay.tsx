import { motion } from "motion/react";
import type { SetStateAction } from "react";

type PortfolioOverlayProps = {
  setOpened: (value: SetStateAction<boolean>) => void;
};

export const PortfolioOverlay = ({ setOpened }: PortfolioOverlayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-60 flex justify-center p-4"
      onClick={() => setOpened(false)}  
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="app-container bg-yellow-400 rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        ini galleryItems
      </motion.div>
    </motion.div>
  );
};
