import React from 'react'
import logo1 from '../image/Subtract (1).svg'
import logo2 from '../image/Subtract (2).svg'
import logo3 from '../image/Union.svg'
import './navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar top-0 left-0 fixed w-full flex flex-row items-center h-[83px] justify-between px-[96px] z-[999]'>
      <div className="logo flex flex-row justify-center items-center">
        <img src={logo3} alt="logo" />
        <div className='flex flex-col items-start'>
          <img src={logo1} alt="logo" />
          <img src={logo2} alt="logo" />
        </div>
      </div>
      <div className="links">
        <ul className='flex flex-row justify-between items-center gap-[40px]'>
          <li>Ilova xususiyatlari</li>
          <li>Blog</li>
          <li>Mijozlar fikrlari</li>
          <li>Ko’p beriladigan savollar</li>
        </ul>
      </div>
      <div className="lenguage">
        <div class="inline-block relative">
          <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-[26px] shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>O'zbek</option>
            <option>English</option>
            <option>Rus</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar