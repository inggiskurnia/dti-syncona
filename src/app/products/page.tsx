import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { FC } from "react";
import productsHero from "@/assets/product-hero.jpg";
import SectionCol from "@/components/SectionCol";
import BusinessNumbers from "@/components/BussinessNumbers";
import productNumbers from "@/static/productNumbers";

const Products: FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero desc="Products" image={productsHero}></Hero>

      <SectionCol
        title="Transforming Life Sciences through Strategic Investments"
        description="At Syncona, we are dedicated to transforming the life sciences landscape through strategic investments in innovative technologies. Our focus is on identifying and supporting late-stage clinical products that have the potential to make a significant impact on patient care and health outcomes."
      ></SectionCol>

      <section className="flex flex-col justify-center gap-10 px-6 py-20 md:px-48">
        <h1 className="text-center text-3xl md:text-5xl">Our Approach</h1>
        <h2 className="text-center text-base md:text-xl">
          Our strategy targets innovative life science companies with the
          potential for high returns and patient impact. We offer long-term
          support, guiding businesses from early development to successful
          market entry
        </h2>
      </section>

      <BusinessNumbers
        title="POTOFOLIO IN NUMBERS"
        subtitle="Unless stated all finance at 30 June 2024"
        items={productNumbers}
        textColor="bg-gradient-to-b from-[#00C3BF] to-[#00B1DF] bg-clip-text text-transparent"
        background="bg-synconaltdDarkGreen bg-[url('/background-aboutus.svg')] bg-cover"
      ></BusinessNumbers>

      <section className="grid grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 md:px-40">
        <h2 className="text-3xl md:text-5xl">What we invest in</h2>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-4xl">Therapeutics</h2>
            <h3 className="text-base md:text-xl">
              Innovative treatments addressing unmet medical needs.
            </h3>
            <hr className="my-4 border-t-2 border-gray-300" />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl md:text-4xl">Biotechnology</h2>
            <h3 className="text-base md:text-xl">
              Biological solutions that drive healthcare progress.
            </h3>
            <hr className="my-4 border-t-2 border-gray-300" />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl md:text-4xl">Medical Devices</h2>
            <h3 className="text-base md:text-xl">
              Advanced tools improving patient care.
            </h3>
            <hr className="my-4 border-t-2 border-gray-300" />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl md:text-4xl">Diagnostics</h2>
            <h3 className="text-base md:text-xl">
              Accurate diagnostics for better healthcare outcomes.
            </h3>
            <hr className="my-4 border-t-2 border-gray-300" />
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Products;
