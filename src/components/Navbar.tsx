"use client";

import { useState } from "react";
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="absolute w-full flex justify-between items-center px-8 py-4 lg:px-32 lg:py-8 z-10">
      <Link href="/">
        <Image src={logo} width={205} height={50} alt="synconia-logo"></Image>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-5">
        <Dropdown label="About us" options={aboutUsSelection} />
        <Dropdown
          label="Products and Services"
          options={productsServicesSelection}
        />
        <Dropdown label="Our People" options={ourPeopleSelection} />
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <button onClick={toggleMobileMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-5 py-8 shadow-lg lg:hidden">
          <Dropdown label="About us" options={aboutUsSelection} />
          <Dropdown label="Products" options={productsServicesSelection} />
          <Dropdown label="Our People" options={ourPeopleSelection} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
