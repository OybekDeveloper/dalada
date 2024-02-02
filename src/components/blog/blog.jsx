import React from "react";
import img1 from "./Image (1).png";
import img2 from "./Image (2).png";
import img3 from "./Image.png";
import arrow from "./arrow.svg";
import "./blog.scss";
const Blog = () => {
    return (
        //<div id="blog" className="blog relative w-full h-full lg:pb-[100px] pt-[30px]">
        //     <div className="background w-full h-full absolute flex justify-center items-center z-[-1]"></div>
        //     <div className="blog w-full flex flex-col justify-center items-center z-[10]  pt-[64px] ">
        //         <div className="btn flex justify-center px-[16px] py-[6px] font-[14px] text-center text-[#25b679] bg-[#ccf5e4] rounded-[29px]">
        //             Blog
        //         </div>
        //         <h1 className="text-[32px] font-bold text-[#040303] pt-[25px]  text-center ">
        //             Dehqon va fermerlarga agronomlardan
        //             <br />
        //             foydali maslahatlar
        //         </h1>
        //         <div className="flex w-[1200px] overflow-x-scroll bg-red-400">
        //             <div className="flex flex-col mb-[100px] w-[400px]  justify-center items-center relative">
        //                 <img width={"384px"} src={img3} alt="" />
        //                 <div className="w-[320px]  blogimg top-[144px] absolute p-[16px] flex flex-col justify-between">
        //                     <h1 className="text-[#040303] text-[18px] font-[500]">
        //                         Olma, nok va olcha ko’chatlari parvarishi haqida
        //                     </h1>
        //                     <p className="text-[16px] text-[#040303] opacity-[0.6] font-[400]">
        //                         Excepteur sint occaecat cupidatat non proident, sunt in culpa
        //                         qui officia deserunt mollit anim id es
        //                     </p>
        //                     <div className=" flex flex-row justify-between ">
        //                         <p className="font-[400] text-[14px] ">22 Oct, 2020</p>
        //                         <button className="btn flex flex-row justify-center items-center gap-2">
        //                             <p className="text-[#2562B6] text-[16px] font-[400]">
        //                                 Batafsil
        //                             </p>
        //                             <img width={"20px"} height={"20px"} src={arrow} alt="" />
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="flex flex-col mb-[100px] w-[400px]  justify-center items-center relative">
        //                 <img width={"384px"} src={img1} alt="" />
        //                 <div className="w-[320px]  blogimg top-[144px] absolute p-[16px] flex flex-col justify-between">
        //                     <h1 className="text-[#040303] text-[18px] font-[500]">
        //                         Kartoshkadagi turli kasalliklarning
        //                         oldini olish usullari
        //                     </h1>
        //                     <p className="text-[16px] text-[#040303] opacity-[0.6] font-[400]">
        //                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
        //                     </p>
        //                     <div className=" flex flex-row justify-between ">
        //                         <p className="font-[400] text-[14px] ">8 Sep, 2020</p>
        //                         <button className="btn flex flex-row justify-center items-center gap-2">
        //                             <p className="text-[#2562B6] text-[16px] font-[400]">
        //                                 Batafsil
        //                             </p>
        //                             <img width={"20px"} height={"20px"} src={arrow} alt="" />
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="flex flex-col mb-[100px] w-[400px]  justify-center items-center relative">
        //                 <img width={"384px"} src={img2} alt="" />
        //                 <div className="w-[320px]  blogimg top-[144px] absolute p-[16px] flex flex-col justify-between">
        //                     <h1 className="text-[#040303] text-[18px] font-[500]">
        //                         Uzum yetishtirishda ko’pchilik
        //                         qiladigan xatolar
        //                     </h1>
        //                     <p className="text-[16px] text-[#040303] opacity-[0.6] font-[400]">
        //                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
        //                     </p>
        //                     <div className=" flex flex-row justify-between ">
        //                         <p className="font-[400] text-[14px] ">1 Feb, 2020</p>
        //                         <button className="btn flex flex-row justify-center items-center gap-2">
        //                             <p className="text-[#2562B6] text-[16px] font-[400]">
        //                                 Batafsil
        //                             </p>
        //                             <img width={"20px"} height={"20px"} src={arrow} alt="" />
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div id="blog" className="blog relative w-full h-full pt-[100px]">
            <div className="background w-full h-full absolute flex justify-center items-center z-[-1]"></div>
            <article className="pt-10">
                <div className="flex justify-center">
                    <h1 className="text-[#25b679] bg-[#ccf5e4] px-[16px] py-[6px] font-[14px] text-center rounded-[29px]">Blog</h1>
                </div>
                <h1 className="text-[32px] font-bold text-[#040303] pt-[25px]  text-center ">
                    Dehqon va fermerlarga agronomlardan
                    <br />
                    foydali maslahatlar
                </h1>
            </article>
            <section className="max-w-[1440px] w-11/12 mx-auto pt-10">
                <div className="container card-container  overflow-x-scroll whitespace-nowrap mx-auto">
                    <div className="card-wrapper inline-flex w-[400px] max-sm:w-[350px] h-[400px]">
                        <div className="card flex justify-center items-start relative mx-auto">
                            <img className="max-sm:w-[320px] w-[380px]" src={img1} alt="foto" />
                            <div className="w-[320px] max-sm:w-[280px] blogimg top-[144px] absolute p-[16px] flex flex-col justify-between whitespace-normal">
                                <h1 className="text-[#040303] text-[18px] font-[500]">
                                    Olma, nok va olcha ko’chatlari parvarishi haqida
                                </h1>
                                <p className="text-[16px] text-[#040303] opacity-[0.6] font-[400]">
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                    qui officia deserunt mollit anim id es
                                </p>
                                <div className="flex flex-row justify-between pt-2">
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
                    </div>
                    <div className="card-wrapper inline-flex w-[400px] max-sm:w-[350px] h-[400px]">
                        <div className="card flex justify-center items-start relative mx-auto">
                            <img className="max-sm:w-[320px] w-[380px]" src={img1} alt="foto" />
                            <div className="w-[320px] max-sm:w-[280px] blogimg top-[144px] absolute p-[16px] flex flex-col justify-between whitespace-normal">
                                <h1 className="text-[#040303] text-[18px] font-[500]">
                                    Olma, nok va olcha ko’chatlari parvarishi haqida
                                </h1>
                                <p className="text-[16px] text-[#040303] opacity-[0.6] font-[400]">
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                    qui officia deserunt mollit anim id es
                                </p>
                                <div className="flex flex-row justify-between pt-2">
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
                    </div>
                    <div className="card-wrapper inline-flex w-[400px] max-sm:w-[350px] h-[400px]">
                        <div className="card flex justify-center items-start relative mx-auto">
                            <img className="max-sm:w-[320px] w-[380px]" src={img1} alt="foto" />
                            <div className="w-[320px] max-sm:w-[280px] blogimg top-[144px] absolute p-[16px] flex flex-col justify-between whitespace-normal">
                                <h1 className="text-[#040303] text-[18px] font-[500]">
                                    Olma, nok va olcha ko’chatlari parvarishi haqida
                                </h1>
                                <p className="text-[16px] text-[#040303] opacity-[0.6] font-[400]">
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                    qui officia deserunt mollit anim id es
                                </p>
                                <div className="flex flex-row justify-between pt-2">
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
                    </div>
                    <div className="card-wrapper inline-flex w-[400px] max-sm:w-[350px] h-[400px]">
                        <div className="card flex justify-center items-start relative mx-auto">
                            <img className="max-sm:w-[320px] w-[380px]" src={img1} alt="foto" />
                            <div className="w-[320px] max-sm:w-[280px] blogimg top-[144px] absolute p-[16px] flex flex-col justify-between whitespace-normal">
                                <h1 className="text-[#040303] text-[18px] font-[500]">
                                    Olma, nok va olcha ko’chatlari parvarishi haqida
                                </h1>
                                <p className="text-[16px] text-[#040303] opacity-[0.6] font-[400]">
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                    qui officia deserunt mollit anim id es
                                </p>
                                <div className="flex flex-row justify-between pt-2">
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
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
