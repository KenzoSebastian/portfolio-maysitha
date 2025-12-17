import BlurText from "@/components/motion/BlurText";
import GlareHover from "@/components/motion/GlareHover";
import TextType from "@/components/motion/TextType";

export const HeroSection = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center gap-10 pt-10">
      <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}
        className="w-140 h-140 shadow-[5px_5px_10px_1px_rgba(0,0,0,0.4)]"
        borderRadius="1rem"
        borderColor="rgba(255, 255, 255, 0.2)"
      >
        <img src="./img/hero.png" alt="hero" className="object-cover w-full" />
      </GlareHover>

      <div>
        <BlurText text="Maysitha Angelica Sucipto" className="text-7xl font-lora w-150 font-bold" />
        <span className="text-3xl">I am </span>
        <TextType
          text={["Professional Model", "Elegant Muse", "Visionary Talent", "Creative Artist"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="mt-10 text-3xl"
        />
      </div>
    </section>
  );
};
