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
    <div className="space-y-5 md:px-8">
      <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      <ul className="text-base md:text-lg space-y-3">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {separator && <hr className="border-t-2 border-gray-300 my-4" />}
    </div>
  );
};

export default ValueSection;
