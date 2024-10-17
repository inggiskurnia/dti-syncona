import { FC } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface HeroProps {
  desc: string;
  image: StaticImageData;
  bgColor?: string;
  textColor?: string;
}

const Hero: FC<HeroProps> = ({
  desc,
  image,
  bgColor,
  textColor = "text-white",
}) => {
  return (
    <section
      className="relative w-full"
      style={{
        background: bgColor ? bgColor : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image
        src={image}
        className="object-cover h-64 md:h-96 w-full"
        alt="about-us"
      />

      <h1
        className={`absolute ${textColor} text-3xl md:text-5xl font-bold bottom-[20%] md:bottom-[30%] left-[5%] md:left-[10%]`}
      >
        {desc}
      </h1>
    </section>
  );
};

export default Hero;
