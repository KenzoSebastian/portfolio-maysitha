import { HeaderSection } from "@/components/HeaderSection.";
import { PdfOverlay } from "@/components/PdfOverlay";
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

  return (
    <section className="section" id="certificates">
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

      {selectedPdf && (
        <PdfOverlay selectedPdf={selectedPdf} setSelectedPdf={setSelectedPdf} />
      )}
    </section>
  );
};
