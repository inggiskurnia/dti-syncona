import Navbar from "@/components/Navbar";
import { FC } from "react";
import aboutUs from "@/assets/about-us.jpg";
import banners from "@/static/aboutBanners";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

const About: FC = () => {
  return (
    <>
      <Navbar />
      <Hero desc="About Us" image={aboutUs} />

      <section className="py-20 px-5 md:px-40 flex justify-center">
        <div className="w-full md:w-[50%] space-y-10">
          <h1 className="text-3xl md:text-4xl text-center">
            Pioneering Life Science Investment for Long-Term Growth and Patient
            Impact
          </h1>
          <h2 className="text-base md:text-xl text-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[70%] gap-10">
          <h2 className="text-xl md:text-2xl text-center">
            We invest to extend and enhance human life
          </h2>
          <p className="text-base md:text-lg text-center">
            We aim to build and maintain a diversified portfolio of 20-25
            globally leading life science businesses, across development stage,
            modality and therapeutic area, for the benefit of all our
            stakeholders. We focus on developing treatments that deliver patient
            impact by working in close partnership with world-class academic
            founders and experienced management teams.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center bg-synconaltdDarkGreen gap-12 md:gap-28 py-20 md:px-32 bg-[url('/background-aboutus.svg')] bg-cover">
        <div className="text-white">
          <h3 className="text-center text-xl md:text-2xl">
            OUR BUSINESS IN NUMBERS
          </h3>
          <p className="text-center text-sm md:text-base">
            Unless stated all finance at 30 June 2024
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-x-16 gap-y-20 text-white w-[90%] md:w-full">
          {[
            { title: "13", subtitle: "Portfolio companies" },
            { title: "£739m", subtitle: "Value of life science portfolio" },
            { title: "£421m", subtitle: "Capital pool" },
            { title: "37", subtitle: "Members of the team" },
            { title: "92%", subtitle: "Investment team with PhDs" },
            { title: "23", subtitle: "Portfolio company Board seats" },
          ].map((item, index) => (
            <div key={index} className="space-y-5">
              <h1 className="text-7xl md:text-9xl bg-gradient-to-b from-[#00C3BF] to-[#00B1DF] bg-clip-text text-transparent">
                {item.title}
              </h1>
              <hr className="border-t-2 border-white" />
              <h3 className="text-lg md:text-xl">{item.subtitle}</h3>
            </div>
          ))}
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

      <Footer />
    </>
  );
};

export default About;
