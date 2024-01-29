import React, { useState } from "react";
import logo1 from "../image/Subtract (1).svg";
import logo2 from "../image/Subtract (2).svg";
import logo3 from "../image/Union.svg";
import menuopen from "./menuopen.svg";
import menuclose from "./menuclose.svg";
import uzb from './uzbekistán.svg'
import frame from './Frame.svg'
import { motion, useAnimation } from "framer-motion";
import "./navbar.scss";
const translations = [
  {
    id: 1,
    leng: {
      title: "O'zbek",
      content: ["O'zbek", "Rus", "Eng"],
    },
  },
  {
    id: 2,
    leng: {
      title: "Rus",
      content: ["O'zbek", "Rus", "Eng"],
    }
  },
  {
    id: 3,
    leng: {
      title: "Eng",
      content: ["O'zbek", "Rus", "Eng"],
    }
  }
]
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLengOpen, setIsLengOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("O'zbek");
  const controls = useAnimation();

  const handleItemClick = () => {
    controls.start({
      x: isOpen ? "100%" : 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    });
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar top-0 left-0 fixed w-full flex flex-row items-center h-[83px] justify-between px-[96px] max-lg:px-[20px] z-[999]">
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
            <img width={16} height={16} src={uzb} alt="fsf" />
            <p className="font-[500] text-[16px] w-[50px]">{selectedLanguage}</p>
            <img className={`${isLengOpen && 'leng-active'} img w-[16px] h-[16px]`} src={frame} alt="fsfaf" />
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
            {translations?.map(item=>(
              <p key={item.id} onClick={()=>{setSelectedLanguage(item.leng.title);setIsLengOpen(false)}} className="">
                {item.leng.title}
              </p>
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
  );
};

export default Navbar;
