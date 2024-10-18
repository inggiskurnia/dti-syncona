"use client";
import React, { useState, useEffect } from "react";

interface Review {
  name: string;
  position: string;
  company: string;
  review: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
}

const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [onHover, setOnHover] = useState<boolean>(false);

  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };

  const handleMouseHover = () => {
    setOnHover(true);
  };

  const handleMouseLeave = () => {
    setOnHover(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!onHover) {
        setCurrentIndex((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [onHover, reviews.length]);

  return (
    <div
      className="relative p-6 bg-white rounded-lg shadow-lg h-96 flex flex-col justify-between"
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-center">
        <h2 className="text-lg md:text-xl font-semibold">
          {reviews[currentIndex].name}
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          {reviews[currentIndex].position} at {reviews[currentIndex].company}
        </p>
        <p className="mt-10 text-gray-800 italic">
          &quot;{reviews[currentIndex].review}&quot;
        </p>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToReview(index)}
            className={`w-4 h-1 md:w-7 md:h-1 rounded-full ${
              index === currentIndex ? "bg-synconaltdPink" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
