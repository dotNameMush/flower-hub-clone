import { contentAtom } from "@/providers/content";
import { useAtom } from "jotai";
import React, { useRef, useState } from "react";
import { useDrag, Vector2 } from "@use-gesture/react";

const QuoteSlider: React.FC = () => {
  const [content, _] = useAtom(contentAtom);
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const bind = useDrag(
    ({ movement: [_], direction: [xDir], velocity }) => {
      const swipeThreshold: Vector2 = [0.0, 0.2];
      if (velocity > swipeThreshold) {
        if (xDir > 0 && index > 0) {
          setIndex(index - 1);
        } else if (
          xDir < 0 &&
          index < content.home.quoteSlides.slides.length - 1
        ) {
          setIndex(index + 1);
        }
      }
    },
    { axis: "x" },
  );

  const nextSlide = () => {
    if (index < content.home.quoteSlides.slides.length - 1) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="w-full py-16 lg:py-28 xl:py-36">
      <div className="container mx-auto">
        <div className="overflow-hidden" {...bind()}>
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {content.home.quoteSlides.slides.map((slide, idx) => (
              <div key={idx} className="w-full flex-shrink-0 px-4 lg:w-full">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
                  <div className="pt-4 md:order-2 md:col-span-7 md:pt-12 lg:order-first lg:pt-0">
                    <img
                      src={slide.imgSrc}
                      className="rounded-lg"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                  <div className="flex flex-col justify-between md:pt-4 lg:col-span-5 lg:pt-0">
                    <div>
                      <p className="select-none text-[14px]">Våra partners</p>
                      <p className="md:text-32 select-none py-2 text-2xl leading-[22px] md:py-4 md:leading-[42px] lg:pt-6">
                        "{slide.quote}"
                      </p>
                    </div>
                    <p className="select-none text-[14px]">{slide.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between pt-6">
          <button
            className={`p-2 ${index === 0 ? "opacity-50" : ""}`}
            onClick={prevSlide}
            disabled={index === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M8.50786 8.32051L12 5L10.2067 5L6 9L10.2067 13L12 13L8.50786 9.67949L7.8427 9L8.50786 8.32051Z"
                fill="black"
              />
            </svg>
          </button>
          <button
            className={`p-2 ${index === content.home.quoteSlides.slides.length - 1 ? "opacity-50" : ""}`}
            onClick={nextSlide}
            disabled={index === content.home.quoteSlides.slides.length - 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M9.49214 9.67949L6 13H7.79326L12 9L7.79326 5H6L9.49214 8.32051L10.1573 9L9.49214 9.67949Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuoteSlider;
