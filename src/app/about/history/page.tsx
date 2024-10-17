import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { FC } from "react";
import historyHero from "@/assets/history-background.svg";
import Banner from "@/components/Banner";
import { historyBanner, synconaHistory } from "@/static/historyBanner";
import BusinessNumbers from "@/components/BussinessNumbers";
import historyNumber from "@/static/historyNumbers";

const History: FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero
        desc="History"
        image={historyHero}
        bgColor="linear-gradient(to right, #951899, #0995D7)"
      ></Hero>
      <Banner banner={historyBanner} reverse={true}></Banner>

      <BusinessNumbers
        title="Key stats"
        subtitle="Unless stated all financials at 30 June 2024"
        items={historyNumber}
        textColor="text-white"
        background="bg-gradient-to-r from-[#00A6D3] to-[#00C2BB]"
      ></BusinessNumbers>

      {synconaHistory.map((history, index) => (
        <Banner banner={history} key={index} reverse={index % 2 === 0}></Banner>
      ))}
      <Footer></Footer>
    </>
  );
};

export default History;
