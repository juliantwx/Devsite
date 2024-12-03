import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function Carousel({ items }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 35,
      watchDrag: false,
    },
    [Autoplay({ delay: 2000 })]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemCount = items.length;

  useEffect(() => {
    if (!emblaApi) return;

    function onSelect() {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    }

    emblaApi.on("select", onSelect);

    onSelect();
    emblaApi.reInit();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Returns focus levels that dictate if an item is the current focused element, a neighbouring item of the focused element, or just a regular item.
  // If item is focused element, return 0
  // If item is a neighbouring element of the focused item, return 1
  // If item is a non-focused or neighbouring element, return offset
  function getFocusLevel(index) {
    if (!emblaApi) return -1;

    const offset = index - currentIndex;

    // Adjust offset for looping behavior
    if (offset > itemCount / 2) {
      return offset - itemCount;
    } else if (offset < -itemCount / 2) {
      return offset + itemCount;
    }

    return offset;
  }

  // Carousel JSX
  return (
    <div ref={emblaRef} className="overflow-hidden w-full">
      <div className="flex">
        {/* Instantiate items that were passed in into the carousel */}
        {items.map((item, index) => {
          const focusLevel = getFocusLevel(index);
          return (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                focusLevel === 0
                  ? "opacity-100 mx-6"
                  : Math.abs(focusLevel) === 1
                  ? "opacity-65"
                  : "opacity-35"
              }`}
            >
              {React.cloneElement(item, {
                focusLevel,
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
