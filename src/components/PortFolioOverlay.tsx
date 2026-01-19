import { motion } from "motion/react";
import type { SetStateAction } from "react";
import Masonry, { type ItemMasonry } from "./motion/Masonry";

type PortfolioOverlayProps = {
  setOpened: (value: SetStateAction<boolean>) => void;
};

const heightPattern = [400, 250, 600, 800, 300, 500];
const imagesMap = import.meta.glob("/public/img/gallery/*.{png,jpg,jpeg,JPG}", { eager: true, as: "url" });

const items: ItemMasonry[] = Object.values(imagesMap).map((url, index) => {
  return {
    id: index + 1,
    img: url.replace("/public", ""),
    height: heightPattern[index % heightPattern.length],
  };
});

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
        className="app-container bg-background rounded-lg shadow-xl overflow-y-scroll overflow-x-hiddenpx-3"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", type: "spring", delay: 0.5 }}
          className="header-section-title my-10"
        >
          Gallery
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
          className="h-0.5 rounded-full bg-linear-to-r from-transparent via-primary to-transparent mb-5 md:mb-10"
        />
        <Masonry items={items} stagger={0.2} />
      </motion.div>
    </motion.div>
  );
};
