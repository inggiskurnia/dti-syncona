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

      <section className="md:bg-lef flex justify-center bg-synconaltdGray py-10 md:bg-[url('/background-culture.svg')] md:bg-cover md:py-28">
        <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-5 px-5 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <h2 className="text-center text-2xl text-white md:text-left md:text-4xl">
              What Our Clients Say
            </h2>
            <h3 className="text-center text-base text-white md:text-left md:text-lg">
              Discover how Syncona is making an impact in the life sciences.
            </h3>
          </div>
          <ReviewCarousel reviews={reviews} />
        </div>
      </section>

      <section className="flex justify-center bg-synconaltdLightGray py-10 md:py-20">
        <div className="flex w-full flex-col items-center justify-center gap-8 px-4 md:w-[45%] md:gap-12">
          <h2 className="w-full text-center text-xl md:w-[70%] md:text-2xl">
            To unlock the potential from truly innovative science to transform
            patients&apos; lives
          </h2>
          <h1 className="text-center text-3xl md:text-4xl">
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
