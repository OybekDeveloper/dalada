import React from 'react'
import img1 from '../image/istaklar3.png'
import img2 from '../image/istaklar1.png'
import img3 from '../image/istaklar2.png'
import way1 from './img/way1.svg'
import way2 from './img/way2.svg'
import appstore from './img/appstor.svg'
import playmarket from './img/playmarket.svg'
import appgalery from './img/appgalery.svg'
import qr from './img/ar.svg'
import './about.scss'
const About = () => {
    return (
        <div className='about flex flex-col items-center'>
            <div className='btn flex justify-center px-[16px] py-[6px] font-[14px] text-center text-[#25b679] bg-[#ccf5e4] rounded-[29px]'>Ilova haqida</div>
            <h1 className='text-[32px] font-bold text-center'>Bizning “<span className='text-[#25b679]'>Daladan</span>” ilovamizda o’z <br />
                mahsulotlaringizni soting va sotib oling!
            </h1>
            <div className='mt-[100px] flex flex-col justify-center items-center'>
                <div className='flex flex-row justify-around items-center gap-[128px]'>
                    <div className='relative flex justify-center items-center'>
                        <img className='z-[10]' width={'280px'} src={img1} alt="asdf" />
                        <div className='bgeffect absolute top-0'></div>
                    </div>
                    <div className='flex flex-col w-[576px]'>
                        <h1 className='text-[23px] text-[#040303] font-bold pr-[160px]'>Ilovadan telefon raqamingiz orqali ro’yxatdan o’ting</h1>
                        <p className='text-[18px] text-[@040303] font-[400] opacity-[0.7] pt-[30px]'>Ilovadan foydalanish uchun shaxsiy telefon raqamingiz orqali ro’yxatdan o’ting. Keyin sizga raqamingizni tasdiqlash uchun
                            4 xonali sms-kod yuboriladi. Mana shu sms-kodni kiriting va
                            ro’yxatdan o’tishni yakunlang</p>
                    </div>
                </div>
                <img width={'680.426px'} src={way1} alt="" />
                <div className='flex flex-row justify-around items-center gap-[128px]'>
                    <div className='flex flex-col w-[576px]'>
                        <h1 className='text-[23px] text-[#040303] font-bold pr-[160px]'>Istaklar bo’limining mavjudligi</h1>
                        <p className='text-[18px] text-[@040303] font-[400] opacity-[0.7] pt-[30px]'>Sizga yoqqan har bitta mahsulotni Istaklar bo’limiga saqlab qo’ying. Bu esa sizga keyingi safar yoqqan mahsulotni izlash uchun ortiqcha vaqt sarflamaslikka imkoniyat yaratadi</p>
                    </div>
                    <div className='relative flex justify-center items-center'>
                        <img className='z-[10]' width={'280px'} src={img2} alt="asdf" />
                        <div className='bgeffect absolute top-0'></div>
                    </div>
                </div>
                <img width={'680.426px'} src={way2} alt="" />
                <div className='flex flex-row justify-around items-center gap-[128px]'>
                    <div className='relative flex justify-center items-center'>
                        <img className='z-[10]' width={'280px'} src={img3} alt="asdf" />
                        <div className='bgeffect absolute top-0'></div>
                    </div>
                    <div className='flex flex-col w-[576px]'>
                        <h1 className='text-[23px] text-[#040303] font-bold pr-[160px]'>Tushunarli va qulay bo’lgan bosh sahifa</h1>
                        <p className='text-[18px] text-[@040303] font-[400] opacity-[0.7] pt-[30px]'>Bosh sahifada siz o’zingizga kerakli bo’lgan kategoriya va mahsulotlarni tez va oson topshingiz mumkin. Har bitta mahsulot haqida tushunarli ma’lumotlarga ega bo’lishingiz mumkin</p>
                    </div>
                </div>
            </div>
            {/* ilovani yuklash havolasi */}
            <div className='relative h-[800px] w-full  pt-[100px]'>
                <div className='absolute instal w-full flex flex-col items-center gap-4 mt-[100px]'>
                    <h1 className='text-[32px] font-bold text-center text-[#040303] '>Ilovani tezda yuklab oling </h1>
                    <p className='text-[16px] opacity-[0.7] font-[400] text-center text-[#040303]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, to</p>
                    <div className='flex flex-row justify-between gap-10 py-[50px] '>
                        <div className='flex flex-row hover:bg-[#29cc88] justify-center items-center bg-[#25B679] rounded-[7px] pl-[20px] pr-[24px] py-[10px]'>
                            <img src={appstore} alt="app" />
                            <h1 className='text-[#fff] text-[20px] font-[500] text-center'>AppStore</h1>
                        </div>
                        <div className='flex flex-row hover:bg-[#29cc88] justify-center items-center bg-[#25B679] rounded-[7px] pl-[20px] pr-[24px] py-[10px]'>
                            <img src={playmarket} alt="app" />
                            <h1 className='text-[#fff] text-[20px] font-[500] text-center'>PlayMarket</h1>
                        </div>
                        <div className='flex flex-row hover:bg-[#29cc88] justify-center items-center bg-[#25B679] rounded-[7px] pl-[20px] pr-[24px] py-[10px]'>
                            <img src={appgalery} alt="app" />
                            <h1 className='text-[#fff] text-[20px] font-[500] text-center'>AppGallery</h1>
                        </div>
                    </div>
                    <h1 className='text-[#040303] text-[23px] font-bold text-center'>
                        QR-kodni skanerlang va qulay<br />
                        usulda yuklab oling
                    </h1>
                    <div className='qr flex justify-center items-center'>
                        <img src={qr} alt="" />
                    </div>
                </div>
                <div className='opc absolute w-full'></div>

            </div>

        </div>
    )
}

export default About