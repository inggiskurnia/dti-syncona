import Navbar from "@/components/Navbar";
import { FC } from "react";
import aboutUs from "@/assets/about-us.jpg";
import banners from "@/static/aboutBanners";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import aboutNumbers from "@/static/aboutNumbers";
import BusinessNumbers from "@/components/BussinessNumbers";
import SectionCol from "@/components/SectionCol";

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

      <SectionCol
        title="We invest to extend and enhance human life"
        description="We aim to build and maintain a diversified portfolio of 20-25 globally leading life science businesses, across development stage, modality and therapeutic area, for the benefit of all our stakeholders."
      ></SectionCol>

      <BusinessNumbers
        title="OUR BUSINESS IN NUMBERS"
        subtitle="Unless stated all finance at 30 June 2024"
        items={aboutNumbers}
        textColor="bg-gradient-to-b from-[#00C3BF] to-[#00B1DF] bg-clip-text text-transparent"
        background="bg-synconaltdDarkGreen bg-[url('/background-aboutus.svg')] bg-cover"
      ></BusinessNumbers>

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
