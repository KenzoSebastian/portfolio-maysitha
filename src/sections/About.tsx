import Stack from "@/components/motion/Stack";

export const AboutSection = () => {
  return (
    <section id="about" className="section flex flex-col">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold font-inter mb-5 md:mb-10">About Me</h1>
      <div className="flex flex-col items-center lg:flex-row gap-10 md:gap-14 lg:gap-16">
        <div className="text-base sm:text-lg md:text-xl md:max-w-180 text-justify leading-relaxed flex flex-col gap-4 indent-10 flex-1 order-2 lg:order-0">
          <p>
            I am a professional fashion model with international runway experience and a strong passion for
            the creative industry. I have walked the runway in Paris and have participated in major fashion
            events such as Indonesia Trend Fashion Week, collaborating with designers to present collections
            with confidence, elegance, and professionalism.
          </p>
          <p>
            Beyond runway modeling, I am also active in acting projects and professional photoshoots, allowing
            me to express versatility in front of the camera. My experience includes fashion editorials,
            creative concepts, and commercial shoots, where I bring character, expression, and discipline to
            every project.
          </p>
          <p>
            I am known for my strong work ethic, adaptability, and commitment to continuous growth through
            training and practice. I enjoy working closely with designers, photographers, and creative teams
            to bring visions to life and represent brands with confidence and authenticity.
          </p>
        </div>
        <div className="w-75 sm:w-110 md:w-125 lg:w-100 aspect-square">
          <Stack
            randomRotation={true}
            sensitivity={100}
            autoplay={true}
            autoplayDelay={2500}
            pauseOnHover={true}
            sendToBackOnClick={false}
            mobileClickOnly={true}
            cards={Array.from({ length: 4 }).map((_, i) => (
              <img
                key={i}
                src={`./img/stack${i + 1}.JPG`}
                alt={`stack-${i + 1}`}
                draggable={false}
                className="w-full h-full object-cover no-drag"
              />
            ))}
          />
        </div>
      </div>
    </section>
  );
};
