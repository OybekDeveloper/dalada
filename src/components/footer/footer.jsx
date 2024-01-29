import React from "react";
import logo1 from "../image/Subtract (1).svg";
import logo2 from "../image/Subtract (2).svg";
import logo3 from "../image/Union.svg";
import appstore from "../image/AppStore1.svg";
import playmarket from "../image/PlayMarket.svg";
import appgalery from "../image/AppGallery.svg";
import instagram from "./img/instagram.svg";
import telegram from "./img/telegram.svg";
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import line from "./img/line.svg";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="w-full flex flex-col  footer absolute left-0 px-[96px] max-sm:px-[10px] mt-[180px] ">
      <div className="aloqa  xl:flex lg:grid max-lg:grid  grid-cols-2 flex-row max-sm:flex max-sm:flex-col items-center justify-around gap-20 py-[50px]">
        <div className="flex flex-col justify-between items-start gap-[21px] max-sm:w-full">
          <div className="logo flex flex-row justify-center items-center">
            <img src={logo3} alt="logo" />
            <div className="flex flex-col items-start">
              <img src={logo1} alt="logo" />
              <img src={logo2} alt="logo" />
            </div>
          </div>
          <div>
            <h1 className="text-[16px] font-[400]">Aloqa uchun:</h1>
            <p className="text-[#25B679] text-[18px] font-[500]">
              +998 (88) 999 66 22
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="links max-sm:w-full">
          <ul className="max-sm:w-full flex flex-col justify-start items-start gap-3 text-[#040303] text-[18px] font-[400]">
          <li>
            <a href="#features">Ilova xususiyatlari</a>
          </li>

          <li>
            <a href="#comments">Mijozlar fikrlari</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#faq">Ko’p beriladigan savollar</a>
          </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center max-sm:w-full">
          <h1 className="font-[500] text-[20px] ">Ilovani yuklab oling</h1>
          <div className="flex  py-4 flex-col  md:flex-row gap-[32px] *: ">
            <img className="w-[180px]" src={appstore} alt="logo" />
            <img className="w-[180px]"src={playmarket} alt="logo" />
            <img className="w-[180px]" src={appgalery} alt="logo" />
          </div>
        </div>
        <div></div>
      </div>
      <img src={line} alt="img" />
      <div className="flex flex-row justify-between max-sm:flex-col max-sm:items-center">
        <div className="social-network flex flex-row justify-center items-center gap-[12px]">
          <a className="p-4 w-[56px] h-[56px]" href="/">
            <img className="social-item" src={facebook} alt="img" />
          </a>
          <a className="p-4 w-[56px] h-[56px]" href="/">
            <img className="social-item" src={instagram} alt="img" />
          </a>
          <a className="p-4 w-[56px] h-[56px]" href="/">
            <img className="social-item" src={telegram}  alt="img" />
          </a>
          <a className="p-4 w-[56px] h-[56px]" href="/">
            <img className="social-item" src={twitter} alt="img" />
          </a>
        </div>
        <ul className="flex flex-row justify-center items-center gap-[26px] text-[18px] font-[400] opacity-[0.6]">
          <li>
            <a href="/">Xavfsizlik</a>
          </li>
          <li>
            <a href="/">Foydalanish shartlari</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
