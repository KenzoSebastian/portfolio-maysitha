import { motion } from "motion/react";
import type { SetStateAction } from "react";

type PdfOverlayProps = {
  selectedPdf: string;
  setSelectedPdf: (value: SetStateAction<string | null>) => void;
};

export const PdfOverlay = ({ selectedPdf, setSelectedPdf }: PdfOverlayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-60 flex justify-center items-center p-4"
      onClick={() => setSelectedPdf(null)}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-125 sm:w-150 md:w-175 lg:w-200 max-w-4xl h-77 sm:h-105 md:h-122 lg:h-140 bg-transparent rounded-lg shadow-xl overflow-hidden flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-full overflow-hidden relative">
          <iframe
            src={`${selectedPdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            className="absolute top-0 left-[-2%] w-[104%] h-[104%] border-none"
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
