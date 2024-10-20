import React, { ReactNode } from "react";

interface HoverUnderlineProps {
  children: ReactNode;
}

const HoverUnderline: React.FC<HoverUnderlineProps> = ({ children }) => {
  return (
    <span
      className={`relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-synconaltdPink after:transition-all after:duration-300 after:content-[''] hover:after:w-full`}
    >
      {children}
    </span>
  );
};

export default HoverUnderline;
