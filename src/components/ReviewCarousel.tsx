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

  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [reviews.length]);

  return (
    <div className="relative flex h-96 flex-col justify-between rounded-lg bg-white p-6 shadow-lg md:h-96">
      <div className="text-center">
        <h2 className="text-lg font-semibold md:text-xl">
          {reviews[currentIndex].name}
        </h2>
        <p className="text-sm text-gray-600 md:text-base">
          {reviews[currentIndex].position} at {reviews[currentIndex].company}
        </p>
        <p className="mt-5 text-sm italic text-gray-800 md:mt-10 md:text-base">
          &quot;{reviews[currentIndex].review}&quot;
        </p>
      </div>
      <div className="mt-4 flex justify-center space-x-2">
        {reviews.map((_, index) => (
          <div
            key={index}
            className="relative h-1 w-10 cursor-pointer bg-gray-400"
            onClick={() => goToReview(index)}
          >
            <button
              className={`absolute h-1 bg-synconaltdPink ${
                index === currentIndex
                  ? "w-full transition-all duration-[5000ms]"
                  : "w-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
