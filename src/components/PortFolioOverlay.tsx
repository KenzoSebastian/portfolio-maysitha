import { motion } from "motion/react";
import { useEffect, useState, type SetStateAction } from "react";
import Masonry, { type ItemMasonry } from "./motion/Masonry";

type PortfolioOverlayProps = {
  setOpened: (value: SetStateAction<boolean>) => void;
};

const heightPattern = [400, 250, 600, 800, 300, 500];
const imagesMap = import.meta.glob("/public/img/gallery/*.{png,jpg,jpeg,JPG}", {
  eager: true,
  query: "?url",
  import: "default",
});

const items: ItemMasonry[] = Object.values(imagesMap).map((url, index) => {
  return {
    id: index + 1,
    img: (url as string).replace("/public", ""),
    height: heightPattern[index % heightPattern.length],
  };
});

export const PortfolioOverlay = ({ setOpened }: PortfolioOverlayProps) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-100 flex justify-center p-4"
      onClick={() => setOpened(false)}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-5xl bg-background rounded-2xl shadow-xl overflow-y-auto overflow-x-hidden px-4 md:px-10"
        onClick={(e) => e.stopPropagation()}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <span onClick={() => setOpened(false)} className="absolute top-4 right-4 cursor-pointer bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center font-inter hover:scale-110 transition-all lg:hidden">X</span>
        <div className="flex flex-col items-center w-full">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", type: "spring", delay: 0.2 }}
            className="header-section-title my-10"
          >
            Gallery
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
            className="h-0.5 rounded-full bg-linear-to-r from-transparent via-primary to-transparent mb-10"
          />

          <div className="w-full pb-20">{ready && <Masonry items={items} stagger={0.015} />}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};
