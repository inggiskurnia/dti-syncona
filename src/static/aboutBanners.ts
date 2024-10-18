import { BannerDetail } from "@/components/Banner";
import aboutBanner1 from "@/assets/about-image1.jpg";
import aboutBanner2 from "@/assets/about-image2.jpg";
import aboutBanner4 from "@/assets/about-image4.jpg";

const aboutBanner: BannerDetail[] = [
  {
    heading:
      "A vision to unlock the potential from truly innovative science to transform patients’ lives",
    desc: "From the start, Syncona has focused on building and scaling companies that transform groundbreaking science into therapies for patients with unmet medical needs. Our mission remains to deliver impactful healthcare solutions by turning exceptional scientific discoveries into real-world treatments.",
    button: {
      desc: "OUR HISTORY",
      download: false,
      link: "/about/history",
    },
    image: aboutBanner1,
  },
  {
    heading: "A strong sense of culture and social purpose",
    desc: "We invest to extend and enhance human life. We have a strong, entrepreneurial culture, where everyone takes personal ownership for delivering Syncona’s mission. Our culture is underpinned by our values",
    button: {
      desc: "OUR CULTURE",
      download: false,
      link: "/about/culture",
    },
    image: aboutBanner2,
  },
  {
    heading: "A multidisciplinary team",
    desc: "The life sciences investment team members have deep technical scientific backgrounds, supplemented by strong commercial experience ranging from venture capital investment to pharmaceutical launch.",
    button: {
      desc: "OUR PEOPLE",
      download: false,
      link: "/about/people",
    },
    image: aboutBanner4,
  },
];

export default aboutBanner;
