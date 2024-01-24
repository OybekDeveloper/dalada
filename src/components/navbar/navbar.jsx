import React from 'react'
import logo1 from '../image/Subtract.svg'
import logo2 from '../image/Union.svg'
import './navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar top-0 left-0 fixed w-full flex flex-row items-center h-[83px] justify-between px-[96px] z-[999]'>
        <div className="logo flex flex-row justify-center items-center">
          <img src={logo2} alt="logo" />
          <img src={logo1} alt="logo" />
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
            lenguage
        </div>
    </div>
  )
}

export default Navbar