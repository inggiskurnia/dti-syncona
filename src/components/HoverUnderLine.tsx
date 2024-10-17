import React, { ReactNode } from "react";

interface HoverUnderlineProps {
  children: ReactNode;
  color?: string;
}

const HoverUnderline: React.FC<HoverUnderlineProps> = ({
  children,
  color = "synconaltdPink",
}) => {
  return (
    <span
      className={`relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-${color} after:transition-all after:duration-300 hover:after:w-full`}
    >
      {children}
    </span>
  );
};

export default HoverUnderline;
