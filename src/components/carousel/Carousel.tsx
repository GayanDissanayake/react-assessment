import { ChevronLeft, ChevronRight } from "react-feather";
import type { CarouselProps } from "./types";
import { useRef, useState } from "react";

function Carousel({ images }: CarouselProps) {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleNext = () => {
    setCurrentImage((prev: number) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentImage((prev: number) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const touchdiff = touchStartX.current - touchEndX.current;
    if (touchdiff > 50) {
      handleNext();
    } else if (touchdiff < 50) {
      handlePrev();
    }
  };

  return (
    <div className="h-screen relative overflow-hidden">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image) => (
          <div key={image.id} className="min-w-full flex justify-center">
            <img src={image.src} alt={image.alt} className="object-contain" />
          </div>
        ))}
      </div>
      <div>
        <button onClick={handlePrev} className="absolute left-0 top-1/2">
          <ChevronLeft size={30} />
        </button>
      </div>
      <div>
        <button onClick={handleNext} className="absolute right-0 top-1/2">
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
