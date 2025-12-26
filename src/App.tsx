import DotGrid from "./components/motion/DotGrid";
import { AboutSection } from "./sections/About";
import { HeroSection } from "./sections/Hero";
import { Navbar } from "../components/Navbar";
import { useTheme } from "../components/ThemeProvider";
import { RecentWorks } from "./sections/Project";

function App() {
  const { theme } = useTheme();

  const getCssVar = (varName: string) => {
    const computedStyle = getComputedStyle(document.documentElement);
    return computedStyle.getPropertyValue(varName).trim();
  };

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div className="w-full min-h-screen h-2500 flex flex-col items-center relative">
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
      <div className="w-11/12 md:w-5/6 lg:max-w-7xl flex flex-col items-center relative">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <RecentWorks />
      </div>
    </div>
  );
}

export default App;
