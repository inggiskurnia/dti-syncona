import { FC } from "react";
import Button, { ButtonProperty } from "./Button";
import type { StaticImageData } from "next/image";
import Image from "next/image";

export interface BannerProps {
  banner: BannerDetail;
  reverse?: boolean;
}

export interface BannerDetail {
  heading: string;
  desc: string;
  button: ButtonProperty;
  image: StaticImageData;
}

const Banner: FC<BannerProps> = ({ banner, reverse }) => {
  const { heading, desc, button, image } = banner;

  return (
    <div className="w-full p-10 md:p-20 flex justify-center">
      <div
        className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} w-full md:w-[80%] gap-10 md:gap-36`}
      >
        <div className="flex flex-col h-full justify-center gap-5 w-full md:w-1/2">
          <h1 className="text-2xl md:text-4xl">{heading}</h1>
          <h3 className="text-base md:text-lg">{desc}</h3>
          <Button
            desc={button.desc}
            download={button.download}
            link={button.link}
          />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={image}
            alt={heading}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
