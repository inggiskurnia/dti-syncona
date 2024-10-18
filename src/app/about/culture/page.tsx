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
        bgColor="linear-gradient(to right, #951899, #0995D7)"
      />

      {cultureBanner1.map((banner, index) => (
        <Banner banner={banner} reverse={index % 2 === 0} key={index} />
      ))}

      <section className="grid grid-cols-1 py-10 px-8 gap-10 md:grid-cols-2 md:py-20 md:px-64 bg-synconaltdGray text-white md:bg-[url('/background-culture.svg')] md:bg-cover md:bg-left">
        <h1 className="text-3xl md:text-3xl text-center md:text-left">
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
