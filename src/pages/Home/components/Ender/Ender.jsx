import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Ellipse15 from "./../../../../assets/Ellipse 15.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

export default function Ender({img}) {
    const { t, i18n } = useTranslation();
    function changeLanguage(lang) {
      i18n.changeLanguage(lang);
    }
  return (
    <>
      <Swiper className='w-[1039px] sm:w-[350px]' navigation={true} modules={[Navigation]}>
        <SwiperSlide className='dark:bg-[#393838] p-[20px]'>
            <div className="flex flex-wrap justify-start items-start">
                <div className="w-[164px]"><img className='' src={img} alt="" /></div>
                <h1 className='text-[40px] sm:text-[20px] sm:leading-[30px] w-[898px] sm:w-full mt-[16px] text-left font-[500] leading-[52px]'>{t("main.section3.div3.card.h1")}</h1>     
                <div className="flex justify-between sm:justify-center sm:flex-col items-center mt-[40px]">
                    <div className="flex items-center">
                        <div className="w-[56px]"><img src={Ellipse15} alt="" /></div>
                        <div className="ml-[24px] text-left">
                            <p className='text-[18px] sm:text-[16px] font-[600]'>{t("main.section3.div3.card.p1")}</p>
                            <p className='text-[18px] sm:text-[16px] font-[600] text-[#7E8492]'>{t("main.section3.div3.card.p2")}</p>
                        </div>
                    </div>
                </div>           
            </div>
        </SwiperSlide>

        <SwiperSlide className='dark:bg-[#393838] p-[20px]'>
            <div className="flex flex-wrap justify-start items-start">
                <div className="w-[164px]"><img className='' src={img} alt="" /></div>
                <h1 className='text-[40px] sm:text-[20px] sm:leading-[30px] w-[898px] sm:w-full mt-[16px] text-left font-[500] leading-[52px]'>{t("main.section3.div3.card.h1")}</h1>     
                <div className="flex justify-between sm:justify-center sm:flex-col items-center mt-[40px]">
                    <div className="flex items-center">
                        <div className="w-[56px]"><img src={Ellipse15} alt="" /></div>
                        <div className="ml-[24px] text-left">
                            <p className='text-[18px] sm:text-[16px] font-[600]'>{t("main.section3.div3.card.p1")}</p>
                            <p className='text-[18px] sm:text-[16px] font-[600] text-[#7E8492]'>{t("main.section3.div3.card.p2")}</p>
                        </div>
                    </div>
                </div>           
            </div>
        </SwiperSlide>

        <SwiperSlide className='dark:bg-[#393838] p-[20px]'>
            <div className="flex flex-wrap justify-start items-start">
                <div className="w-[164px]"><img className='' src={img} alt="" /></div>
                <h1 className='text-[40px] sm:text-[20px] sm:leading-[30px] w-[898px] sm:w-full mt-[16px] text-left font-[500] leading-[52px]'>{t("main.section3.div3.card.h1")}</h1>     
                <div className="flex justify-between sm:justify-center sm:flex-col items-center mt-[40px]">
                    <div className="flex items-center">
                        <div className="w-[56px]"><img src={Ellipse15} alt="" /></div>
                        <div className="ml-[24px] text-left">
                            <p className='text-[18px] sm:text-[16px] font-[600]'>{t("main.section3.div3.card.p1")}</p>
                            <p className='text-[18px] sm:text-[16px] font-[600] text-[#7E8492]'>{t("main.section3.div3.card.p2")}</p>
                        </div>
                    </div>
                </div>           
            </div>
        </SwiperSlide>

        <SwiperSlide className='dark:bg-[#393838] p-[20px]'>
            <div className="flex flex-wrap justify-start items-start">
                <div className="w-[164px]"><img className='' src={img} alt="" /></div>
                <h1 className='text-[40px] sm:text-[20px] sm:leading-[30px] w-[898px] sm:w-full mt-[16px] text-left font-[500] leading-[52px]'>{t("main.section3.div3.card.h1")}</h1>     
                <div className="flex justify-between sm:justify-center sm:flex-col items-center mt-[40px]">
                    <div className="flex items-center">
                        <div className="w-[56px]"><img src={Ellipse15} alt="" /></div>
                        <div className="ml-[24px] text-left">
                            <p className='text-[18px] sm:text-[16px] font-[600]'>{t("main.section3.div3.card.p1")}</p>
                            <p className='text-[18px] sm:text-[16px] font-[600] text-[#7E8492]'>{t("main.section3.div3.card.p2")}</p>
                        </div>
                    </div>
                </div>           
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
