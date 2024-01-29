import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import appstore from "../image/download-on-the-app-store-apple-logo.svg";
import googleplay from "../image/google-play-badge-logo.svg";
import istaklar1 from "../image/istaklar1.png";
import istaklar2 from "../image/istaklar2.png";
import istaklar3 from "../image/istaklar3.png";
import Features from "../features/features";
import About from "../about/about";
import Comments from "../comments/comments";
import Blog from "../blog/blog";
import Faq from "../faq/faq";
import Footer from "../footer/footer";
import "./app.scss";
import Loader from "../loader/loader";
const App = () => {
  const [isLoading , setIsLoading]= useState(true);

  useEffect(()=>{
    setTimeout(() => {
        setIsLoading(false);
    }, 3000);
  },[])

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <Loader />
        </div>
      ):(
      <div id="home" className="app">
        <Navbar />
        <div className="home  xl:w-10/12 md:w-11/12 mx-auto w-full flex flex-col items-center mt-[96px] lg:h-[768px] md:h-[673px] sm:h-[570px] max-sm:h-[800px] rounded-[24px] max-sm:rounded-none text-[#fff] overflow-hidden mb-[30px]">
          <h1 className="text-4xl font-[600] pt-[88px] text-center ">
            The opportunity to change lives using <br />
            blockchain technology
          </h1>
          <p className="text-base font-[500] pt-[12px] text-center">
            Security and QoS issues in blockchain enabled next-generation smart
            logistic <br /> networks: A tutorial
          </p>
          <div className="flex flex-row justify-center items-center gap-[12px]">
            <a href="https://www.apple.com/app-store/">
              <img width={150} src={appstore} alt="applogo" />
            </a>
            <a href="https://play.google.com/store">
              <img width={150} src={googleplay} alt="applogo" />
            </a>
          </div>
          <div className="h-full w-full imgs flex items-start justify-center gap-[32px]">
            <img
              className="xl:w-[320px] lg:w-[270px] md:w-[230px] sm:w-[180px] max-sm:hidden max-md:mt-[100px] mt-[200px]"
              src={istaklar1}
              alt="appfoto"
            />
            <img
              className="xl:w-[320px] lg:w-[270px] md:w-[230px] sm:w-[180px]  max-md:mt-[0] mt-[0]"
              src={istaklar2}
              alt="appfoto"
            />
            <img
              className="xl:w-[320px] lg:w-[270px] md:w-[230px] sm:w-[180px] max-sm:hidden max-md:mt-[50px] mt-[100px]"
              src={istaklar3}
              alt="appfoto"
            />
          </div>
        </div>
        <Features />
        <About />
        <Comments />
        <Blog />
        <Faq />
        <Footer />
      </div>
      )}
    </>
  );
};

export default App;
