import GlassSurface from "@/components/motion/GlassSurface";

export const Navbar = () => {
  return (
    <div className="fixed z-50 m-3">
      <GlassSurface
        width={350}
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
        <ul className="flex gap-10 font-storyScript text-xl">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </GlassSurface>
    </div>
  );
};
