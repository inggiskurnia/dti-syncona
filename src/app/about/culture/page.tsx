import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { FC } from "react";
import { cultureBanner1, cultureBanner2 } from "@/static/cultureBanner";
import cultureHero from "@/assets/history-background.svg";
import values from "@/static/values";
import ValueSection from "@/components/ValueSection";

const Culture: FC = () => {
  return (
    <>
      <Navbar />
      <Hero
        desc="Culture"
        image={cultureHero}
        background="bg-gradient-to-r from-[#951899] to-[#0995D7]"
      />

      {cultureBanner1.map((banner, index) => (
        <Banner banner={banner} reverse={index % 2 === 0} key={index} />
      ))}

      <section className="grid grid-cols-1 gap-10 bg-synconaltdGray px-8 py-10 text-white md:grid-cols-2 md:bg-[url('/background-culture.svg')] md:bg-cover md:bg-left md:px-64 md:py-20">
        <h1 className="text-center text-3xl md:text-left md:text-3xl">
          Our Values
        </h1>
        <div className="flex flex-col gap-5">
          {values.map((value, index) => (
            <ValueSection
              key={index}
              title={value.title}
              items={value.items}
              separator={true}
            />
          ))}
        </div>
      </section>

      {cultureBanner2.map((banner, index) => (
        <Banner banner={banner} reverse={index % 2 === 0} key={index} />
      ))}

      <Footer />
    </>
  );
};

export default Culture;
