import { FC } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface HeroProps {
  desc: string;
  image: StaticImageData;
  background?: string;
  textColor?: string;
}

const Hero: FC<HeroProps> = ({
  desc,
  image,
  background,
  textColor = "text-white",
}) => {
  return (
    <section className={`relative w-full ${background}`}>
      <Image
        src={image}
        className="h-64 w-full object-cover md:h-96"
        alt="about-us"
      />

      <h1
        className={`absolute ${textColor} bottom-[20%] left-[8%] text-3xl font-bold md:bottom-[30%] md:left-[12%] md:text-5xl`}
      >
        {desc}
      </h1>
    </section>
  );
};

export default Hero;
