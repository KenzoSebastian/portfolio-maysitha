import { ContainerSectionLimit } from "@/components/ContainerSectionLimit";
import { HeaderSection } from "@/components/HeaderSection.";
import { PdfOverlay } from "@/components/PdfOverlay";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const runwayData = [
  {
    id: 1,
    timeframe: "2026 (Upcoming)",
    event: "Brand Ambassador Mr A",
    location: "Upcoming Project",
    role: "Official Ambassador",
    certificate: "./certificate/BA-MRA-A-2026.pdf",
  },
  {
    id: 2,
    timeframe: "Dec 2025",
    event: "Bali Tendance & Annual Show Mr A",
    location: "Bali & Jakarta",
    role: "Runway Anual Show MR. A",
    certificate: "./certificate/annual-show-2025.pdf",
  },
  {
    id: 3,
    timeframe: "Oct 2025",
    event: "Paris Fashion Week",
    location: "Paris, France",
    role: "International Runway Model",
    certificate: "./certificate/paris-fashion-week-2025.pdf",
  },
  {
    id: 4,
    timeframe: "July 2025",
    event: "Indonesia Trend Fashion Week (ITFW)",
    location: "Jakarta",
    role: "Runway Model",
    certificate: "./certificate/itfw-2025.pdf",
  },
  {
    id: 5,
    timeframe: "June 2025",
    event: "Jakarta HUT MURI Event",
    location: "Jakarta",
    role: "Fashion Show Talent",
  },
  {
    id: 6,
    timeframe: "May 2025",
    event: "Theater: EMOHOME (Acting Space)",
    location: "Graduation Performance",
    role: "Lead Cast / Performer",
  },
  {
    id: 7,
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
    <ContainerSectionLimit idSection="runway">
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
          <div key={item.id} className="relative flex justify-end pb-10 sm:pb-15 md:pb-20 last:pb-10 pr-15 sm:pr-18">
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
                    {/* desktop */}
                    <span
                      className="px-3 py-1 rounded-full border border-primary/50 text-xs uppercase tracking-widest transition-colors hover:bg-secondary text-foreground items-center gap-2 cursor-pointer hidden lg:flex whitespace-nowrap"
                      onClick={() => setActiveCertificate(item.certificate)}
                    >
                      <ExternalLink className="w-5" /> view certificate
                    </span>
                    {/* mobile */}
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
        {activeCertificate && (
          <PdfOverlay selectedPdf={activeCertificate!} setSelectedPdf={setActiveCertificate} />
        )}
      </div>

    </ContainerSectionLimit>
  );
};
