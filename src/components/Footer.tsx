import { FC } from "react";
import Button from "./Button";
import HoverUnderline from "./HoverUnderLine";

const Footer: FC = () => {
  return (
    <footer className="bg-synconaltdGray text-white flex flex-col items-center py-20 bg-[url('/background.svg')] bg-cover bg-left">
      <div className="flex gap-36 w-[65%] pb-20">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl">Sign-up for company news alerts</h2>
          <p className="text-lg">
            Get the latest RNS, company news, share price information and
            results from Syncona
          </p>
          <div className="flex gap-5">
            <Button desc="RNS ALERT" download={false} link="/"></Button>
            <Button desc="COMPANY ALERTS" download={false} link="/"></Button>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-8 w-[60%]">
            <h2 className="text-2xl">Contact</h2>
            <p className="text-lg">
              Syncona Investment Management Limited 2nd Floor 8 Bloomsbury
              Street London WC1B 3SR
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-2xl">Explore</h2>
            <ul className="flex flex-col gap-1 text-lg">
              <HoverUnderline>
                <li>About us</li>
              </HoverUnderline>
              <HoverUnderline>
                <li>Our People</li>
              </HoverUnderline>
              <HoverUnderline>
                <li>Portofolio</li>
              </HoverUnderline>
              <HoverUnderline>
                <li>Sustainability</li>
              </HoverUnderline>
              <HoverUnderline>
                <li>News and insights</li>
              </HoverUnderline>
              <HoverUnderline>
                <li>Investor</li>
              </HoverUnderline>
              <HoverUnderline>
                <li>Contact</li>
              </HoverUnderline>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-[65%] gap-80">
        <div className="flex flex-col">
          <p className="text-gray-400 mb-4">
            Copyright © Syncona 2024 Accessibility Privacy & cookies Employee
            privacy notice Third party privacy notice Regulatory publications
            Modern slavery statement
          </p>
          <p className="text-sm text-gray-500">
            Syncona Limited is registered in Guernsey no. 55514, registered
            office Frances House, PO Box 273, Sir William Place, St. Peter Port,
            Guernsey, GY1 3RD.
          </p>
          <p className="text-sm text-gray-500">
            Syncona Investment Management Limited is registered in England no.
            10497864, 8 Bloomsbury Street, London WC1B 3SR and is authorised and
            regulated by the FCA. Syncona Limited is managed by Syncona
            Investment Management Limited.
          </p>
        </div>
        <p className="text-gray-400">threethirty.studio</p>
      </div>
    </footer>
  );
};

export default Footer;
