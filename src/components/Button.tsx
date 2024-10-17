import { FC } from "react";
import arrowDownPic from "@/assets/arrow-down.svg";
import arrowRightPic from "@/assets/arrow-right.svg";
import Image from "next/image";
import Link from "next/link";

export interface ButtonProperty {
  desc: string;
  download: boolean;
  link: string;
}

const Button: FC<ButtonProperty> = ({ desc, download, link }) => {
  return (
    <Link href={link} target={download ? "_blank" : ""}>
      <div className="inline-flex w-64 items-center justify-center border-2 transition-colors duration-300 text-white font-bold bg-synconaltdPink gap-5 p-3 rounded-sm hover:bg-white hover:border-synconaltdPink hover:text-synconaltdPink group">
        {desc}
        <Image
          src={download ? arrowDownPic : arrowRightPic}
          alt="arrow"
          className="h-4 w-auto filter brightness-0 invert group-hover:filter group-hover:brightness-100 group-hover:invert-0"
        />
      </div>
    </Link>
  );
};

export default Button;
