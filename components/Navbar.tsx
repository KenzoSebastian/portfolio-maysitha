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
    <nav className="fixed z-50 m-3 md:px-3 flex w-5/6 justify-center items-center">
      <div className="flex-1 flex items-center gap-2">
        <DropdownMenu open={isMenuOpen} onOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
          <DropdownMenuTrigger>
            <Hamburger status={isMenuOpen} setStatus={setIsMenuOpen} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-sidebar font-storyScript">
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
        <div className="flex flex-col">
          <span className="font-sans text-xl md:text-2xl font-bold tracking-[0.3em] uppercase">M.A.S</span>
          <span className="font-sans text-[10px] md:text-xs tracking-widest opacity-80 uppercase">
            Model Portfolio
          </span>
        </div>
      </div>
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
        className="hidden md:block"
      >
        <ul className="flex gap-10">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a className="font-storyScript text-2xl font-medium" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </GlassSurface>
      <div className="md:flex-1 flex justify-end">
        <ThemeToggle />
      </div>
    </nav>
  );
};
