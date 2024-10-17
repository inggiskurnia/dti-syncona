"use client";

import React, { useState } from "react";
import HoverUnderline from "./HoverUnderLine";
import { MenuSelection } from "@/static/navbarSelection";
import Link from "next/link";

interface DropdownProps {
  label: string;
  options: MenuSelection[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(false);
    }
  };

  const handleToggle = () => {
    if (window.innerWidth < 768) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      className="relative w-full md:w-64"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mobile-friendly dropdown button */}
      <button
        className="w-full px-4 py-2 text-left text-lg text- bg-transparent focus:outline-none"
        onClick={handleToggle} // For mobile click interaction
      >
        {label}
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 w-full bg-white rounded shadow-lg z-10 mt-2 md:mt-0">
          {options.map((option, index) => (
            <HoverUnderline key={index}>
              <Link href={option.link}>
                <div className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                  {option.name}
                </div>
              </Link>
            </HoverUnderline>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
