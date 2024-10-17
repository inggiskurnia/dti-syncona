import { FC } from "react";

interface BusinessNumber {
  title: string;
  subtitle: string;
}

interface BusinessNumbersProps {
  title: string;
  subtitle: string;
  items: BusinessNumber[];
  textColor?: string;
  background?: string;
}

const BusinessNumbers: FC<BusinessNumbersProps> = ({
  title,
  subtitle,
  items,
  textColor,
  background,
}) => {
  return (
    <section
      className={`flex flex-col items-center gap-12 md:gap-28 py-20 md:px-32 bg-cover ${background}`}
    >
      <div className={`${textColor}`}>
        <h3 className="text-center text-xl md:text-2xl">{title}</h3>
        <p className="text-center text-sm md:text-base">{subtitle}</p>
      </div>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-x-16 gap-y-20 ${textColor} w-[90%] md:w-full`}
      >
        {items.map((item, index) => (
          <div key={index} className="space-y-5">
            <h1 className="text-3xl md:text-9xl">{item.title}</h1>
            <hr className={`border-t-2 ${textColor}`} />
            <h3 className="text-lg md:text-xl">{item.subtitle}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessNumbers;
