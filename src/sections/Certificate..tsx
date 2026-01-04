import { HeaderSection } from "@/components/HeaderSection.";
import GradualBlur from "@/components/motion/GradualBlur";
import { PdfOverlay } from "@/components/PdfOverlay";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const certificates = [
  {
    id: 1,
    title: "Runway Annual Show Mr A 2025",
    issuer: "MRA Group",
    pdfPath: "./certificate/annual-show-2025.pdf",
    thumbnail: "./certificate/annual-show-2025-thumb.png",
  },
  {
    id: 2,
    title: "Indonesia Trend Fashion Week 2025",
    issuer: "MRA Group",
    pdfPath: "./certificate/itfw-2025.pdf",
    thumbnail: "./certificate/itfw-2025-thumb.png",
  },
  {
    id: 3,
    title: "Paris Fashion Week 2025",
    issuer: "MRA Group",
    pdfPath: "./certificate/paris-fashion-week-2025.pdf",
    thumbnail: "./certificate/paris-fashion-week-2025-thumb.jpeg",
  },
  {
    id: 4,
    title: "Best Student IMC Center 2025",
    issuer: "IMC Center",
    pdfPath: "./certificate/best-student-IMC-Center-2025.pdf",
    thumbnail: "./certificate/best-student-IMC-Center-2025-thumb.png",
  },
  {
    id: 5,
    title: "catwalk 101",
    issuer: "Top model distrik",
    pdfPath: "./certificate/catwalk-101.pdf",
    thumbnail: "./certificate/catwalk-101-thumb.png",
  },
  {
    id: 6,
    title: "Brand Ambassador MRA A 2026",
    issuer: "MRA Group",
    pdfPath: "./certificate/BA-MRA-A-2026.pdf",
    thumbnail: "./certificate/BA-MRA-A-2026-thumb.png",
  },
  {
    id: 7,
    title: "Model Photoshoot Competition",
    issuer: "Dekas Fashion ID",
    pdfPath: "./certificate/model-photoshoot-competition.pdf",
    thumbnail: "./certificate/model-photoshoot-competition-thumb.png",
  },
  {
    id: 8,
    title: "Acting Class Program",
    issuer: "Fase Acting Space",
    pdfPath: "./certificate/acting-class-program.pdf",
    thumbnail: "./certificate/acting-class-program-thumb.png",
  },
  {
    id: 9,
    title: "Modelling Class Batch XXIX",
    issuer: "Kelas Modelling.id",
    pdfPath: "./certificate/modelling-class-batch-XXIX.pdf",
    thumbnail: "./certificate/modelling-class-batch-XXIX-thumb.png",
  },
];

export const CertificateSection = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(true);

  return (
    <section
      className={`section ${collapsed ? "max-h-225 overflow-hidden" : "max-h-auto"}`}
      id="certificates"
    >
      <HeaderSection
        title="Certifications"
        subTitle="A testament to professional training, excellence, and dedication in the modeling and creative industry."
        textAlign="left"
      />
      {/* Grid Sertifikat */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => setSelectedPdf(cert.pdfPath)}
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-muted shadow-sm transition-all group-hover:shadow-xl group-hover:-translate-y-2">
              <img
                src={cert.thumbnail}
                alt={cert.title}
                className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0"
                draggable={false}
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="mt-4">
              <h4 className="font-lora italic text-xl sm:text-lg text-foreground">{cert.title}</h4>
              <span className="text-sm sm:text-xs uppercase tracking-widest text-muted-foreground">
                {cert.issuer}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedPdf && <PdfOverlay selectedPdf={selectedPdf} setSelectedPdf={setSelectedPdf} />}
      {collapsed && (
        <div className="absolute bottom-0 left-0 right-0">
          <GradualBlur position="bottom" strength={3} target="parent" zIndex={1} />
          <Button onClick={() => setCollapsed(false)} className="z-2 w-20 h-6 sm:w-23 sm:h-8 md:w-25 md:h-9 text-[9px] sm:text-[11px] md:text-[13px] flex justify-center items-center absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full opacity-70 hover:opacity-100"><ChevronDown className="w-7 h-7 sm:w-9 sm:h-9 md:w-15 md:h-15" /> view more</Button>
        </div>
      )}
    </section>
  );
};
