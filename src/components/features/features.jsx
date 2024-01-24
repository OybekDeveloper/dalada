import React from 'react'
import istaklar2 from '../image/istaklar2.png'
import arrow1 from './featuresimg/arrow1.svg'
import arrow2 from './featuresimg/arrow2.svg'
import { magicWand, megaphone, resources, review, route, sack } from './featuresimg';

import './features.scss'
const Features = () => {
    return (
        <div className='features flex items-center flex-col pt-[100px]'>
            <div className='btn flex justify-center px-[16px] py-[6px] font-[14px] text-center text-[#25b679] bg-[#ccf5e4] rounded-[29px]'>Xususiyatlar</div>
            <h1 className='text-3xl text-center pt-[12px]'>Ilovamiz xususiyatlari sizga<br />
                albatta yoqadi  </h1>
            <div className='flex flex-row justify-center items-center pt-[64px] gap-10 text-[#040303] '>
                <div className='flex flex-col gap-[100px] '>
                    <div className='w-[342px]  h-[88px] flex flex-row justify-center items-center'>
                        <img src={megaphone} alt="img" />
                        <div className='pl-[32px]'>
                            <h1 className='text-[26px] font-bold'>Mahsulotlar reklamasi</h1>
                            <p className='text-[16px] font-[400] '>O’z mahsulotlaringizni ilovamiz orqali
                                reklama qiling va oson soting</p>
                        </div>
                    </div>
                    <div className='w-[342px]  h-[88px] flex flex-row justify-center items-center'>
                        <img src={route} alt="img" />
                        <div className='pl-[32px]'>
                            <h1 className='text-[26px] font-bold'>Daladan uyingizga</h1>
                            <p className='text-[16px] font-[400] '>Poliz va dehqonchilik mahsulotlarini
                                to’g’ridan-to’gri daladan sotib oling</p>
                        </div>
                    </div>
                    <div className='w-[342px]  h-[88px] flex flex-row justify-center items-center'>
                        <img src={sack} alt="img" />
                        <div className='pl-[32px]'>
                            <h1 className='text-[26px] font-bold'>Qulay narx</h1>
                            <p className='text-[16px] font-[400] '>Mahsulotlarni o’zingizga qulya bo’lgan
                                narxlarda sotib oling</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img width={'320px'} src={istaklar2} alt="" />
                </div>
                <div className='flex flex-col gap-[100px]'>
                    <div className='w-[342px]  h-[88px] flex flex-row justify-center items-center'>
                        <img src={magicWand} alt="img" />
                        <div className='pl-[32px]'>
                            <h1 className='text-[26px] font-bold'>Tushunarli dizayn</h1>
                            <p className='text-[16px] font-[400] '>Ilova dizayni foydalanuvchilar
                                uchun qulay va sodda ishlab chiqilgan</p>
                        </div>
                    </div>
                    <div className='w-[342px]  h-[88px] flex flex-row justify-center items-center'>
                        <img src={resources} alt="img" />
                        <div className='pl-[32px]'>
                            <h1 className='text-[26px] font-bold'>Qulay navigatsiya</h1>
                            <p className='text-[16px] font-[400] '>Har bitta element foydalanuvchi uchun
                                qulay joyda joylashtirilganligi</p>
                        </div>
                    </div>
                    <div className='w-[342px]  h-[88px] flex flex-row justify-center items-center'>
                        <img src={review} alt="img" />
                        <div className='pl-[32px]'>
                            <h1 className='text-[26px] font-bold'>Oson ro’yxatdan o’tish</h1>
                            <p className='text-[16px] font-[400] '>Ilovadan tezda ortiqcha ma’lumotlarsiz
                                ro’yxatdan o’ting</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* qanday ishlaydi  */}
            <div className='mt-[100px] h-[570px] rounded-[24px] bg-[#25B679] w-full flex flex-col items-center mb-[100px]'>
                <div className='btn mt-[64px] flex justify-center px-[16px] py-[6px] text-[14px] text-center text-[#25b679] bg-[#FFF] rounded-[29px]'>Qanday ishlaydi?</div>
                <h1 className='text-[32px] text-[#fff] font-bold text-center '>Tizimning ishlashi: uzluksiz funksionallik <br />uchun asosiy jarayonlarni ochish</h1>
                <div className='flex flex-row items-center gap-[150px] mt-[100px] justify-center'>
                    <div className='w-[230px] relative h-[168px] flex flex-col justify-start gap-4'>
                        <h1 className='text-[26px] w-[55px] h-[56px] items-center rounded-full px-[13px] py-[10px] font-bold text-[#25B679] bg-white p-[10px] flex justify-center'>01</h1>
                        <h2 className='text-[23px] text-white font-bold'>Yuklab olish</h2>
                        <p className='text-[16px] text-white font-[400] opacity-[0.9]'>Ilovamizni PlayMarket yoki
                            AppStoredan yuklab oling</p>
                        <div className='absolute px-2 right-[-100px] top-[30px]'>
                            <img width={'160px'} src={arrow1} alt="arrow" />
                        </div>
                    </div>

                    <div className='w-[230px] relative h-[168px] flex flex-col justify-start gap-4'>
                        <h1 className='text-[26px] w-[55px] h-[56px] items-center rounded-full px-[13px] py-[10px] font-bold text-[#25B679] bg-white p-[10px] flex justify-center'>02</h1>
                        <h2 className='text-[23px] text-white font-bold'>Ro’yxatdan o’tish</h2>
                        <p className='text-[16px] text-white font-[400] opacity-[0.9]'>Yuklab olgandan keyin ilovamizga
                            kirib undan telefon raqamingiz bilan
                            ro’yxatdan o’ting</p>
                        <div className='absolute right-[-100px] top-[-20px]'>
                            <img width={'160px'} src={arrow2} alt="arrow" />
                        </div>
                    </div>

                    <div className='w-[230px] h-[168px] flex flex-col justify-start gap-4'>
                        <h1 className='text-[26px] w-[55px] h-[56px] items-center rounded-full px-[13px] py-[10px] font-bold text-[#25B679] bg-white p-[10px] flex justify-center'>03</h1>
                        <h2 className='text-[23px] text-white font-bold'>Tugallandi!</h2>
                        <p className='text-[16px] text-white font-[400] opacity-[0.9]'>Ilovaga kirib barcha xizmatlardan
                            foydalanish mumkin</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Features