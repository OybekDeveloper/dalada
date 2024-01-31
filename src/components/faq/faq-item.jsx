import React, { useState, useRef, useEffect } from 'react';
import line from "./line.svg";
import arrow from "./arrow.svg";
import './faq.scss'; // Assuming you have a separate stylesheet

const FaqItem = () => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      contentRef.current.style.maxHeight = active ? `${contentHeight}px` : '0';
    }
  }, [active]);

  return (
    <div>
      <div className="faqbtn flex flex-col justify-between gap-[20px] pt-[32px]">
        <div onClick={() => setActive(!active)} className="flex flex-row justify-between items-center cursor-pointer">
          <h1 className="text-[#040303] font-[500] text-[18px] max-sm:w-4/5">
            Before we dive into your career, tell me a little bit about
            yourself and what’s important to you
          </h1>
          <div
            className={`faqbtn__img ${active && "active"}`}
          >
            <img src={arrow} alt="" />
          </div>
        </div>

        <p
          ref={contentRef}
          className={`faqbtn__content ${
            active ? "transition-height active" : ""
          } text-[#040303] text-[16px] opacity-[0.6] `}
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn't anything embarrassing hidden in the middle of
          text. All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet.
        </p>
        <img src={line} alt="" />
      </div>
    </div>
  );
};

export default FaqItem;
