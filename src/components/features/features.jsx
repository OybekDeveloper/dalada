import React from "react";
import istaklar2 from "../image/istaklar2.png";
import arrow1 from "./featuresimg/arrow1.svg";
import arrow2 from "./featuresimg/arrow2.svg";
import {
  magicWand,
  megaphone,
  resources,
  review,
  route,
  sack,
} from "./featuresimg";

import "./features.scss";
const Features = () => {
  return (
    <div id="features" className="features max-w-[1440px] w-full xl:w-10/12 md:w-11/12 mx-auto flex items-center flex-col pt-[100px]">
      <div className="btn flex justify-center px-[16px] py-[6px] font-[14px] text-center text-[#25b679] bg-[#ccf5e4] rounded-[29px]">
        Xususiyatlar
      </div>
      <h1 className="text-3xl text-center pt-[12px] font-bold">
        Ilovamiz xususiyatlari sizga
        <br />
        albatta yoqadi{" "}
      </h1>
      <div className="flex lg:flex-row max-lg:flex-col justify-center items-center pt-[64px] lg:gap-10 gap-20 text-[#040303] ">
        <div className="lg:flex max-lg:grid max-lg:grid-cols-2  max-md:grid-cols-1 flex-col gap-[100px] ">
          <div className="w-full max-lg:w-3/4 mx-auto h-[88px] flex lg:flex-row md:flex-col justify-center items-center">
            <img src={megaphone} alt="img" />
            <div className="pl-[32px] md:flex md:flex-col md:justify-center lg:justify-start md:items-center lg:items-start md:text-center lg:text-start">
              <h1 className="text-[26px] font-bold">Mahsulotlar reklamasi</h1>
              <p className="text-[16px] font-[400] ">
                O’z mahsulotlaringizni ilovamiz orqali reklama qiling va oson
                soting
              </p>
            </div>
          </div>
          <div className="w-full max-lg:w-3/4 mx-auto h-[88px] flex lg:flex-row md:flex-col justify-center items-center">
            <img src={route} alt="img" />
            <div className="pl-[32px] md:flex md:flex-col md:justify-center lg:justify-start md:items-center lg:items-start md:text-center lg:text-start">
              <h1 className="text-[26px] font-bold">Daladan uyingizga</h1>
              <p className="text-[16px] font-[400] ">
                Poliz va dehqonchilik mahsulotlarini to’g’ridan-to’gri daladan
                sotib oling
              </p>
            </div>
          </div>
          <div className="w-full max-lg:w-3/4 mx-auto h-[88px] flex lg:flex-row md:flex-col justify-center items-center">
            <img src={sack} alt="img" />
            <div className="pl-[32px] md:flex md:flex-col md:justify-center lg:justify-start md:items-center lg:items-start md:text-center lg:text-start">
              <h1 className="text-[26px] font-bold">Qulay narx</h1>
              <p className="text-[16px] font-[400] ">
                Mahsulotlarni o’zingizga qulya bo’lgan narxlarda sotib oling
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="w-[400px] max-sm:w-[320px]" src={istaklar2} alt="" />
        </div>
        <div className="lg:flex max-lg:grid max-lg:grid-cols-2  max-md:grid-cols-1 flex-col gap-[100px] ">
          <div className="w-full max-lg:w-3/4 mx-auto h-[88px] flex lg:flex-row md:flex-col justify-center items-center">
            <img src={magicWand} alt="img" />
            <div className="pl-[32px] md:flex md:flex-col md:justify-center lg:justify-start md:items-center lg:items-start md:text-center lg:text-start">
              <h1 className="text-[26px] font-bold">Tushunarli dizayn</h1>
              <p className="text-[16px] font-[400] ">
                Ilova dizayni foydalanuvchilar uchun qulay va sodda ishlab
                chiqilgan
              </p>
            </div>
          </div>
          <div className="w-full max-lg:w-3/4 mx-auto h-[88px] flex lg:flex-row md:flex-col justify-center items-center">
            <img src={resources} alt="img" />
            <div className="pl-[32px] md:flex md:flex-col md:justify-center lg:justify-start md:items-center lg:items-start md:text-center lg:text-start">
              <h1 className="text-[26px] font-bold">Qulay navigatsiya</h1>
              <p className="text-[16px] font-[400] ">
                Har bitta element foydalanuvchi uchun qulay joyda
                joylashtirilganligi
              </p>
            </div>
          </div>
          <div className="w-full max-lg:w-3/4 mx-auto h-[88px] flex lg:flex-row md:flex-col justify-center items-center">
            <img src={review} alt="img" />
            <div className="pl-[32px] md:flex md:flex-col md:justify-center lg:justify-start md:items-center lg:items-start md:text-center lg:text-start">
              <h1 className="text-[26px] font-bold">Oson ro’yxatdan o’tish</h1>
              <p className="text-[16px] font-[400] ">
                Ilovadan tezda ortiqcha ma’lumotlarsiz ro’yxatdan o’ting
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* qanday ishlaydi  */}
      <div className="mt-[100px] lg:h-[570px] md:h-full rounded-[24px] max-sm:rounded-none bg-[#25B679] w-full flex flex-col items-center  mb-[20px] pb-2">
        <div className="btn mt-[64px] flex justify-center px-[16px] py-[6px] text-[14px] text-center text-[#25b679] bg-[#FFF] rounded-[29px]">
          Qanday ishlaydi?
        </div>
        <h1 className="text-[32px] text-[#fff] font-bold text-center pt-[30px]">
          Tizimning ishlashi: uzluksiz funksionallik <br />
          uchun asosiy jarayonlarni ochish
        </h1>
        <div className="max-md:w-2/3 max-sm:w-4/5 lg:flex md:grid grid-cols-2 max-md:flex max-md:flex-col max-md:justify-center flex-row items-center lg:gap-[150px] md:gap-x-[150px] md:gap-y-[50px] max-md:gap-y-[50px] mt-[50px]">
          <div className="xl:w-[230px] lg:w-[180px] md:w-[200px] max-md:w-4/5 max-sm:w-11/12 relative md:h-[220px] flex flex-col justify-start gap-4 max-sm:justify-center max-sm:items-center  max-sm:text-center">
            <h1 className="text-[26px]  w-[55px] h-[56px] items-center rounded-full px-[13px] py-[10px] font-bold text-[#25B679] bg-white p-[10px] flex justify-center">
              01
            </h1>
            <h2 className="text-[23px] text-white font-bold">Yuklab olish</h2>
            <p className="text-[16px] text-white font-[400] opacity-[0.85]">
              Ilovamizni PlayMarket yoki AppStoredan yuklab oling
            </p>
            <div className="absolute max-lg:hidden px-2 right-[-100px] top-[30px]">
              <img width={"160px"} src={arrow1} alt="arrow" />
            </div>
          </div>
          <div className="xl:w-[230px] lg:w-[180px] md:w-[200px] max-md:w-4/5 max-sm:w-11/12 relative md:h-[220px] flex flex-col justify-start gap-4 max-sm:justify-center max-sm:items-center  max-sm:text-center">
            <h1 className="text-[26px]  w-[55px] h-[56px] items-center rounded-full px-[13px] py-[10px] font-bold text-[#25B679] bg-white p-[10px] flex justify-center">
              02
            </h1>
            <h2 className="text-[23px] text-white font-bold">
              Ro’yxatdan o’tish
            </h2>
            <p className="text-[16px] text-white font-[400] opacity-[0.85]">
              Yuklab olgandan keyin ilovamizga kirib undan telefon raqamingiz
              bilan ro’yxatdan o’ting
            </p>
            <div className="absolute max-lg:hidden right-[-100px] top-[-20px]">
              <img width={"160px"} src={arrow2} alt="arrow" />
            </div>
          </div>
          <div className="xl:w-[230px] lg:w-[180px] md:w-[200px] max-md:w-4/5 max-sm:w-11/12 relative md:h-[220px] flex flex-col justify-start gap-4 max-sm:justify-center max-sm:items-center  max-sm:text-center">
            <h1 className="text-[26px]  w-[55px] h-[56px] items-center rounded-full px-[13px] py-[10px] font-bold text-[#25B679] bg-white p-[10px] flex justify-center">
              03
            </h1>
            <h2 className="text-[23px] text-white font-bold">Tugallandi!</h2>
            <p className="text-[16px] text-white font-[400] opacity-[0.85]">
              Ilovaga kirib barcha xizmatlardan foydalanish mumkin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
