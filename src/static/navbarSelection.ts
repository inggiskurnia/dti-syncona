export interface MenuSelection {
  name: string;
  link: string;
}

export const aboutUsSelection: MenuSelection[] = [
  { name: "View this section", link: "/about" },
  { name: "Our Culture", link: "/about/culture" },
  { name: "Our History", link: "/about/history" },
];

export const productsServicesSelection: MenuSelection[] = [
  { name: "View this section", link: "/products" },
];

export const ourPeopleSelection: MenuSelection[] = [
  { name: "View this section", link: "/teams" },
];
