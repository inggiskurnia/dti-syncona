import { BannerDetail } from "@/components/Banner";
import heading from "@/assets/history-heading.jpg";
import banner1 from "@/assets/history-banner1.jpg";
import banner2 from "@/assets/history-banner2.jpg";
import banner3 from "@/assets/history-banner3.jpg";
import banner4 from "@/assets/history-banner4.jpg";

export const historyBanner: BannerDetail = {
  desc: "Since 2012, Syncona has added 25 companies to its portfolio, investing over £1.3 billion in attractive opportunities across a range of modalities and therapeutic areas.",
  image: heading,
};

export const synconaHistory: BannerDetail[] = [
  {
    heading: "2012-2016",
    desc: "Syncona Partners was co-founded in 2012 by Martin Murphy and the Wellcome Trust, a charitable foundation based on healthcare research. Syncona was set up to take a long-term view to building globally competitive life science businesses leveraging the UK/EU scientific research base. Between 2012 and 2016, we added eight life sciences businesses to the portfolio, seeking to develop treatments for patients in areas of high level of unmet need. In 2016, Syncona merged with the Battle Against Cancer Investment Trust (BACIT), becoming a FTSE 250 healthcare company and expanding its permanent capital base.",
    image: banner1,
  },
  {
    heading: "2017—2018",
    desc: "Syncona added a further four companies to its portfolio, investing across innovative new fields of medicine. In 2017, Syncona portfolio company, Blue Earth Diagnostics, launched its first marketed commercial product, Axumin, going on to diagnose over 50,000 patients during Syncona's ownership. In 2017-18, two other portfolio companies, Nightstar and Autolus listed on NASDAQ.",
    image: banner2,
  },
  {
    heading: "2019—2023",
    desc: "From 2019 to 2023, Syncona added a further 13 companies to its portfolio, listed two companies on NASDAQ (Freeline and Achilles), merged two companies (Gyroscope and Orbit) and sold four portfolio companies. Nightstar was acquired by Biogen for $877 million in March 2019 to deliver a 4.5x return on Syncona’s original investment, Blue Earth Diagnostics was sold to Bracco Imaging in June 2019 to deliver a 10x return, and Gyroscope was sold to Novartis for $800 million, delivering up front proceeds of £326 million to Syncona at a 2.9x multiple on cost. The sale of Neogene Therapeutics to AstraZeneca was completed in January 2023, in a transaction worth up to $320 million including $200 million in up front proceeds, delivering a 1.1x gross multiple on original cost for Syncona.",
    image: banner3,
  },
  {
    heading: "2024-onwards",
    desc: "Since 2024, Syncona has added a further three companies to its portfolio, taken one company private (Freeline), merged two companies together (Freeline and SwanBio), and sold Clade to Century Therapeutics for up to $45.0 million (£35.9 million), with upfront consideration to Syncona of $9.3 million (£7.4 million).",
    image: banner4,
  },
];
