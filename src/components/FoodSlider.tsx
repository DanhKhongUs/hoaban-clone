import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const slides = [
  {
    image:
      "https://hoabanfood.com/wp-content/uploads/Ba-Kich-Kho-1-680x382.jpg",
  },
  {
    image:
      "https://hoabanfood.com/wp-content/uploads/thit-trau-gac-bep-flatsome.jpg",
  },
];

const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

export default function FoodSlider() {
  const [current, setCurrent] = useState(1);
  const [noTransition, setNoTransition] = useState(false);

  const nextSlide = () => setCurrent((prev) => prev + 1);
  const prevSlide = () => setCurrent((prev) => prev - 1);

  useEffect(() => {
    const slider = document.getElementById("slider-wrapper");

    const handleTransitionEnd = () => {
      if (current === 0) {
        setNoTransition(true);
        setCurrent(slides.length);
      } else if (current === slides.length + 1) {
        setNoTransition(true);
        setCurrent(1);
      }
    };

    slider?.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      slider?.removeEventListener("transitionend", handleTransitionEnd);
  }, [current]);

  useEffect(() => {
    if (noTransition) {
      const timeout = setTimeout(() => setNoTransition(false), 50);
      return () => clearTimeout(timeout);
    }
  }, [noTransition]);

  return (
    <div className="group relative w-full bg-[#fdfbf5]">
      <div className="max-w-7xl mx-auto overflow-hidden shadow-lg relative aspect-[16/9] sm:aspect-[21/9]">
        <div
          id="slider-wrapper"
          className={`flex h-full ${
            noTransition ? "" : "transition-transform duration-500 ease-in-out"
          }`}
          style={{
            transform: `translateX(-${
              current * (100 / extendedSlides.length)
            }%)`,
            width: `${extendedSlides.length * 100}%`,
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-none h-full"
              style={{ width: `${100 / extendedSlides.length}%` }}
            >
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full text-gray-800
             opacity-100 sm:opacity-100 sm:group-hover:opacity-100 lg:opacity-0 transition-opacity duration-300"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full text-gray-800
             opacity-100 sm:opacity-100 sm:group-hover:opacity-100 lg:opacity-0 transition-opacity duration-300"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
