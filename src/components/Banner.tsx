import { FC } from "react";
import Button, { ButtonProperty } from "./Button";
import type { StaticImageData } from "next/image";
import Image from "next/image";

export interface BannerProps {
  banner: BannerDetail;
  reverse?: boolean;
}

export interface BannerDetail {
  heading?: string;
  desc: string;
  button?: ButtonProperty;
  image: StaticImageData;
}

const Banner: FC<BannerProps> = ({ banner, reverse }) => {
  const { heading, desc, button, image } = banner;

  return (
    <div className="flex w-full justify-center p-10 md:p-20">
      <div
        className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} w-full gap-10 md:w-[80%] md:gap-36`}
      >
        <div className="flex h-full w-full flex-col justify-center gap-5 md:w-1/2">
          {heading && <h1 className="text-2xl md:text-4xl">{heading}</h1>}
          <h3 className="text-base md:text-lg">{desc}</h3>
          {button && (
            <Button
              desc={button.desc}
              download={button.download}
              link={button.link}
            />
          )}
        </div>
        <div className="h-auto w-full md:w-1/2 md:overflow-hidden">
          <Image
            src={image}
            alt={heading ? heading : "heading"}
            className="h-auto w-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
