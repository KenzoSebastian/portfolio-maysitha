import { useEffect, useRef, useState } from "react";
import GradualBlurMemo from "./motion/GradualBlur";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export const ContainerSectionLimit = ({
  children,
  idSection,
}: {
  children: React.ReactNode;
  idSection: string;
}) => {
  const [collapsed, setCollapsed] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      if (sectionRef.current.scrollHeight > 900) {
        setShowButton(true);
      } else {
        setShowButton(false);
        setCollapsed(false);
      }
    }
  }, [children]);

  return (
    <section
      ref={sectionRef}
      className={`section relative ${
        collapsed ? "max-h-225 overflow-hidden" : "max-h-none"
      }`}
      id={idSection}
    >
      {children}
      {collapsed && showButton && (
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent z-10 flex flex-col justify-end">
          <GradualBlurMemo position="bottom" strength={3} target="parent" zIndex={1} />
          <Button
            onClick={() => setCollapsed(false)}
            className="z-20 w-20 h-6 sm:w-23 sm:h-8 md:w-25 md:h-9 text-[9px] sm:text-[11px] md:text-[13px] flex justify-center items-center absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full opacity-70 hover:opacity-100 bg-primary text-primary-foreground"
          >
            <ChevronDown className="w-7 h-7 sm:w-9 sm:h-9 md:w-15 md:h-15" /> view more
          </Button>
        </div>
      )}
    </section>
  );
};
