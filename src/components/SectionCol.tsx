interface SectionProps {
  title: string;
  description: string;
}

const SectionCol: React.FC<SectionProps> = ({ title, description }) => {
  return (
    <section className="flex bg-synconaltdLightGray py-20 justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] md:w-[70%] gap-10">
        <h2 className="text-xl md:text-2xl">{title}</h2>
        <p className="text-base md:text-lg">{description}</p>
      </div>
    </section>
  );
};

export default SectionCol;
