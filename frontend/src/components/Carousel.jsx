import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative flex items-center justify-center w-full">
      {/* Items */}
      <div className="flex gap-4 items-center">
        {items.map((item, index) => {
          // Determine the position relative to the currentIndex
          const isCurrent = index === currentIndex;
          const isLeft =
            index === (currentIndex - 1 + items.length) % items.length;
          const isRight = index === (currentIndex + 1) % items.length;

          return (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isCurrent
                  ? "scale-100 opacity-100 z-10"
                  : isLeft || isRight
                  ? "scale-75 opacity-50 z-5"
                  : "hidden"
              }`}
            >
              <div className="flex items-center justify-center">{item}</div>
            </div>
          );
        })}
      </div>

      {/* Left Button */}
      <button
        className="absolute left-4 z-10 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
        onClick={prevSlide}
      >
        &#9664; {/* Left Arrow */}
      </button>

      {/* Right Button */}
      <button
        className="absolute right-4 z-10 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
        onClick={nextSlide}
      >
        &#9654; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Carousel;
