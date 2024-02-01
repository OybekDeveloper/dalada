import React, { useEffect, useState } from "react";
import logo1 from "../image/Subtract (1).svg";
import logo2 from "../image/Subtract (2).svg";
import logo3 from "../image/Union.svg";
import menuopen from "./img/menuopen.svg";
import menuclose from "./img/menuclose.svg";
import uzb from "./img/uzbekistán.svg";
import rus from "./img/russian.svg";
import eng from "./img/eng1.svg";
import frame from "./img/Frame.svg";
import { motion, useAnimation } from "framer-motion";
import "./navbar.scss";
const translations = [
  {
    id: 1,
    leng: {
      title: "O'zbek",
      url: uzb,
      content: ["O'zbek", "Rus", "Eng"],
    },
  },
  {
    id: 2,
    leng: {
      title: "Русский",
      url: rus,
    },
  },
  {
    id: 3,
    leng: {
      title: "English",
      url: eng,
    },
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLengOpen, setIsLengOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    title: "O'zbek",
    url: uzb,
  });
  const [defaultLanguage, setDefaultLanguage] = useState([]);
  const controls = useAnimation();

  useEffect(() => {
    const newData = translations.filter(
      (item) => item.leng.title !== selectedLanguage.title
    );
    setDefaultLanguage(newData);
  }, [selectedLanguage.title]);

  const handleItemClick = () => {
    controls.start({
      x: isOpen ? "100%" : 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    });
    setIsOpen(!isOpen);
  };
  return (
    <div className="top-0 fixed w-full navbar z-[1000]">
      <div className=" mx-auto max-xl:w-11/12 xl:w-10/12 max-w-[1440px] h-[83px] flex flex-row items-center justify-between ">
        <a href="#home">
          <div className="logo flex flex-row justify-center items-center">
            <img src={logo3} alt="logo" />
            <div className="flex flex-col items-start">
              <img src={logo1} alt="logo" />
              <img src={logo2} alt="logo" />
            </div>
          </div>
        </a>
        <div className="links max-lg:hidden">
          <ul className="flex flex-row justify-between items-center gap-[40px]">
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
        <div className="relative lenguage flex flex-row justify-center items-center gap-4">
          <div className="relative">
            <div
              className="flex flex-row justify-center items-center gap-[8px] p-[8px] rounded-[26px] leng"
              onClick={() => setIsLengOpen(!isLengOpen)}
            >
              <img width={16} height={16} src={selectedLanguage.url} alt="fsf" />
              <p className="font-[500] text-[14px] w-[50px]">
                {selectedLanguage.title}
              </p>
              <img
                className={`${isLengOpen && "leng-active"} img w-[16px] h-[16px]`}
                src={frame}
                alt="fsfaf"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{
                opacity: isLengOpen ? 1 : 0,
                y: isLengOpen ? "10%" : "-10%",
              }}
              exit={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full leng-item  p-2 right-0 top-[50px] text-[18px]  absolute flex flex-col justify-start items-start gap-[12px] "
            >
              {defaultLanguage?.map((item) => (
                <div
                  className="leng-content flex items-center gap-1"
                  key={crypto.randomUUID()}
                  onClick={() => {
                    setSelectedLanguage(item.leng);
                    setIsLengOpen(false);
                  }}
                >
                  <img
                    width={16}
                    height={16}
                    src={item.leng.url}
                    alt="lenguage"
                  />
                  <p className="text-[14px] font-[500]">{item.leng.title}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="lg:hidden w-[32px] h-[32px] relatiive">
            <img
              onClick={isOpen ? () => setIsOpen(!isOpen) : handleItemClick}
              src={isOpen ? menuclose : menuopen}
              alt="menu"
            />
            <motion.ul
              initial={{ opacity: 0, x: "150%" }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
              exit={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:hidden link-ul p-4 right-0 top-[50px] text-[18px]  absolute flex flex-col justify-start items-start gap-[12px] "
            >
              <a className="w-full" href="#features">
                <li onClick={() => setIsOpen(false)}>Ilova xususiyatlari</li>
              </a>
              <a className="w-full" href="#about">
                <li onClick={() => setIsOpen(false)}>Haqida</li>
              </a>
              <a className="w-full" href="#comments">
                <li onClick={() => setIsOpen(false)}>Mijozlar fikrlari</li>
              </a>
              <a className="w-full" href="#blog">
                <li onClick={() => setIsOpen(false)}>Blog</li>
              </a>

              <a className="w-full" href="#faq">
                <li onClick={() => setIsOpen(false)}>
                  Ko’p beriladigan savollar
                </li>
              </a>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
