import CircularGallery from "@/components/motion/CircularGallery";
import { motion } from "motion/react";

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

export const RecentWorks = () => {
  return (
    <section className="section" id="recent-works">
      <div className="flex justify-between items-end">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="font-lora text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-semibold"
          >
            Recent Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="opacity-80 mt-2 tracking-widest uppercase text-[8px] sm:text-[10px] md:text-xs"
          >
            Selected highlights 2024—2025
          </motion.p>
        </div>
        <a
          href="#portfolio"
          className="text-xs uppercase tracking-[0.2em] border-b border-foreground pb-1 hover:opacity-50 transition-opacity"
        >
          View All
        </a>
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
    </section>
  );
};
