import synconaLogo from "@/assets/synconia-logo.svg";

interface Menu {
  menu: string;
  submenu: string[];
}

export const LogoImage = synconaLogo;

export const MenuData: Menu[] = [
  {
    menu: "About Us",
    submenu: ["View this section", "Our Culture", "Our History"],
  },
  {
    menu: "Product",
    submenu: ["View this section"],
  },
  {
    menu: "Our People",
    submenu: ["View this section"],
  },
];
