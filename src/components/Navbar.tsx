"use client";

import { useState, useEffect } from "react";
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

const Navbar: FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
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
  }, []);

  return (
    <header
      className={`fixed w-full flex justify-between items-center px-8 py-4 md:px-56 md:py-8 z-50 bg-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link href="/">
        <Image src={logo} width={205} height={50} alt="synconia-logo"></Image>
      </Link>

      <div className="hidden md:flex gap-5">
        <Dropdown label="About us" options={aboutUsSelection} />
        <Dropdown label="Product" options={productsServicesSelection} />
        <Dropdown label="Our People" options={ourPeopleSelection} />
      </div>

      <div className="md:hidden">
        <button onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-5 py-8 shadow-lg md:hidden">
          <Dropdown label="About us" options={aboutUsSelection} />
          <Dropdown label="Products" options={productsServicesSelection} />
          <Dropdown label="Our People" options={ourPeopleSelection} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
