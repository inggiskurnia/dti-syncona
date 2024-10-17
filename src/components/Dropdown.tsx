"use client";

import React, { useState } from "react";
import HoverUnderline from "./HoverUnderLine";

interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block w-64"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="w-full px-4 py-2 text-left text-lg">{label}</button>
      {isOpen && (
        <div
          className="absolute left-0 w-full bg-white rounded shadow-lg z-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {options.map((option, index) => (
            <HoverUnderline>
              <div
                key={index}
                onClick={() => handleOptionClick(option)}
                className="relative px-4 py-2 cursor-pointer"
              >
                {option}
              </div>
            </HoverUnderline>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
