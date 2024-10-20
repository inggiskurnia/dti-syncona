"use client";
import React, { useState, useEffect } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Button, { ButtonProperty } from "./Button";

export interface CarouselProps {
  heros: HeroProps[];
}

export interface HeroProps {
  image: StaticImageData;
  desc: string;
  button: ButtonProperty;
}

const Carousel: React.FC<CarouselProps> = ({ heros }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNextSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heros.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [heros.length]);

  if (!heros || heros.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative flex">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {heros.map((hero, index) => (
            <div key={index} className="relative flex min-w-full justify-end">
              <div className="absolute left-6 top-[30%] flex w-[70%] flex-col gap-4 md:left-[15%] md:right-[15%] md:w-[40%] md:gap-12">
                <div className="text-xl text-black md:text-6xl">
                  {hero.desc}
                </div>
                <Button
                  desc={hero.button.desc}
                  download={hero.button.download}
                  link={hero.button.link}
                />
                <div className="mt-6 inline-flex gap-2 md:gap-4">
                  {heros.map((_, dotIndex) => (
                    <button
                      aria-label={`Go to slide ${dotIndex + 1}`}
                      key={dotIndex}
                      className="relative h-1 w-8 cursor-pointer bg-gray-400 md:w-16"
                      onClick={() => handleNextSlide(dotIndex)}
                    >
                      <div
                        className={`absolute left-0 top-0 h-full bg-synconaltdPink ${
                          dotIndex === currentIndex ? "animate-fill" : ""
                        }`}
                      ></div>
                    </button>
                  ))}
                </div>
              </div>
              <Image
                src={hero.image}
                alt={`Slide ${index}`}
                className="h-[60vh] w-full object-cover md:h-[90vh]"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
