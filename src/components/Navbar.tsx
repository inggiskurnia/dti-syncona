"use client";

import Image from "next/image";
import { FC } from "react";
import logo from "@/assets/synconia-logo.svg";
import Dropdown from "./Dropdown";

const Navbar: FC = () => {
  const handleSelect = (option: string) => {
    console.log(`Selected: ${option}`);
  };

  return (
    <header className="absolute w-full flex justify-between px-32 py-8 z-10">
      <Image src={logo} width={205} height={50} alt="synconia-logo"></Image>
      <div className="flex gap-5">
        <Dropdown
          label="About us"
          options={["View this section", "Who are we", "Our History"]}
          onSelect={handleSelect}
        ></Dropdown>
        <Dropdown
          label="Products and Services"
          options={["Products", "Serveices"]}
          onSelect={handleSelect}
        ></Dropdown>
        <Dropdown
          label="Our People"
          options={["View this section", "Board of Director"]}
          onSelect={handleSelect}
        ></Dropdown>
      </div>
    </header>
  );
};

export default Navbar;
