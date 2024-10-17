import { FC } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface HeroProp {
  desc: string;
  image: StaticImageData;
}

const Hero: FC<HeroProp> = ({ desc, image }) => {
  return (
    <section className="relative w-full">
      <Image src={image} className="object-cover h-96 w-full" alt="about-us" />
      <h1 className="absolute text-white text-5xl font-bold bottom-[30%] left-[10%]">
        {desc}
      </h1>
    </section>
  );
};

export default Hero;
