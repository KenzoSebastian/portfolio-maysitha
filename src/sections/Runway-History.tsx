import { motion } from "framer-motion";

const runwayData = [
  {
    year: "2024",
    event: "Indonesia Teen Fashion Week (ITFW)",
    location: "Jakarta, Indonesia",
    role: "Official Runway Model",
  },
  {
    year: "2024",
    event: "Jakarta Fashion Show & Modeling Event",
    location: "Jakarta",
    role: "Catwalk Talent",
  },
  {
    year: "2023",
    event: "Theater Performance: EMOHOME",
    location: "Art Center",
    role: "Cast & Performer",
  },
  {
    year: "2023",
    event: "Brand Ambassador Selection",
    location: "National Voting Event",
    role: "Selected Brand Ambassador",
  },
  {
    year: "2022 - Present",
    event: "Fashion Projects & Commercial Shoots",
    location: "Multiple Locations",
    role: "Content & Portfolio Model",
  },
];

export const RunwayHistory = () => {
  return (
    <section className="section py-20" id="runway-history">
      <div className="flex flex-col items-end w-full">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-lora text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic font-semibold text-end text-foreground"
        >
          Runway History
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-7 max-w-3xl text-right"
        >
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted-foreground leading-relaxed">
            From local stages to international runways, bringing designer visions to life with grace,
            confidence, and professional dedication.
          </p>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="h-1 bg-border rounded-full mt-8"
        />
      </div>

      {/* Rencana tempat untuk List Pengalaman nantinya */}
      <div className="mt-16 w-full max-w-4xl ml-auto relative">
        {/* GARIS TIMELINE DINAMIS */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ originY: 0 }} // Memastikan animasi mulai dari atas ke bawah
          className="absolute right-2.5 rounded-full top-0 bottom-0 w-1 bg-linear-to-b from-primary to-border"
        />

        {runwayData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex justify-end gap-8 mr-2 pb-16 last:pb-0 pr-10"
          >
            {/* Detail Teks */}
            <div className="text-right">
              <h3 className="font-lora text-xl md:text-2xl italic font-medium text-foreground leading-tight">
                {item.event}
              </h3>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-primary font-bold mt-1.5">
                {item.role}
              </p>
              <p className="font-sans text-xs text-muted-foreground mt-1 opacity-70">{item.location}</p>
            </div>

            {/* Tahun / Penanda Waktu */}
            <div className="min-w-16 text-right pt-1">
              <span className="font-sans text-sm font-black tracking-tighter opacity-30 italic">
                {item.year}
              </span>
            </div>

            {/* Dot Indikator (Muncul setelah garis lewat) */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: index * 0.2 + 0.3 }}
              className="absolute -right-0.5 top-2.5 w-3 h-3 rounded-full bg-primary border-4 border-background z-10 shadow-[0_0_15px_rgba(var(--primary),0.4)]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
