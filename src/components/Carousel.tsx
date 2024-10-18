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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (
        prevIndex === heros.length - 1 ? 0 : prevIndex + 1
      ));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [heros.length]);

  if (!heros || heros.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full relative overflow-hidden">
      <div className="relative flex">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {heros.map((hero, index) => (
            <div key={index} className="relative min-w-full flex justify-end">
              <div className="absolute w-[70%] left-6 md:left-[15%] md:right-[15%] top-[30%] md:w-[40%] flex flex-col gap-4 md:gap-12 z-10">
                <div className="text-xl md:text-6xl text-black">
                  {hero.desc}
                </div>
                <Button
                  desc={hero.button.desc}
                  download={hero.button.download}
                  link={hero.button.link}
                />
                <div className="inline-flex gap-2 md:gap-4 mt-6">
                  {heros.map((_, dotIndex) => (
                    <button
                      aria-label={`Go to slide ${dotIndex + 1}`}
                      key={dotIndex}
                      className="relative bg-gray-400 h-1 w-8 md:w-16 cursor-pointer"
                      onClick={() => handleNextSlide(dotIndex)}
                    >
                      <div
                        className={`absolute left-0 top-0 h-full bg-synconaltdPink ${
                          dotIndex === currentIndex
                            ? "w-full transition-all duration-[5000ms]"
                            : "w-0"
                        }`}
                      ></div>
                    </button>
                  ))}
                </div>
              </div>
              <Image
                src={hero.image}
                alt={`Slide ${index}`}
                className="w-full h-[60vh] md:h-[90vh] object-cover"
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
