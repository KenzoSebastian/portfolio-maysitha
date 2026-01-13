import CircularGallery from "@/components/motion/CircularGallery";
import { PortfolioOverlay } from "@/components/PortFolioOverlay";
import { motion } from "motion/react";
import { useState } from "react";

const galleryItems = [
  {
    image: `./img/stack1.JPG`,
    text: "events",
  },
  {
    image: `./img/stack2.JPG`,
    text: "events",
  },
  {
    image: `./img/stack3.JPG`,
    text: "events",
  },
  {
    image: `./img/stack4.JPG`,
    text: "events",
  },
  {
    image: `./img/stack5.JPG`,
    text: "events",
  },
];

export const RecentWorksSection = () => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <section className="section" id="recent-works">
      <div className="flex justify-between items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="header-section-title"
          >
            Recent Works
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-2 sm:mt-3 md:mt-4 max-w-2xl text-left"
          >
            <p className="header-section-subtitle">Selected highlights 2024—2025</p>
          </motion.div>
        </div>
        <button
          onClick={() => setOpened(true)}
          className="text-xs uppercase tracking-[0.2em] border-b border-foreground pb-1 hover:opacity-50 transition-opacity cursor-pointer"
        >
          View All
        </button>
      </div>
      {/* Container Slider */}
      <div className="w-full mt-3 hidden md:block">
        <CircularGallery
          bend={1}
          scrollSpeed={3}
          items={galleryItems}
          textColor="var(--foreground)"
          borderRadius={0.05}
          scrollEase={0.04}
        />
      </div>
      <div className="w-full mt-3 md:hidden">
        <CircularGallery
          bend={0}
          scrollSpeed={3}
          items={galleryItems}
          textColor="var(--foreground)"
          borderRadius={0.05}
          scrollEase={0.04}
        />
      </div>
      {opened && <PortfolioOverlay setOpened={setOpened} />}
    </section>
  );
};
