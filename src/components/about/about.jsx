import React from "react";
import img1 from "../image/istaklar3.png";
import img2 from "../image/istaklar1.png";
import img3 from "../image/istaklar2.png";
import way1 from "./img/way1.svg";
import way2 from "./img/way2.svg";
import appstore from "../image/AppStore1.svg";
import playmarket from "../image/PlayMarket.svg";
import appgalery from "../image/AppGallery.svg";
import qr from "./img/ar.svg";
import "./about.scss";
const About = () => {
  return (
    <div id="about" className="about max-w-[1440px] xl:w-10/12 md:w-11/12 mx-auto flex flex-col items-center  w-full mb-10 pt-[100px] overflow-hidden">
      <div className="btn flex justify-center px-[16px] py-[6px] font-[14px] text-center text-[#25b679] bg-[#ccf5e4] rounded-[29px]">
        Ilova haqida
      </div>
      <h1 className="text-[32px] font-bold text-center pt-[30px]">
        Bizning “<span className="text-[#25b679]">Daladan</span>” ilovamizda o’z{" "}
        <br />
        mahsulotlaringizni soting va sotib oling!
      </h1>
      <div className="mt-[100px] flex flex-col justify-center items-center max-sm:gap-20">
        <div className="flex flex-row max-sm:gap-5 max-sm:flex-col justify-around items-center lg:gap-[128px] md:gap-[50px] ">
          <div className="relative flex justify-center items-center">
            <img
              className="z-[10] xl:w-[280px] lg:w-[270px] md:w-[250px] sm:w-[200px] max-md:w-[250px]"
              src={img1}
              alt="asdf"
            />
            <div className="w-[418px] max-lg:w-[300px] bgeffect absolute top-0"></div>
          </div>
          <div className="flex flex-col w-[576px] max-sm:w-full max-md:w-[400px] z-10 px-4">
            <h1 className="md:text-[23px] max-md:text-[18px] text-[#040303] font-bold w-3/4 max-sm:pr-0 max-sm:text-[24px]">
              Ilovadan telefon raqamingiz orqali ro’yxatdan o’ting
            </h1>
            <p className="text-[18px] text-[#040303] font-[400] opacity-[0.7] pt-[20px]">
              Ilovadan foydalanish uchun shaxsiy telefon raqamingiz orqali
              ro’yxatdan o’ting. Keyin sizga raqamingizni tasdiqlash uchun 4
              xonali sms-kod yuboriladi. Mana shu sms-kodni kiriting va
              ro’yxatdan o’tishni yakunlang
            </p>
          </div>
        </div>
        <img
          className="w-3/4 max-md:w-3/5 max-sm:hidden"
          src={way1}
          alt=""
        />
        <div className="flex flex-row max-sm:gap-5 max-sm:flex-col-reverse justify-around items-center lg:gap-[128px] md:gap-[50px] ">
          <div className="flex flex-col w-[576px] max-sm:w-full max-md:w-[400px] z-10 px-4">
            <h1 className="md:text-[23px] max-md:text-[18px] text-[#040303] font-bold w-3/4 max-sm:pr-0 max-sm:text-[24px]">
              Istaklar bo’limining mavjudligi
            </h1>
            <p className="text-[18px] text-[#040303] font-[400] opacity-[0.7] pt-[20px]">
              Sizga yoqqan har bitta mahsulotni Istaklar bo’limiga saqlab
              qo’ying. Bu esa sizga keyingi safar yoqqan mahsulotni izlash uchun
              ortiqcha vaqt sarflamaslikka imkoniyat yaratadi
            </p>
          </div>
          <div className="relative flex justify-center items-center">
            <img
              className="z-[10] xl:w-[280px] lg:w-[270px] md:w-[250px] sm:w-[200px] max-md:w-[250px]"
              src={img2}
              alt="asdf"
            />
            <div className="w-[418px] max-lg:w-[300px] bgeffect absolute top-0"></div>
          </div>
        </div>
        <img
          className="w-3/4 max-md:w-3/5 max-sm:hidden"
          src={way2}
          alt=""
        />
        <div className="flex flex-row max-sm:gap-5 max-sm:flex-col justify-around items-center lg:gap-[128px] md:gap-[50px] ">
          <div className="relative flex justify-center items-center">
            <img
              className="z-[10] xl:w-[280px] lg:w-[270px] md:w-[250px] sm:w-[200px] max-md:w-[250px]"
              src={img3}
              alt="asdf"
            />
            <div className="w-[418px] max-lg:w-[300px] bgeffect absolute top-0"></div>
          </div>
          <div className="flex flex-col w-[576px] max-sm:w-full max-md:w-[400px] z-10 px-4">
            <h1 className="md:text-[23px] max-md:text-[18px] text-[#040303] font-bold w-3/4 max-sm:pr-0 max-sm:text-[24px]">
              Tushunarli va qulay bo’lgan bosh sahifa
            </h1>
            <p className="text-[18px] text-[#040303] font-[400] opacity-[0.7] pt-[20px]">
              Bosh sahifada siz o’zingizga kerakli bo’lgan kategoriya va
              mahsulotlarni tez va oson topshingiz mumkin. Har bitta mahsulot
              haqida tushunarli ma’lumotlarga ega bo’lishingiz mumkin
            </p>
          </div>
        </div>
      </div>
      {/* ilovani yuklash havolasi */}
      <div className="relative w-full  pt-[100px] max-sm:pt-[20px] mb-[100px]">
        <div className="instal w-full flex flex-col items-center gap-4 mt-[100px]">
          <h1 className="text-[32px] font-bold text-center text-[#040303] ">
            Ilovani tezda yuklab oling{" "}
          </h1>
          <p className="w-1/2 max-md:w-3/4 text-[16px] opacity-[0.7] font-[400] text-center text-[#040303]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, to
          </p>
          <div className="flex justify-center items-center py-4 flex-col  sm:flex-row gap-[32px] *: ">
            <a  href="https://www.apple.com/app-store/">
              <img className="w-[170px]" src={appstore} alt="logo" /> 
            </a>
            <a href="https://play.google.com/store">
              <img className="w-[180px]" src={playmarket} alt="logo" /> 
            </a>
            <a href="https://appgallery.huawei.com/Featured">
              <img className="w-[180px]" src={appgalery} alt="logo" />  
            </a>
          </div>
          <h1 className="text-[#040303] text-[23px] font-[500] text-center">
            QR-kodni skanerlang va qulay
            <br />
            usulda yuklab oling
          </h1>
          <div className="qr flex justify-center items-center">
            <img src={qr} alt="qr" />
          </div>
        </div>
        <div className="opc rounded-[32px] max-md:rounded-none top-0 left-0 absolute h-full w-full z-[-1] mt-[100px]"></div>
      </div>
    </div>
  );
};

export default About;
