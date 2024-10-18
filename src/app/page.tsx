import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import hero from "@/static/hero";
import Button from "@/components/Button";
import ReviewCarousel from "@/components/ReviewCarousel";
import reviews from "@/static/review";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel heros={hero} />

      <section className="flex justify-center py-20 md:py-28 bg-synconaltdGray">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full max-w-6xl px-4">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-4xl text-white text-center md:text-left">
              What Our Clients Say
            </h2>
            <h3 className="text-base md:text-lg text-white text-center md:text-left">
              Discover how Syncona is making an impact in the life sciences.
            </h3>
          </div>
          <ReviewCarousel reviews={reviews} />
        </div>
      </section>

      <section className="flex justify-center py-10 md:py-20 bg-synconaltdLightGray">
        <div className="flex flex-col items-center w-full px-4 md:w-[45%] justify-center gap-8 md:gap-12">
          <h2 className="w-full md:w-[70%] text-xl md:text-2xl text-center">
            To unlock the potential from truly innovative science to transform
            patients&apos; lives
          </h2>
          <h1 className="text-3xl md:text-4xl text-center">
            We create, build and scale companies around exceptional science to
            create a diversified portfolio of 20-25 globally leading healthcare
            businesses
          </h1>
          <Button desc="WHO WE ARE" download={false} link="/about"></Button>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
}
