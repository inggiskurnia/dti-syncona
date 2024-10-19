"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FC } from "react";
import logo from "@/assets/synconia-logo.svg";
import Dropdown from "./Dropdown";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import {
  aboutUsSelection,
  productsServicesSelection,
  ourPeopleSelection,
} from "@/static/navbarSelection";
import { LogoImage, MenuData } from "@/static/navbar";

const Navbar: FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  let lastScrollY = 0;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setOpenIndex(null);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setMobileMenuOpen(false);
      }
      lastScrollY = window.scrollY;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed z-50 flex w-full items-center justify-between bg-white px-8 py-4 transition-transform duration-300 md:px-56 md:py-8 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href="/">
        <Image src={logo} width={205} height={50} alt="synconia-logo"></Image>
      </Link>
      <div className="hidden gap-5 md:flex">
        <Dropdown label="About us" options={aboutUsSelection} />
        <Dropdown label="Product" options={productsServicesSelection} />
        <Dropdown label="Our People" options={ourPeopleSelection} />
      </div>
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div className="absolute left-0 top-16 flex w-full flex-col gap-5 bg-white py-8 shadow-lg md:hidden">
          {MenuData.map((menu, index) => (
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
                      {submenu}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Navbar;
