import AnimatedContent from "@/components/motion/AnimatedContent";
import BlurText from "@/components/motion/BlurText";
import GlareHover from "@/components/motion/GlareHover";
import TextType from "@/components/motion/TextType";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useTheme } from "../../components/ThemeProvider";

const medsos = [
  {
    name: "instagram",
    link: "https://www.instagram.com/thatgirlmay_angel?igsh=aWIwcWNoeGplNGhh&utm_source=qr",
    toolTip: "@thatgirlmay_angel",
  },
  {
    name: "thread",
    link: "https://www.threads.com/@thatgirlmay_angel?igshid=NTc4MTIwNjQ2YQ==",
    toolTip: "thatgirlmay_angel",
  },
  {
    name: "tiktok",
    link: "https://www.tiktok.com/@angelic.gabutzone?_r=1&_t=ZS-92HrN6xkiF3",
    toolTip: "@angelica.gabutzone",
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/share/17nxBtVpXa/?mibextid=wwXIfr",
    toolTip: "Maysitha Angelica Sucipto",
  },
  {
    name: "whatsapp",
    link: "https://wa.me/6285363121195",
    toolTip: "085363121195",
  },
];

export const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <section className="section min-h-screen flex flex-col lg:flex-row items-center gap-10 lg:pt-0">
      <div className="flex justify-end w-fit rounded-2xl lg:flex-1 px-5 md:px-0">
        <GlareHover className="border-0 shadow-[5px_5px_10px_1px_rgba(0,0,0,0.4)] max-w-160 ">
          <img src="./img/hero.png" alt="hero" draggable={false} className="object-cover w-full no-drag" />
        </GlareHover>
      </div>

      <div className="px-5 md:px-0 overflow-hidden flex-1">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
          className="flex gap-4 mb-5 items-center"
        >
          {medsos.map((item) => (
            <Tooltip key={item.name}>
              <TooltipTrigger>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`/logo/${item.name + (theme === "dark" ? "-dark" : "")}.png`}
                    alt={item.name}
                    draggable={false}
                    className="logo-medsos no-drag"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent side="top">
                <span>{item.toolTip}</span>
              </TooltipContent>
            </Tooltip>
          ))}
        </AnimatedContent>
        <BlurText
          text="Maysitha Angelica Sucipto"
          className="text-center text-4xl md:text-7xl font-lora md:max-w-150 font-bold"
        />
        <span className="text-xl md:text-3xl">I am </span>
        <TextType
          text={["Beautiful Model", "Elegant Muse", "Visionary Talent", "Creative Artist"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="mt-5 md:mt-10 text-xl md:text-3xl"
        />
      </div>
    </section>
  );
};
