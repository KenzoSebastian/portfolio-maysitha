import BlurText from "@/components/motion/BlurText";
import GlareHover from "@/components/motion/GlareHover";
import TextType from "@/components/motion/TextType";

export const HeroSection = () => {

  return (
    <section className="w-full h-screen flex flex-col lg:flex-row md:justify-center items-center gap-10 pt-20 md:pt-18">
      <GlareHover className="hidden md:flex justify-center items-center" width="38rem" height="38rem">
        <img
          src="./img/hero.png"
          alt="hero"
          className="object-cover rounded-2xl w-full shadow-[5px_5px_10px_1px_rgba(0,0,0,0.4)]"
        />
      </GlareHover>

      <GlareHover className="md:hidden flex justify-center items-center" width="20rem" height="20rem">
        <img
          src="./img/hero.png"
          alt="hero"
          className="object-cover rounded-2xl w-full shadow-[5px_5px_10px_1px_rgba(0,0,0,0.4)]"
        />
      </GlareHover>

      <div className="px-5 md:px-0">
        <BlurText
          text="Maysitha Angelica Sucipto"
          className="text-center text-4xl md:text-7xl font-lora md:w-150 font-bold"
        />
        <span className="text-xl md:text-3xl">I am </span>
        <TextType
          text={["Professional Model", "Elegant Muse", "Visionary Talent", "Creative Artist"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="mt-5 md:mt-10 text-xl md:text-3xl"
        />
      </div> 
      {/* <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="mt-5 md:mt-10 text-xl md:text-3xl">Switch Theme</button> */}
    </section>
  );
};
