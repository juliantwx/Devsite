import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function Carousel({ items }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    function onSelect() {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    }
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div ref={emblaRef} className="overflow-hidden w-full">
      <div className="flex">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex justify-center transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100 mx-4" : "opacity-50"
            }`}
          >
            {React.cloneElement(item, { isFocused: index === currentIndex })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
