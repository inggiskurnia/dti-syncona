import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import hero from "@/static/hero";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel heros={hero} />
      <section className="flex justify-center py-20 bg-synconaltdLightGray">
        <div className="flex flex-col items-center w-[45%] justify-center gap-12">
          <h2 className="w-[70%] text-2xl text-center">
            To unlock the potential from truly innovative science to transform
            patients’ lives
          </h2>
          <h1 className="text-4xl text-center">
            We create, build and scale companies around exceptional science to
            create a diversified portfolio of 20-25 globally leading healthcare
            businesses
          </h1>
          <Button desc="WHO WE ARE" download={false} link="/"></Button>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
