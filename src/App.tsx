import DotGrid from "./components/motion/DotGrid";
import { AboutSection } from "./sections/About";
import { HeroSection } from "./sections/Hero";
import { Navbar } from "../components/Navbar";
import { useTheme } from "../components/ThemeProvider";
import { CertificateSection } from "./sections/Certificate.";
import { RecentWorksSection } from "./sections/Recent-Works";
import { RunwayHistorySection } from "./sections/Runway-History";
import { BlogSection } from "./sections/Blog";
import { ContactSection } from "./sections/Contact";
import { FooterSection } from "./sections/Footer";

function App() {
  const { theme } = useTheme();

  const getCssVar = (varName: string) => {
    const computedStyle = getComputedStyle(document.documentElement);
    return computedStyle.getPropertyValue(varName).trim();
  };

  theme === "dark"
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");

  return (
    <div className="w-full flex flex-col items-center relative">
      <DotGrid
        dotSize={4}
        gap={15}
        baseColor={getCssVar("--color-muted")}
        proximity={0}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
      <div className="app-container">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <RecentWorksSection />
        <RunwayHistorySection />
        <CertificateSection />
        <BlogSection />
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
