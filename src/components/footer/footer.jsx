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
    <div className="w-full flex justify-center footer mt-[100px]">
      <div className="w-11/12  bottom-0 flex flex-col pt-[100px] pb-[30px]">
        <div className="max-w-[1440px] mx-auto w-full aloqa flex max-sm:flex-col gap-10 items-start max-md:gap-[200px] max-sm:gap-10  pb-10 ">
          <div className="flex xl:flex-row max-md:flex-col gap-10 ">
            <div className="flex flex-col  items-start gap-[21px]">
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
              <ul className="max-sm:w-full flex flex-col justify-start items-start gap-3 text-[#040303] text-[18px] font-[500]">
                <li >
                  <a className="font-[500]" href="#features">Ilova xususiyatlari</a>
                </li>

                <li>
                  <a className="font-[500]" href="#comments">Mijozlar fikrlari</a>
                </li>
                <li>
                  <a className="font-[500]" href="#blog">Blog</a>
                </li>
                <li>
                  <a className="font-[500]" href="#faq">Ko’p beriladigan savollar</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col  justify-center max-sm:w-full">
            <h1 className="font-[500] text-[20px] ">Ilovani yuklab oling</h1>
            <div className="flex py-4 xl:flex-row max-md:flex-col gap-3 max-md:gap-6">
              <a href="https://www.apple.com/app-store/">
                <img className="w-[150px]" src={appstore} alt="logo" />
              </a>
              <a href="https://play.google.com/store">
                <img className="w-[150px]" src={playmarket} alt="logo" />
              </a>
              <a href="https://appgallery.huawei.com/Featured">
                <img className="w-[150px]" src={appgalery} alt="logo" />
              </a>
            </div>
          </div>
        </div>
        <img src={line} alt=" max-w-[1440px] w-full" />
        <div className="max-w-[1440px] mx-auto w-full flex flex-row justify-between max-sm:flex-col max-sm:items-start">
          <div className="social-network flex flex-row justify-center items-center gap-[12px]">
            <a className="p-4 " href="/">
              <img className="h-[30px] w-[30px] social-item" src={facebook} alt="img" />
            </a>
            <a className="p-4 " href="/">
              <img className="h-[30px] w-[30px] social-item" src={instagram} alt="img" />
            </a>
            <a className="p-4 " href="/">
              <img className="h-[30px] w-[30px] social-item" src={telegram} alt="img" />
            </a>
            <a className="p-4 " href="/">
              <img className="h-[30px] w-[30px] social-item" src={twitter} alt="img" />
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
    </div>

  );
};

export default Footer;
