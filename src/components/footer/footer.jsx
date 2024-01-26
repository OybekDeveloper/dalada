import React from "react";
import logo1 from "../image/Subtract (1).svg";
import logo2 from "../image/Subtract (2).svg";
import logo3 from "../image/Union.svg";
import appstore from "./img/appstor.svg";
import playmarket from "./img/playmarket.svg";
import appgalery from "./img/appgalery.svg";
import instagram from "./img/instagram.svg";
import telegram from "./img/telegram.svg";
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import line from "./img/line.svg";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="w-full flex flex-col  footer absolute left-0 px-[96px] mt-[180px] ">
      <div className="aloqa  xl:flex lg:grid grid-cols-2 flex-row  items-center justify-around gap-20 py-[50px]">
        <div className="flex flex-col justify-between items-start gap-[21px]">
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
        <div className="links">
          <ul className="flex flex-col justify-start items-start gap-3 text-[#040303] text-[18px] font-[400]">
            <li>Ilova xususiyatlari</li>
            <li>Blog</li>
            <li>Mijozlar fikrlari</li>
            <li>Ko’p beriladigan savollar</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center ">
          <h1 className="font-[500] text-[20px] ">Ilovani yuklab oling</h1>
          <div className="flex flex-row justify-between gap-10 py-[10px] ">
            <div className="flex flex-row hover:bg-[#29cc88] justify-center items-center bg-[#25B679] rounded-[7px] pl-[20px] pr-[24px] py-[10px] gap-2">
              <img src={appstore} alt="app" />
              <h1 className="text-[#fff] text-[20px] font-[500] text-center">
                AppStore
              </h1>
            </div>
            <div className="flex flex-row hover:bg-[#29cc88] justify-center items-center bg-[#25B679] rounded-[7px] pl-[20px] pr-[24px] py-[10px] gap-2">
              <img src={playmarket} alt="app" />
              <h1 className="text-[#fff] text-[20px] font-[500] text-center">
                PlayMarket
              </h1>
            </div>
            <div className="flex flex-row hover:bg-[#29cc88] justify-center items-center bg-[#25B679] rounded-[7px] pl-[20px] pr-[24px] py-[10px] gap-2">
              <img src={appgalery} alt="app" />
              <h1 className="text-[#fff] text-[20px] font-[500] text-center">
                AppGallery
              </h1>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <img src={line} alt="" />
      <div className="flex flex-row justify-between">
        <div className="social-network flex flexrow justify-center items-center gap-[12px]">
          <a className="p-4 w-[56px] h-[56px]" href="/">
            <img src={facebook} alt="" />
          </a>
          <a className="p-4 w-[56px] h-[56px]" href="/">
            <img src={instagram} alt="" />
          </a>
          <a className="p-4 w-[56px] h-[56px]" href="/">
            <img src={telegram} className="" alt="" />
          </a>
          <a className="p-4 w-[56px] h-[56px]" href="/">
            <img src={twitter} alt="" />
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
