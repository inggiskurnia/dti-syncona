export interface MenuSelection {
  name: string;
  link: string;
}

export const aboutUsSelection: MenuSelection[] = [
  { name: "View this section", link: "/about" },
  { name: "Our Culture", link: "/culture" },
  { name: "Our History", link: "/history" },
];

export const productsServicesSelection: MenuSelection[] = [
  { name: "Product", link: "/product" },
  { name: "Services", link: "/services" },
];

export const ourPeopleSelection: MenuSelection[] = [
  { name: "View this section", link: "/teams" },
];
