import { menuItems } from "@/../components/Navbar";
import { useTheme } from "@/../components/ThemeProvider";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowUp } from "lucide-react";
import { medsos } from "./Hero";

export const FooterSection = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-primary text-background pt-5 pb-5 md:pb-10 w-full flex justify-center mt-15 xxs:mt-22 xs:mt-30 sm:mt-35 md:mt-45 xl:mt-55 2xl:mt-70 3xl:mt-85 relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute -top-10 xxs:-top-17 xs:-top-22 sm:-top-28 md:-top-40 lg:-top-50 xl:-top-60 2xl:-top-80 3xl:-top-100 4xl:-top-120 left-0 right-0 w-full"
      >
        <path
          className="fill-primary"
          fillOpacity="1"
          d="M0,192L80,165.3C160,139,320,85,480,90.7C640,96,800,160,960,176C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="w-11/12 md:w-5/6 lg:max-w-7xl px-5 md:px-10 flex flex-col items-center relative">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full justify-between gap-10 mb-10 md:mb-16">
          {/* BRANDING */}
          <div className="space-y-2 md:space-y-4">
            <h3 className="font-lora text-2xl md:text-3xl lg:text-4xl italic font-bold tracking-tighter">
              M. A. S
            </h3>
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] leading-relaxed">
              Beautiful Model & Talent <br />
              Based in Jakarta, Indonesia.
            </p>
          </div>

          {/* NAVIGATION MENU */}
          <div className="flex flex-col gap-2 md:gap-4">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold mb-2">Navigation</p>
            <nav className="grid grid-cols-2 gap-2">
              {menuItems.map((menu) => (
                <a key={menu.label} href={menu.href} className="text-xs md:text-sm transition-colors w-fit hover:text-primary-foreground hover:underline">
                  {menu.label}
                </a>
              ))}
            </nav>
          </div>

          {/* SOCIAL MEDIA & ACTION */}
          <div className="flex flex-col md:items-end gap-5 md:gap-7">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] font-bold">Connect</p>
            <div className="flex gap-2.5 md:gap-4">
              {medsos.map((item) => (
                <Tooltip key={item.name}>
                  <TooltipTrigger>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={`/logo/${item.name + (theme === "light" ? "-dark" : "")}.png`}
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
            </div>
            <a
              href="#"
              className="flex items-center gap-2 text-xs md:text-sm uppercase tracking-widest hover:text-primary-foreground hover:underline transition-colors group"
            >
              Back to top <ArrowUp className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* COPYRIGHT AREA */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <p className="text-xs lg:text-sm uppercase text-center md:text-left">
            &copy; {currentYear} Maysitha Angelica Sucipto. All rights reserved.
          </p>
          <p className="text-[11px] uppercase">Designed by Kenzo</p>
        </div>
      </div>
    </footer>
  );
};
