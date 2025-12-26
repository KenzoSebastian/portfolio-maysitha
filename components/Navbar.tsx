import { useState } from "react";

import GlassSurface from "@/components/motion/GlassSurface";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Hamburger } from "@/components/Hamburger";
import { ThemeToggle } from "@/components/ThemeToggle";

const menuItems: { label: string; href: string }[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-4">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          backgroundColor: "oklch(from var(--background) l c h / 0.5)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-7xl px-6 items-center">
        <div className="flex-1 flex items-center gap-4">
          <DropdownMenu open={isMenuOpen} onOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
            <DropdownMenuTrigger className="focus:outline-none">
              <Hamburger status={isMenuOpen} setStatus={setIsMenuOpen} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-sidebar font-storyScript border-border">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border" />
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.label} onClick={() => setIsMenuOpen(false)}>
                  <a className="inline-block w-full h-full px-2 py-1.5" href={item.href}>
                    {item.label}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex flex-col select-none">
            <span className="font-sans text-xl md:text-2xl font-bold tracking-[0.3em] uppercase leading-none">
              M.A.S
            </span>
            <span className="font-sans text-[10px] md:text-xs tracking-widest opacity-80 uppercase">
              Model Portfolio
            </span>
          </div>
        </div>

        <div className="hidden md:flex justify-center flex-1">
          <GlassSurface
            width={330}
            height={60}
            displace={5}
            distortionScale={-150}
            redOffset={5}
            greenOffset={15}
            blueOffset={25}
            brightness={60}
            opacity={0.8}
            mixBlendMode="screen"
            borderRadius={50}
          >
            <ul className="flex gap-10">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    className="font-storyScript text-2xl font-medium transition-opacity hover:opacity-50"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </GlassSurface>
        </div>

        <div className="flex-1 flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
