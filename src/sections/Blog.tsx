import { ContainerSectionLimit } from "@/components/ContainerSectionLimit";
import { HeaderSection } from "@/components/HeaderSection.";
import { motion } from "motion/react";

const blogs = [
  {
    id: 1,
    title: "Hidayatul Mu’arifin Membawa Keanggunan Indonesia ke Paris City Fashion Week 2025",
    Subtitle:
      "BERITAJURNALIS.NET | Paris, Prancis— Desainer Indonesia ternama, Hidayatul Mu’arifin, yang dikenal secara profesional",
    link: "https://www.beritajurnalis.net/hidayatul-muarifin-membawa-keanggunan-indonesia-ke-paris-city-fashion-week-2025",
    thumbnail: "./blog-thumb/blog1.png",
  },
  {
    id: 2,
    title: "Hidayatul Mu’arifin Membawa Keanggunan Indonesia ke Paris City Fashion Week 2025",
    Subtitle:
      "PUBLICINDONESIA.COM | Paris, Prancis— Desainer Indonesia ternama, Hidayatul Mu’arifin, yang dikenal secara profesional",
    link: "https://publicindonesia.com/hidayatul-muarifin-membawa-keanggunan-indonesia-ke-paris-city-fashion-week-2025/",
    thumbnail: "./blog-thumb/blog2.png",
  },
  {
    id: 3,
    title: "Hidayatul Mu’arifin Membawa Keanggunan Indonesia ke Paris City Fashion Week 2025",
    Subtitle:
      "KICAURAKYAT.ID | Paris, Prancis— Desainer Indonesia ternama, Hidayatul Mu’arifin, yang dikenal secara profesional",
    link: "https://www.kicaurakyat.id/hidayatul-muarifin-membawa-keanggunan-indonesia-ke-paris-city-fashion-week-2025",
    thumbnail: "./blog-thumb/blog3.png",
  },
  {
    id: 4,
    title:
      "Maysitha Angelica Sucipto, Remaja Berprestasi Asal Jakarta yang Terpilih sebagai Brand Ambassador MR A 2026",
    Subtitle:
      "DELIKSATU.COM | Paris, Prancis— Desainer Indonesia ternama, Hidayatul Mu’arifin, yang dikenal secara profesional",
    link: "https://deliksatu.com/maysitha-angelica-sucipto-remaja-berprestasi-asal-jakarta-yang-terpilih-sebagai-brand-ambassador-mr-a-2026/",
    thumbnail: "./blog-thumb/blog4.png",
  },
];

export const BlogSection = () => {
  return (
    <ContainerSectionLimit idSection="blog">
      <HeaderSection
        title="Blog Posts"
        subTitle="Insights, stories, and updates from my journey in the modeling and creative industry."
        textAlign="right"
      />
      {/* Grid blog */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.a
            href={blog.link}
            target="_blank"
            key={blog.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-muted shadow-sm transition-all group-hover:shadow-xl group-hover:-translate-y-2">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-full object-cover transition-all"
                draggable={false}
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="mt-4 truncate">
              <h4 className="font-lora italic text-xl sm:text-lg text-foreground">{blog.title}</h4>
              <span className="text-sm sm:text-xs tracking-widest text-muted-foreground">
                {blog.Subtitle}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </ContainerSectionLimit>
  );
};
