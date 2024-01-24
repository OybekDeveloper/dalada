import React from 'react'
import Navbar from '../navbar/navbar'
import appstore from '../image/download-on-the-app-store-apple-logo.svg'
import googleplay from  '../image/google-play-badge-logo.svg'
import istaklar1 from '../image/istaklar1.png'
import istaklar2 from '../image/istaklar2.png'
import istaklar3 from "../image/istaklar3.png"
import './app.scss'
import Features from '../features/features'
import About from '../about/about'
const App = () => {
  return (
    <div className='app px-[96px] container'>
        <Navbar/>
        <div className="home   flex flex-col items-center mt-[96px] h-[768px] rounded-[24px] text-[#fff] overflow-hidden mb-[30px]">
            <h1 className='text-4xl font-[600] pt-[88px] text-center '>The opportunity to change lives using <br/>blockchain technology</h1>
            <p className='text-base font-[500] pt-[12px] text-center'>Security and QoS issues in blockchain enabled next-generation smart logistic <br/> networks: A tutorial</p>
            <div className='flex flex-row justify-center items-center gap-[12px]'>
                <img width={150}  src={appstore} alt="applogo" />
                <img width={150}  src={googleplay} alt="applogo" />
            </div>
            <div className='h-full w-full imgs flex items-start justify-center gap-[32px]'>
                <img className=' mt-[200px]' src={istaklar1} alt="appfoto" />
                <img className=" mt-[0]" src={istaklar2} alt="appfoto" />
                <img className=" mt-[100px]" src={istaklar3} alt="appfoto" />
            </div>
        </div>
        <Features/>
        <About/>
    </div>
  )
}

export default App