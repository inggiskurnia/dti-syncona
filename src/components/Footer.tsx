import { FC } from "react";
import Button from "./Button";
import HoverUnderline from "./HoverUnderLine";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col items-center bg-synconaltdGray p-10 text-white md:bg-[url('/background.svg')] md:bg-cover md:bg-left md:px-56 md:py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-6">
        <div className="flex flex-col gap-8 md:col-span-3">
          <h2 className="text-xl md:text-2xl">
            Sign-up for company news alerts
          </h2>
          <p className="text-base md:text-lg">
            Get the latest RNS, company news, share price information and
            resdivts from Syncona
          </p>
          <div className="flex flex-col gap-5 md:flex-row">
            <Button desc="RNS ALERT" download={false} link="/" />
            <Button desc="COMPANY ALERTS" download={false} link="/" />
          </div>
        </div>

        <div className="flex flex-col gap-2 md:col-span-2 md:gap-8">
          <h2 className="text-xl md:text-2xl">Contact</h2>
          <p className="text-base md:text-lg">
            Syncona Investment Management Limited 2nd Floor 8 Bloomsbury Street
            London WC1B 3SR
          </p>
        </div>

        <div className="flex flex-col gap-2 md:col-span-1 md:gap-5">
          <h2 className="text-xl md:text-2xl">Explore</h2>
          <div className="flex flex-col gap-1 text-base md:text-lg">
            <Link href="/about">
              <HoverUnderline>
                <div>About Us</div>
              </HoverUnderline>
            </Link>
          </div>
          <div className="flex flex-col gap-1 text-base md:text-lg">
            <Link href="/about/culture">
              <HoverUnderline>
                <div>Our Culture</div>
              </HoverUnderline>
            </Link>
          </div>
          <div className="flex flex-col gap-1 text-base md:text-lg">
            <Link href="/about/history">
              <HoverUnderline>
                <div>Our History</div>
              </HoverUnderline>
            </Link>
          </div>
          <div className="flex flex-col gap-1 text-base md:text-lg">
            <Link href="/products">
              <HoverUnderline>
                <div>Products</div>
              </HoverUnderline>
            </Link>
          </div>
          <div className="flex flex-col gap-1 text-base md:text-lg">
            <Link href="/teams">
              <HoverUnderline>
                <div>Our People</div>
              </HoverUnderline>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:col-span-5">
          <p className="mb-4 text-sm text-gray-400 md:text-base">
            Copyright © Syncona 2024 Accessibility Privacy & cookies Employee
            privacy notice Third party privacy notice Regdivatory publications
            Modern slavery statement
          </p>
          <p className="text-xs text-gray-400 md:text-sm">
            Syncona Limited is registered in Guernsey no. 55514, registered
            office Frances House, PO Box 273, Sir William Place, St. Peter Port,
            Guernsey, GY1 3RD.
          </p>
          <p className="text-xs text-gray-400 md:text-sm">
            Syncona Investment Management Limited is registered in England no.
            10497864, 8 Bloomsbury Street, London WC1B 3SR and is authorised and
            regdivated by the FCA. Syncona Limited is managed by Syncona
            Investment Management Limited.
          </p>
        </div>
        <p className="text-sm text-gray-400 md:col-span-1 md:text-base">
          threethirty.studio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
