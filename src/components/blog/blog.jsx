import React from "react";
import img1 from "./Image (1).png";
import img2 from "./Image (2).png";
import img3 from "./Image.png";
import arrow from "./arrow.svg";
import "./blog.scss";
const Blog = () => {
    return (
        <div id="blog" className="blog relative w-full h-full lg:pb-[100px] pt-[30px]">
            <div className="background w-full h-full absolute flex justify-center items-center z-[-1]"></div>
            <div className="blog flex flex-col justify-center items-center z-[10]  pt-[64px] ">
                <div className="btn flex justify-center px-[16px] py-[6px] font-[14px] text-center text-[#25b679] bg-[#ccf5e4] rounded-[29px]">
                    Blog
                </div>
                <h1 className="text-[32px] font-bold text-[#040303] pt-[18px]  text-center ">
                    Dehqon va fermerlarga agronomlardan
                    <br />
                    foydali maslahatlar
                </h1>
                <div className="xl:flex max-xl:grid  max-xl:grid-cols-2 max-md:grid-cols-1 flex-row justify-center gap-[48px] pt-[64px]">
                    <div className="flex flex-col mb-[100px] w-full  justify-center items-center relative">
                        <img width={"384px"} src={img3} alt="" />
                        <div className="w-[320px]  blogimg top-[144px] absolute p-[16px] flex flex-col justify-between">
                            <h1 className="text-[#040303] text-[18px] font-[500]">
                                Olma, nok va olcha ko’chatlari parvarishi haqida
                            </h1>
                            <p className="text-[16px] text-[#040303] opacity-[0.6] font-[400]">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id es
                            </p>
                            <div className=" flex flex-row justify-between ">
                                <p className="font-[400] text-[14px] ">22 Oct, 2020</p>
                                <button className="btn flex flex-row justify-center items-center gap-2">
                                    <p className="text-[#2562B6] text-[16px] font-[400]">
                                        Batafsil
                                    </p>
                                    <img width={"20px"} height={"20px"} src={arrow} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-[100px] w-full  justify-center items-center relative">
                        <img width={"384px"} src={img1} alt="" />
                        <div className="w-[320px]  blogimg top-[144px] absolute p-[16px] flex flex-col justify-between">
                            <h1 className="text-[#040303] text-[18px] font-[500]">
                                Kartoshkadagi turli kasalliklarning
                                oldini olish usullari
                            </h1>
                            <p className="text-[16px] text-[#040303] opacity-[0.6] font-[400]">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
                            </p>
                            <div className=" flex flex-row justify-between ">
                                <p className="font-[400] text-[14px] ">8 Sep, 2020</p>
                                <button className="btn flex flex-row justify-center items-center gap-2">
                                    <p className="text-[#2562B6] text-[16px] font-[400]">
                                        Batafsil
                                    </p>
                                    <img width={"20px"} height={"20px"} src={arrow} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-[100px] w-full  justify-center items-center relative">
                        <img width={"384px"} src={img2} alt="" />
                        <div className="w-[320px]  blogimg top-[144px] absolute p-[16px] flex flex-col justify-between">
                            <h1 className="text-[#040303] text-[18px] font-[500]">
                                Uzum yetishtirishda ko’pchilik
                                qiladigan xatolar
                            </h1>
                            <p className="text-[16px] text-[#040303] opacity-[0.6] font-[400]">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
                            </p>
                            <div className=" flex flex-row justify-between ">
                                <p className="font-[400] text-[14px] ">1 Feb, 2020</p>
                                <button className="btn flex flex-row justify-center items-center gap-2">
                                    <p className="text-[#2562B6] text-[16px] font-[400]">
                                        Batafsil
                                    </p>
                                    <img width={"20px"} height={"20px"} src={arrow} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
