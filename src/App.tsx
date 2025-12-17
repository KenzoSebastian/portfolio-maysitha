import { Navbar } from "../components/Navbar";
import { HeroSection } from "./sections/Hero";

function App() {
  return (
    <div className="w-full min-h-screen h-2500 flex flex-col items-center">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
