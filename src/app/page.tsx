import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import WhoAreWe from "@/components/WhoAreWe";
import hero from "@/static/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel heros={hero} />
      <WhoAreWe></WhoAreWe>
      <Footer></Footer>
    </>
  );
}
