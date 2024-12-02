import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function Carousel({ items }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemCount = items.length;

  useEffect(() => {
    if (!emblaApi) return;
    function onSelect() {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    }
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

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

  return (
    <div ref={emblaRef} className="overflow-hidden w-full">
      <div className="flex">
        {items.map((item, index) => {
          const focusLevel = getFocusLevel(index);
          return (
            <div
              key={index}
              className={`flex justify-center transition-opacity duration-500 ${
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
