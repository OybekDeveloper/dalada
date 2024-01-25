import React, { useState } from 'react'
import line from "./line.svg";
import arrow from "./arrow.svg";
const FaqItem = () => {
    const [active, setActive] = useState(false)
  return (
    <div>
        <div className="faqbtn flex flex-col justify-between gap-[20px] pt-[32px]">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-[#040303] font-[500] text-[18px]">
                Before we dive in to the your career, tell me a little bit about
                yourself and what’s important to yo
              </h1>
              <div className={`${active && "active"} img`} onClick={() =>  setActive(!active)}>
                <img src={arrow} alt="" />
              </div>
            </div>

            <p className={`${active ?"hidden-content2 ":"hidden-content1"} text-[#040303] text-[16px] opacity-[0.6]`}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet.
            </p>
            <img src={line} alt="" />
          </div>
    </div>
  )
}

export default FaqItem