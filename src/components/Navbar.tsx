"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FC } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { LogoImage, NavbarData } from "@/static/navbar";
import HoverUnderline from "./HoverUnderLine";

const Navbar: FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  let lastScrollY = 0;

  const toggleSubMenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setOpenIndex(null);
  };

  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setMobileMenuOpen(false);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <header
      className={`fixed z-50 flex w-full items-center justify-between bg-white px-8 py-4 transition-transform duration-300 md:px-56 md:py-8 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href="/">
        <Image src={LogoImage} width={205} height={50} alt="logo"></Image>
      </Link>
      <div className="hidden gap-5 md:flex">
        {NavbarData.map((menu, index) => (
          <div
            key={index}
            className="relative w-full md:w-52"
            onMouseEnter={() => toggleSubMenu(index)}
            onMouseLeave={() => toggleSubMenu(index)}
          >
            <button className="text- w-full bg-transparent px-4 py-2 text-left text-lg focus:outline-none">
              {menu.menu}
            </button>
            {openIndex === index && (
              <div className="absolute left-0 z-10 mt-2 w-full rounded bg-white shadow-lg md:mt-0">
                {menu.submenu.map((submenu, index) => (
                  <HoverUnderline key={index}>
                    <Link href={submenu.link}>
                      <div className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                        {submenu.title}
                      </div>
                    </Link>
                  </HoverUnderline>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <button onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>
      <div
        className={`absolute left-0 top-14 flex w-full flex-col gap-5 bg-white py-8 shadow-lg transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {NavbarData.map((menu, index) => (
          <div
            key={index}
            className="px-8"
            onClick={() => toggleSubMenu(index)}
          >
            <button
              className={
                openIndex === index
                  ? "w-full border-b-2 border-b-synconaltdPink text-left"
                  : ""
              }
            >
              {menu.menu}
            </button>
            {menu.submenu.length > 0 && (
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {menu.submenu.map((submenu, subIndex) => (
                  <div key={subIndex} className="mt-4 pl-4">
                    <Link href={submenu.link}>{submenu.title}</Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
