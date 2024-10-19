import synconaLogo from "@/assets/synconia-logo.svg";

interface Navbar {
  menu: string;
  submenu: MenuData[];
}

interface MenuData {
  title: string;
  link: string;
}

export const LogoImage = synconaLogo;

export const NavbarData: Navbar[] = [
  {
    menu: "About Us",
    submenu: [
      {
        title: "View this section",
        link: "/about",
      },
      {
        title: "Our Culture",
        link: "/about/culture",
      },
      {
        title: "Our History",
        link: "/about/history",
      },
    ],
  },
  {
    menu: "Products",
    submenu: [
      {
        title: "View this section",
        link: "/products",
      },
    ],
  },
  {
    menu: "Our Teams",
    submenu: [
      {
        title: "View this section",
        link: "/teams",
      },
    ],
  },
];
