import React from "react";

interface ValueSectionProps {
  title: string;
  items: string[];
  separator?: React.ReactNode;
}

const ValueSection: React.FC<ValueSectionProps> = ({
  title,
  items,
  separator,
}) => {
  return (
    <div className="space-y-5 p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        {title}
      </h1>
      <ul className="text-base sm:text-lg md:text-xl lg:text-2xl space-y-3">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {separator && <hr className="border-t-2 border-gray-300 my-4" />}
    </div>
  );
};

export default ValueSection;
