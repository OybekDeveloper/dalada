import React, { useState } from "react";
import logo1 from "../image/Subtract (1).svg";
import logo2 from "../image/Subtract (2).svg";
import logo3 from "../image/Union.svg";
import menuopen from "./menuopen.svg";
import menuclose from "./menuclose.svg";
import { motion, useAnimation } from "framer-motion";
import "./navbar.scss";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            <a href="#comments">Mijo zlar fikrlari</a>
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
        <div class="inline-block relative">
          <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-[26px] shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>O'zbek</option>
            <option>English</option>
            <option>Rus</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <div className="relatiive links">
          <motion.ul
            initial={{ opacity: 0, x: "150%" }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
            exit={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:hidden link-ul p-4 right-0 top-[50px] text-[18px]  absolute flex flex-col justify-start items-start gap-[20px] "
          >
            <a href="#features">
              <li onClick={() => setIsOpen(false)}>Ilova xususiyatlari</li>
            </a>
            <a href="#comments">
              <li onClick={() => setIsOpen(false)}>Mijozlar fikrlari</li>
            </a>
            <a href="#blog">
              <li onClick={() => setIsOpen(false)}>Blog</li>
            </a>

            <a href="#faq">
              <li onClick={() => setIsOpen(false)}>
                Ko’p beriladigan savollar
              </li>
            </a>
          </motion.ul>
        </div>

        <div className="lg:hidden w-[32px] h-[32px]">
          {isOpen ? (
            <img
              onClick={() => setIsOpen(!isOpen)}
              src={menuclose}
              alt="menu"
            />
          ) : (
            <img onClick={handleItemClick} src={menuopen} alt="menu" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
