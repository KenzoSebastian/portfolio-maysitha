import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { HeaderSection } from "@/components/HeaderSection.";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const runwayData = [
  {
    timeframe: "2026 (Upcoming)",
    event: "Brand Ambassador Mr A",
    location: "Upcoming Project",
    role: "Official Ambassador",
    certificate: "./certificate/BA-MRA-A-2026.pdf",
  },
  {
    timeframe: "Dec 2025",
    event: "Bali Tendance & Annual Show Mr A",
    location: "Bali & Jakarta",
    role: "Runway Model & Best Student IMC Center",
    certificate: "./certificate/annual-show-2025.pdf",
  },
  {
    timeframe: "Oct 2025",
    event: "Paris Fashion Week",
    location: "Paris, France",
    role: "International Runway Model",
    certificate: "./certificate/paris-fashion-week-2025.pdf",
  },
  {
    timeframe: "July 2025",
    event: "Indonesia Trend Fashion Week (ITFW)",
    location: "Jakarta",
    role: "Runway Model",
    certificate: "./certificate/itfw-2025.pdf",
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
    certificate: "./certificate/best-student-IMC-Center-2025.pdf",
  },
];

export const RunwayHistorySection = () => {
  const [activeCertificate, setActiveCertificate] = useState<string | null>(null);

  return (
    <section className="section py-20" id="runway-history">
      <HeaderSection
        title="Runway History"
        subTitle="From professional training at IMC Center to the prestigious stages of Paris Fashion Week and upcoming 2026 Ambassador roles."
        textAlign="right"
      />
      <div className="w-full max-w-5xl ml-auto relative pr-6 md:pr-12">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 4, ease: "easeInOut" }}
          viewport={{ once: true }}
          style={{ originY: 0 }}
          className="absolute right-8 md:right-[56.5px] rounded-full top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary/50 to-transparent"
        />

        {runwayData.map((item, index) => (
          <div className="relative flex justify-end pb-10 sm:pb-15 md:pb-20 last:pb-10 pr-15 sm:pr-18">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-right group mr-12 md:mr-40"
            >
              <div className="flex gap-2 md:gap-3 lg:gap-4 justify-end items-center mb-3">
                {item.certificate && (
                  <div>
                    <span
                      className="px-3 py-1 rounded-full border border-primary/50 text-xs uppercase tracking-widest transition-colors hover:bg-secondary text-foreground items-center gap-2 cursor-pointer hidden lg:flex whitespace-nowrap"
                      onClick={() => setActiveCertificate(item.certificate)}
                    >
                      <ExternalLink className="w-5" /> view certificate
                    </span>
                    <Tooltip>
                      <TooltipTrigger className="lg:hidden">
                        <span
                          className="rounded-full w-6 h-6 sm:w-7 sm:h-7 border border-primary/50 transition-colors hover:bg-secondary text-foreground items-center justify-center cursor-pointer flex"
                          onClick={() => setActiveCertificate(item.certificate)}
                        >
                          <ExternalLink className="w-3 sm:w-4" />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <span>View Certificate</span>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                )}
                {activeCertificate && (
                  <div
                    className="fixed inset-0 bg-black/10 backdrop-blur-md z-200 flex justify-center items-center p-4 md:p-10"
                    onClick={() => setActiveCertificate(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      /* Menggunakan w-full dan aspect ratio agar sama dengan section certificate */
                      className="relative w-full max-w-5xl aspect-3/2 bg-zinc-900 rounded-lg shadow-2xl overflow-hidden flex justify-center items-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Tombol Close identik */}
                      <button
                        className="absolute top-4 right-4 z-210 bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded-full transition-all flex items-center justify-center"
                        onClick={() => setActiveCertificate(null)}
                      >
                        ✕
                      </button>

                      {/* Container PDF dengan Masking Scrollbar */}
                      <div className="w-full h-full flex justify-center items-center overflow-hidden">
                        <iframe
                          src={`${activeCertificate}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                          className="w-[102%] h-[102%] border-none"
                          style={{
                            msOverflowStyle: "none",
                            scrollbarWidth: "none",
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                )}
                <span className="px-1 md:px-3 py-1 inline-block rounded-full border border-primary/50 text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest text-primary transition-colors group-hover:bg-primary whitespace-nowrap group-hover:text-white">
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

            <div className="max-w-20 md:max-w-none text-end absolute right-7 md:right-10 top-3">
              <span className="font-sans text-xs sm:text-sm md:text-base font-black tracking-tighter text-foreground/50 italic">
                {item.timeframe}
              </span>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
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
