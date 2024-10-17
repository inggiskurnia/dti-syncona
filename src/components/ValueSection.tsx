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
    <div className="space-y-5">
      <h1 className="text-3xl">{title}</h1>
      <ul className="text-lg space-y-3">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {separator && <hr></hr>}
    </div>
  );
};

export default ValueSection;
