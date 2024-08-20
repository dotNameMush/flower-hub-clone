import { contentAtom } from "@/providers/content";
import { useAtom } from "jotai";
import React, { useState } from "react";

const FaqSection: React.FC = () => {
  const [content, _] = useAtom(contentAtom);
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number): void => {
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(index)) {
        return prevOpenItems.filter((itemIndex) => itemIndex !== index);
      } else {
        return [...prevOpenItems, index];
      }
    });
  };

  const isOpen = (index: number): boolean => openItems.includes(index);

  return (
    <section className="section" data-bg="#ffffff">
      <div className="container flex flex-col pb-12 pt-12 md:pb-16 md:pt-16 lg:pb-28 lg:pt-28 xl:pb-36 xl:pt-36">
        <h2 className="heading-lg pb-6 md:pb-12">{content.home.faq.title}</h2>
        <div className="AccordionWrapper" data-v-app>
          <div className="flex flex-col gap-12">
            {content.home.faq.items.map((item, index) => (
              <div key={index} className="border-t border-sky-900 py-3">
                <div
                  className="flex cursor-pointer flex-row items-center justify-between"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="body md:text-24 pt-2 font-bold md:w-1/2 md:font-normal">
                    {item.question}
                  </h3>
                  <span className="rounded-full bg-black px-4 py-1 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={19}
                      viewBox="0 0 24 19"
                      fill="none"
                    >
                      <path
                        d="M6 9.33325H18"
                        stroke="white"
                        strokeWidth="1.2"
                      />
                      {!isOpen(index) && (
                        <path
                          d="M12 15.3333L12 3.33325"
                          stroke="white"
                          strokeWidth="1.2"
                        />
                      )}
                    </svg>
                  </span>
                </div>
                <div
                  className={`body md:body-xl overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen(index)
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  } md:w-1/2`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-row justify-center pt-16">
            <a href="/faq">
              <button className="btn-dark">{content.home.faq.linkText}</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
