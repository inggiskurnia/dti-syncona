import type { HeroProps } from "@/components/Carousel";
import heroOurReport from "@/assets/hero-our-report.jpg";
import heroOurPurpose from "@/assets/hero-our-purpose.jpg";
import heroOurPeople from "@/assets/hero-our-people.jpg";
import heroOurPortofolio from "@/assets/hero-our-portofolio.jpg";

const Hero: HeroProps[] = [
  {
    image: heroOurReport,
    desc: "Building a platform for long-term growth and impact",
    button: {
      desc: "2024 ANNUAL REPORT",
      download: true,
      link: "https://www.synconaltd.com/media/i3miftjt/syn-ar24-web.pdf",
    },
  },
  {
    image: heroOurPurpose,
    desc: "Our purpose is to invest to extend and enhance human life",
    button: {
      desc: "WATCH VIDEO",
      download: false,
      link: "/",
    },
  },
  {
    image: heroOurPeople,
    desc: "Our team members are experts at what they do",
    button: {
      desc: "OUR PEOPLE",
      download: false,
      link: "/",
    },
  },
  {
    image: heroOurPortofolio,
    desc: "A diversified portfolio of life science companies",
    button: {
      desc: "PORTOFOLIO",
      download: false,
      link: "/",
    },
  },
];

export default Hero;
