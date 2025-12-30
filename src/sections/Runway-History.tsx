import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const runwayData = [
  {
    timeframe: "2026 (Upcoming)",
    event: "Brand Ambassador Mr A",
    location: "Upcoming Project",
    role: "Official Ambassador",
  },
  {
    timeframe: "Dec 2025",
    event: "Bali Tendance & Annual Show Mr A",
    location: "Bali & Jakarta",
    role: "Runway Model & Best Student IMC Center",
  },
  {
    timeframe: "Oct 2025",
    event: "Paris Fashion Week",
    location: "Paris, France",
    role: "International Runway Model",
    certificate: "./certificate/paris-fashion-week-2025.jpeg",
  },
  {
    timeframe: "July 2025",
    event: "Indonesia Trend Fashion Week (ITFW)",
    location: "Jakarta",
    role: "Runway Model",
    certificate: "./certificate/itfw-2025.png",
  },
  {
    timeframe: "June 2025",
    event: "Jakarta HUT MURI Event",
    location: "Jakarta",
    role: "Fashion Show Talent",
  },
  {
    timeframe: "May 2025",
    event: "Theater: EMOHOME (Acting Space)",
    location: "Graduation Performance",
    role: "Lead Cast / Performer",
  },
  {
    timeframe: "2025",
    event: "IMC CENTER School Portfolio",
    location: "Professional Studio",
    role: "Commercial & Content Model",
  },
];

export const RunwayHistory = () => {
  const [activeCertificate, setActiveCertificate] = useState<string | null>(null);

  return (
    <section className="section py-20" id="runway-history">
      <div className="flex flex-col items-end w-full container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-lora text-4xl sm:text-6xl lg:text-8xl italic font-semibold text-end text-foreground leading-none"
        >
          Runway History
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-right"
        >
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-muted-foreground leading-relaxed">
            From professional training at IMC Center to the prestigious stages of Paris Fashion Week and
            upcoming 2026 Ambassador roles.
          </p>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
          className="h-px bg-linear-to-l from-primary to-transparent mt-10"
        />
      </div>

      <div className="mt-20 w-full max-w-5xl ml-auto relative pr-6 md:pr-12">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 4, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="absolute right-8 md:right-[56.5px] rounded-full top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary/50 to-transparent"
        />

        {runwayData.map((item, index) => (
          <div className="relative flex justify-end pb-10 sm:pb-15 md:pb-20 last:pb-10 pr-12">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-right group mr-23 md:mr-40"
            >
              <div className="flex gap-5 justify-end items-center">
                {item.certificate && (
                  <span
                    className="px-3 py-1 rounded-full border border-primary/50 text-[8px] sm:text-[10px] lg:text-xs uppercase tracking-widest mb-3 transition-colors hover:bg-secondary text-foreground flex items-center gap-2 cursor-pointer"
                    onClick={() => setActiveCertificate(item.event)}
                  >
                    <ExternalLink width={20} height={20} /> view certificate
                  </span>
                )}
                {item.certificate && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={activeCertificate === item.event ? { opacity: 1 } : { opacity: 0 }}
                    className={`fixed top-0 bottom-0 right-0 left-0 bg-black/40 flex justify-center items-center z-50 ${
                      activeCertificate === item.event
                        ? "opacity-100 visible"
                        : "opacity-0 invisible pointer-events-none"
                    }
                    }`}
                    onClick={() => setActiveCertificate(null)}
                  >
                    <motion.img
                      initial={{ scale: 0, opacity: 0 }}
                      animate={
                        activeCertificate === item.event
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0.5, opacity: 0 }
                      }
                      src={item.certificate}
                      alt={item.event}
                      draggable={false}
                      className="max-w-[85%] max-h-[85%] object-contain rounded-xl shadow-2xl"
                    />
                  </motion.div>
                )}
                <span className="inline-block px-3 py-1 rounded-full border border-primary/50 text-[8px] sm:text-[10px] lg:text-xs uppercase tracking-widest text-primary mb-3 transition-colors group-hover:bg-primary group-hover:text-white">
                  {item.role}
                </span>
              </div>

              <h3 className="font-lora text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-medium text-foreground leading-tight">
                {item.event}
              </h3>
              <p className="font-sans text-xs md:text-sm text-muted-foreground mt-2 tracking-wide opacity-80 italic">
                {item.location}
              </p>
            </motion.div>

            <div className="max-w-20 md:max-w-none text-end absolute right-10 top-3">
              <span className="font-sans text-xs sm:text-sm md:text-base font-black tracking-tighter text-foreground/50 italic">
                {item.timeframe}
              </span>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: index * 0.15 + 0.1 }}
              className="absolute -right-0.5 top-3 w-6 h-6 rounded-full bg-background flex items-center justify-center z-10"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.8)]" />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
