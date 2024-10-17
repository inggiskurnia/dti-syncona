import { FC } from "react";
import Button from "./Button";
import HoverUnderline from "./HoverUnderLine";

const Footer: FC = () => {
  return (
    <footer className="bg-synconaltdGray text-white flex flex-col items-center px-8 py-20 md:bg-[url('/background.svg')] md:bg-cover md:bg-left">
      <div className="flex flex-col md:flex-row gap-10 md:gap-36 w-full md:w-[65%] pb-20">
        <div className="flex flex-col gap-8">
          <h2 className="text-xl md:text-2xl">
            Sign-up for company news alerts
          </h2>
          <p className="text-base md:text-lg">
            Get the latest RNS, company news, share price information and
            results from Syncona
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <Button desc="RNS ALERT" download={false} link="/" />
            <Button desc="COMPANY ALERTS" download={false} link="/" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full md:w-[60%]">
          <div className="flex flex-col gap-8">
            <h2 className="text-xl md:text-2xl">Contact</h2>
            <p className="text-base md:text-lg">
              Syncona Investment Management Limited 2nd Floor 8 Bloomsbury
              Street London WC1B 3SR
            </p>
          </div>

          <div className="flex flex-col gap-8 mt-5 md:mt-0">
            <h2 className="text-xl md:text-2xl">Explore</h2>
            <ul className="flex flex-col gap-1 text-base md:text-lg">
              {[
                "About us",
                "Our People",
                "Portfolio",
                "Sustainability",
                "News and insights",
                "Investor",
                "Contact",
              ].map((item) => (
                <HoverUnderline key={item}>
                  <li>{item}</li>
                </HoverUnderline>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-full md:w-[65%] gap-10">
        <div className="flex flex-col">
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            Copyright © Syncona 2024 Accessibility Privacy & cookies Employee
            privacy notice Third party privacy notice Regulatory publications
            Modern slavery statement
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            Syncona Limited is registered in Guernsey no. 55514, registered
            office Frances House, PO Box 273, Sir William Place, St. Peter Port,
            Guernsey, GY1 3RD.
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            Syncona Investment Management Limited is registered in England no.
            10497864, 8 Bloomsbury Street, London WC1B 3SR and is authorised and
            regulated by the FCA. Syncona Limited is managed by Syncona
            Investment Management Limited.
          </p>
        </div>
        <p className="text-gray-400 text-sm md:text-base">threethirty.studio</p>
      </div>
    </footer>
  );
};

export default Footer;
