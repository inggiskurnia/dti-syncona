import { FC } from "react";
import Button from "./Button";
import HoverUnderline from "./HoverUnderLine";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="bg-synconaltdGray text-white flex flex-col items-center p-10 md:px-56 md:py-20 md:bg-[url('/background.svg')] md:bg-cover md:bg-left">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
        <div className="md:col-span-3 flex flex-col gap-8">
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

        <div className="md:col-span-2 flex flex-col gap-2 md:gap-8">
          <h2 className="text-xl md:text-2xl">Contact</h2>
          <p className="text-base md:text-lg">
            Syncona Investment Management Limited 2nd Floor 8 Bloomsbury Street
            London WC1B 3SR
          </p>
        </div>

        <div className="md:col-span-1 flex flex-col gap-2 md:gap-5">
          <h2 className="text-xl md:text-2xl">Explore</h2>
          <ul className="flex flex-col gap-1 text-base md:text-lg">
            <Link href="/about">
              <HoverUnderline>
                <li>About Us</li>
              </HoverUnderline>
            </Link>
          </ul>
          <ul className="flex flex-col gap-1 text-base md:text-lg">
            <Link href="/about/culture">
              <HoverUnderline>
                <li>Our Culture</li>
              </HoverUnderline>
            </Link>
          </ul>
          <ul className="flex flex-col gap-1 text-base md:text-lg">
            <Link href="/about/history">
              <HoverUnderline>
                <li>About History</li>
              </HoverUnderline>
            </Link>
          </ul>
          <ul className="flex flex-col gap-1 text-base md:text-lg">
            <Link href="/teams">
              <HoverUnderline>
                <li>Our People</li>
              </HoverUnderline>
            </Link>
          </ul>
          <ul className="flex flex-col gap-1 text-base md:text-lg">
            <Link href="/products">
              <HoverUnderline>
                <li>Product and Service</li>
              </HoverUnderline>
            </Link>
          </ul>
        </div>

        <div className="md:col-span-5 flex flex-col">
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
        <p className="md:col-span-1 text-gray-400 text-sm md:text-base">
          threethirty.studio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
