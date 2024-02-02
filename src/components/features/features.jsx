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
const featuresData = [
  {
    id: 1,
    img: megaphone,
    title: "Mahsulotlar reklamasi",
    discription: " O’z mahsulotlaringizni ilovamiz orqali reklama qiling va oson soting"
  },
  {
    id: 2,
    img: route,
    title: "Daladan uyingizga",
    discription: " Poliz va dehqonchilik mahsulotlarini to’g’ridan-to’gri daladan sotib oling"
  },
  {
    id: 3,
    img: sack,
    title: "Qulay narx",
    discription: " Mahsulotlarni o’zingizga qulya bo’lgan narxlarda sotib oling"
  },
  {
    id: 4,
    img: magicWand,
    title: "Tushunarli dizayn",
    discription: " Ilova dizayni foydalanuvchilar uchun qulay va sodda ishlab chiqilgan"
  },
  {
    id: 5,
    img: resources,
    title: "Qulay navigatsiya",
    discription: " Har bitta element foydalanuvchi uchun qulay joyda joylashtirilganligi"
  },
  {
    id: 6,
    img: review,
    title: "Oson ro’yxatdan o’tish",
    discription: " Ilovadan tezda ortiqcha ma’lumotlarsiz ro’yxatdan o’ting"
  },
]
const Features = () => {
  return (
    <div id="features" className="features max-w-[1440px] max-sm:w-full xl:w-10/12 max-xl:w-11/12 mx-auto flex items-center flex-col pt-[100px]">
      <div className="btn flex justify-center px-[16px] py-[6px] font-[14px] text-center text-[#25b679] bg-[#ccf5e4] rounded-[29px]">
        Xususiyatlar
      </div>
      <h1 className="text-[32px] max-md:text-[29px] max-sm:text-[25px] max-sm:w-11/12 text-3xl text-center pt-[29px] font-bold">
        Ilovamiz xususiyatlari sizga
        <br />
        albatta yoqadi{" "}
      </h1>
      {/*Features max-sm qismi */}
      <div className="sm:hidden w-full h-full pt-[50px] flex flex-col items-center">
        <section className="max-w-[1440px] w-full mx-auto ">
          <div className="container card-container overflow-x-scroll whitespace-nowrap mx-auto">
            {featuresData.map(item => (
              <div key={crypto.randomUUID()} className="card-wrapper inline-flex w-[320px] h-[230px] ml-[20px] mr-5 flex-shrink-0">
                <div className="card p-3 flex flex-col justify-center items-center text-center rounded-[29px] border-[1px] border-solid border-[#dfdfe2] gap-5">
                  <img className="w-[48px] h-[48px]" src={item.img} alt="img" />
                  <div className="whitespace-normal">
                    <h1 className="text-[26px] font-bold">{item.title}</h1>
                    <p className="text-[16px] font-[400] pt-2">
                      {item.discription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="pt-[50px]">
          <img className="w-[280px]" src={istaklar2} alt="" />
        </div>
      </div>

      {/*Features smdan keyingi qismi */}
      <div className="flex max-sm:hidden lg:flex-row max-lg:flex-col justify-center items-center pt-[64px] lg:gap-10 gap-20 text-[#040303] ">
        <div className="lg:flex max-lg:grid max-lg:grid-cols-2  max-md:grid-cols-1 flex-col gap-[50px] ">
          <div className="w-full max-lg:w-4/5 max-sm:w-11/12 mx-auto h-full flex lg:flex-row md:flex-col justify-center items-center">
            <img src={megaphone} alt="img" />
            <div className="pl-[32px] md:flex md:flex-col md:justify-center lg:justify-start md:items-center lg:items-start md:text-center lg:text-start">
              <h1 className="text-[26px] font-bold">Mahsulotlar reklamasi</h1>
              <p className="text-[16px] font-[400] ">
                O’z mahsulotlaringizni ilovamiz orqali reklama qiling va oson
                soting
              </p>
            </div>
          </div>
          <div className="w-full max-lg:w-4/5 max-sm:w-11/12 mx-auto h-full flex lg:flex-row md:flex-col justify-center items-center">
            <img src={route} alt="img" />
            <div className="pl-[32px] md:flex md:flex-col md:justify-center lg:justify-start md:items-center lg:items-start md:text-center lg:text-start">
              <h1 className="text-[26px] font-bold">Daladan uyingizga</h1>
              <p className="text-[16px] font-[400] ">
                Poliz va dehqonchilik mahsulotlarini to’g’ridan-to’gri daladan
                sotib oling
              </p>
            </div>
          </div>
          <div className="w-full max-lg:w-4/5 max-sm:w-11/12 mx-auto h-full flex lg:flex-row md:flex-col justify-center items-center">
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
          <img className="w-[400px] max-sm:w-[250px] max-md:w-[280px]" src={istaklar2} alt="" />
        </div>
        <div className="lg:flex max-lg:grid max-lg:grid-cols-2  max-md:grid-cols-1 flex-col gap-[50px] ">
          <div className="w-full max-lg:w-4/5 max-sm:w-11/12 mx-auto h-full flex lg:flex-row md:flex-col justify-center items-center">
            <img src={magicWand} alt="img" />
            <div className="pl-[32px] md:flex md:flex-col md:justify-center lg:justify-start md:items-center lg:items-start md:text-center lg:text-start">
              <h1 className="text-[26px] font-bold">Tushunarli dizayn</h1>
              <p className="text-[16px] font-[400] ">
                Ilova dizayni foydalanuvchilar uchun qulay va sodda ishlab
                chiqilgan
              </p>
            </div>
          </div>
          <div className="w-full max-lg:w-4/5 max-sm:w-11/12 mx-auto h-full flex lg:flex-row md:flex-col justify-center items-center">
            <img src={resources} alt="img" />
            <div className="pl-[32px] md:flex md:flex-col md:justify-center lg:justify-start md:items-center lg:items-start md:text-center lg:text-start">
              <h1 className="text-[26px] font-bold">Qulay navigatsiya</h1>
              <p className="text-[16px] font-[400] ">
                Har bitta element foydalanuvchi uchun qulay joyda
                joylashtirilganligi
              </p>
            </div>
          </div>
          <div className="w-full max-lg:w-4/5 max-sm:w-11/12 mx-auto h-full flex lg:flex-row md:flex-col justify-center items-center">
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
        <h1 className="text-[32px] max-md:text-[29px] max-sm:text-[23px] text-[#fff] font-bold text-center pt-[29px] w-11/12">
          Tizimning ishlashi: uzluksiz funksionallik <br />
          uchun asosiy jarayonlarni ochish
        </h1>
        <div className="max-sm:w-4/5 sm:w-4/5 lg:flex sm:grid grid-cols-2 max-sm:flex max-sm:flex-col max-sm:justify-center flex-row items-center lg:gap-[150px] sm:gap-x-[100px] gap-y-[50px] mt-[50px] mb-12">
          <div className="max-sm:w-full sm:w-11/12 relative h-full flex flex-col justify-start gap-4 max-sm:justify-center max-sm:items-center  max-sm:text-center">
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
          <div className="max-sm:w-full sm:w-11/12 relative h-full flex flex-col justify-start gap-4 max-sm:justify-center max-sm:items-center  max-sm:text-center">
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
          <div className="max-sm:w-full sm:w-11/12 relative h-full flex flex-col justify-start gap-4 max-sm:justify-center max-sm:items-center  max-sm:text-center">
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
