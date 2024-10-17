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

      <section className="grid grid-cols-2 py-20 px-64 bg-synconaltdGray text-white md:bg-[url('/background-culture.svg')] md:bg-cover md:bg-left">
        <h1 className="text-2xl">Our Values</h1>
        <div className="flex flex-col gap-10">
          <h2 className="text-2xl">
            Our values are at the heart of all that we do as we seek to deliver
            Syncona’s mission for all of our stakeholders
          </h2>
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
