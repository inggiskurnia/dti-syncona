import Navbar from "@/components/Navbar";
import { FC } from "react";
import aboutUs from "@/assets/about-us.jpg";
import Image from "next/image";
import banners from "@/static/aboutBanners";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const About: FC = () => {
  return (
    <>
      <Navbar />
      <Hero desc="About Us" image={aboutUs}></Hero>

      <section className="py-20 px-40 flex justify-center">
        <div className="w-[50%] space-y-10">
          <h1 className="text-4xl text-center">
            Pioneering Life Science Investment for Long-Term Growth and Patient
            Impact
          </h1>
          <h2 className="text-xl text-center">
            Syncona is a leading life science investor with a strong balance
            sheet and clear strategy for growth and patient impact. The core
            premise of our investment strategy is that significant risk-adjusted
            returns in life science come when novel technology is developed to a
            late-stage clinical product. We apply a differentiated investment
            model and take a long-term approach to build world-class companies
            which can reach this point.
          </h2>
        </div>
      </section>

      <section className="flex bg-synconaltdLightGray py-20 justify-center">
        <div className="grid grid-cols-2 w-[70%] gap-20">
          <h2 className="text-2xl">
            We invest to extend and enhance human life
          </h2>
          <p className="text-lg">
            We aim to build and maintain a diversified portfolio of 20-25
            globally leading life science businesses, across development stage,
            modality and therapeutic area, for the benefit of all our
            stakeholders. We focus on developing treatments that deliver patient
            impact by working in close partnership with world-class academic
            founders and experienced management teams.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center bg-synconaltdDarkGreen gap-28 py-20 bg-[url('/background-aboutus.svg')] bg-cover">
        <div className="text-white">
          <h3 className="text-center">OUR BUSSINESS IN NUMBERS</h3>
          <p className="text-center">
            Unless stated all finnance at 30 June 2024
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-16 gap-y-20 text-white">
          <div className="space-y-7">
            <h1 className="text-9xl bg-gradient-to-b from-[#00C3BF] to-[#00B1DF] bg-clip-text text-transparent">
              13
            </h1>
            <hr className="border-t-2 border-white"></hr>
            <h3 className="text-xl">Portfolio companies</h3>
          </div>
          <div className="space-y-7">
            <h1 className="text-9xl bg-gradient-to-b from-[#00C3BF] to-[#00B1DF] bg-clip-text text-transparent">
              £739m
            </h1>
            <hr className="border-t-2 border-white"></hr>
            <h3 className="text-xl">Value of life science portfolio</h3>
          </div>
          <div className="space-y-7">
            <h1 className="text-9xl bg-gradient-to-b from-[#00C3BF] to-[#00B1DF] bg-clip-text text-transparent">
              £421m
            </h1>
            <hr className="border-t-2 border-white"></hr>
            <h3 className="text-xl">Capital pool</h3>
          </div>
          <div className="space-y-7">
            <h1 className="text-9xl bg-gradient-to-b from-[#00C3BF] to-[#00B1DF] bg-clip-text text-transparent">
              37
            </h1>
            <hr className="border-t-2 border-white"></hr>
            <h3 className="text-xl">Members of the team</h3>
          </div>
          <div className="space-y-7">
            <h1 className="text-9xl bg-gradient-to-b from-[#00C3BF] to-[#00B1DF] bg-clip-text text-transparent">
              92%
            </h1>
            <hr className="border-t-2 border-white"></hr>
            <h3 className="text-xl">Investment team with PhDs</h3>
          </div>
          <div className="space-y-7">
            <h1 className="text-9xl bg-gradient-to-b from-[#00C3BF] to-[#00B1DF] bg-clip-text text-transparent">
              23
            </h1>
            <hr className="border-t-2 border-white"></hr>
            <h3 className="text-xl">Portfolio company Board seats</h3>
          </div>
        </div>
      </section>

      <section>
        {banners.map((banner, index) => {
          const reverse = index % 2 === 0;
          return (
            <div key={index}>
              <Banner banner={banner} reverse={reverse}></Banner>
            </div>
          );
        })}
      </section>

      <Footer></Footer>
    </>
  );
};

export default About;
