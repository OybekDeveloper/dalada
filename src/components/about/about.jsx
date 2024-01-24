import React from 'react'
import img1 from '../image/istaklar3.png'
import img2 from '../image/istaklar1.png'
import img3 from '../image/istaklar2.png'
import way1 from './img/way1.svg'
import way2 from './img/way2.svg'
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
                    <div>
                        <img width={'280px'} src={img1} alt="asdf" />
                        <div></div>
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
                    <div>
                        <img width={'280px'} src={img2} alt="asdf" />
                        <div></div>
                    </div>
                </div>
                    <img width={'680.426px'} src={way2} alt="" />
                <div className='flex flex-row justify-around items-center gap-[128px]'>
                    <div>
                        <img width={'280px'} src={img3} alt="asdf" />
                        <div></div>
                    </div>
                    <div className='flex flex-col w-[576px]'>
                        <h1 className='text-[23px] text-[#040303] font-bold pr-[160px]'>Tushunarli va qulay bo’lgan bosh sahifa</h1>
                        <p className='text-[18px] text-[@040303] font-[400] opacity-[0.7] pt-[30px]'>Bosh sahifada siz o’zingizga kerakli bo’lgan kategoriya va mahsulotlarni tez va oson topshingiz mumkin. Har bitta mahsulot haqida tushunarli ma’lumotlarga ega bo’lishingiz mumkin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About