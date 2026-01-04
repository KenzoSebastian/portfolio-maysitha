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
import GradualBlur from "@/components/motion/GradualBlur";

const menuItems: { label: string; href: string; class?: string }[] = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#recent-works" },
  { label: "Runway History", href: "#runway-history", class: "hidden lg:block" },
  { label: "Certificate", href: "#certificates" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-4">
      <GradualBlur position="top" strength={3} target="parent" zIndex={10} />

      <div className="relative z-20 flex w-full max-w-7xl px-6 items-center">
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

          <a href="#" className="flex flex-col select-none">
            <span className="font-sans text-xl md:text-[22px] lg:text-3xl font-bold tracking-[0.3em] uppercase leading-none">
              M.A.S
            </span>
            <span className="font-sans text-[10px] md:text-[11px] lg:text-[13px] tracking-widest opacity-80 uppercase">
              Model Portfolio
            </span>
          </a>
        </div>

        <div className="hidden md:flex justify-center flex-1">
          {/* large screen */}
          <GlassSurface
            width={620}
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
            className="hidden lg:block"
          >
            <ul className="flex gap-9">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    className="font-storyScript text-xl font-medium transition-opacity hover:opacity-50"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </GlassSurface>

          {/* medium screen */}
          <GlassSurface
            width={410}
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
            className="lg:hidden"
          >
            <ul className="flex gap-6">
              {menuItems.map((item) => (
                <li key={item.label} className={item.class}>
                  <a
                    className="font-storyScript text-[18px] font-medium transition-opacity hover:opacity-50"
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
