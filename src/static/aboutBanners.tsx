import { BannerDetail } from "@/components/Banner";
import aboutBanner1 from "@/assets/about-image1.jpg";
import aboutBanner2 from "@/assets/about-image2.jpg";
import aboutBanner3 from "@/assets/about-image3.jpg";
import aboutBanner4 from "@/assets/about-image4.jpg";

const aboutBanner: BannerDetail[] = [
  {
    heading:
      "A vision to unlock the potential from truly innovative science to transform patients’ lives",
    desc: "We do this by creating, building and scaling companies to turn exceptional science into transformational treatments to patients in areas of high unmet need.",
    button: {
      desc: "WHO WE ARE",
      download: false,
      link: "/about/whoweare",
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
  // {
  //   heading: "Driving value creation through strategy",
  //   desc: "We take a long-term approach to building leading life science companies, focusing on maximising value through the cycle. Our fundamental view is that value creation in life science comes by taking products into late development, product approval and, in some cases, beyond.",
  //   button: {
  //     desc: "OUR INVESTMENT PROCESS",
  //     download: false,
  //     link: "/about/culture",
  //   },
  //   image: aboutBanner3,
  // },
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
