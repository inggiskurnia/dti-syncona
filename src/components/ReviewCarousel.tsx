"use client";

import React, { useState } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-md mx-auto mt-10 p-14 bg-white rounded-lg shadow-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
      <div className="text-center">
        <h2 className="text-xl font-semibold">{reviews[currentIndex].name}</h2>
        <p className="text-gray-600">
          {reviews[currentIndex].position} at {reviews[currentIndex].company}
        </p>

        {/* Set a fixed height for the review text to maintain position */}
        <p className="mt-4 text-gray-800 italic h-24 overflow-hidden">
          "{reviews[currentIndex].review}"
        </p>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToReview(index)}
            className={`w-7 h-1 rounded-full ${index === currentIndex ? "bg-synconaltdPink" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
