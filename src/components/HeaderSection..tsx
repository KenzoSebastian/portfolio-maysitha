import { motion } from "motion/react";

type HeaderSectionProps = {
  title: string;
  subTitle: string;
  textAlign: "left" | "right";
};

export const HeaderSection = ({ title, subTitle, textAlign }: HeaderSectionProps) => {
  return (
    <div
      className={`flex flex-col ${
        textAlign === "left" ? "items-start" : "items-end"
      } w-full container mx-auto mb-10 sm:mb-15 md:mb-20`}
    >
      <motion.h1
        initial={{ opacity: 0, x: textAlign === "left" ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", type: "spring" }}
        className={`header-section-title ${textAlign === "left" ? "text-start" : "text-end"}`}
      >
        {title}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`mt-4 sm:mt-6 md:mt-8 max-w-2xl ${textAlign === "left" ? "text-left" : "text-right"}`}
      >
        <p className="header-section-subtitle">{subTitle}</p>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
        className={`h-0.5 rounded-full ${
          textAlign === "left" ? "bg-linear-to-r" : "bg-linear-to-l"
        } from-primary to-transparent mt-5 md:mt-10`}
      />
    </div>
  );
};
