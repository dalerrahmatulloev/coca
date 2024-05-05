import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";
import Icon6 from "./../../../../assets/Icon (6).svg";
import Icon7 from "./../../../../assets/Icon (7).svg";
import Icon8 from "./../../../../assets/Icon (8).svg";
import Icon9 from "./../../../../assets/Icon (9).svg";
import Icon10 from "./../../../../assets/Icon (10).svg";

export default function Card() {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <div className="w-[345px] border-[1px] border-[#8b8b8b] rounded-[16px] dark:bg-[#444444] text-left h-[801px] p-[40px_24px]">
            <div className="w-[40px]">
              <img src={Icon6} alt="" />
            </div>
            <h2 className="text-[22px] dark:text-[white] font-[600] mt-[16px]">
              Starter
            </h2>
            <p className="text-[#7E8492] text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <h1 className="text-[50px] dark:text-[white] mt-[10px] font-[600]">
              $100<span className="text-[16px] text-[#7E8492]">/mo</span>
            </h1>
            <div className="mt-[24px]">
              <p className="text-[#1D1E25] dark:text-[#c5c5c5] font-[700]">
                What’s included:
              </p>
              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Unlimited Upload</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Advanced Statistic</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Profile Badge</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Access to the community</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>History of all Liked Photos</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Directory Listing</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Customize Your Profile</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Display Your Workshops</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-[40px]">
              <button className="p-[10px_16px] dark:text-[white] border-[1px] border-[#CED1D8] rounded-full">
                Chose Plan
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[345px] rounded-[16px] bg-[#161A34] dark:bg-[#161A34] text-left h-[801px] p-[40px_24px]">
            <div className="flex justify-between items-center">
              <div className="w-[40px]">
                <img src={Icon9} alt="" />
              </div>
              <button className="bg-[#1463FF] p-[6px_12px] text-[15px] rounded-full text-[white]">
                Best Offers 🔥
              </button>
            </div>
            <h2 className="text-[22px] text-[white] font-[600] mt-[16px]">
              Popular
            </h2>
            <p className="text-[#7E8492] text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <h1 className="text-[50px] text-[white] mt-[10px] font-[600]">
              $1400<span className="text-[16px] text-[#7E8492]">/mo</span>
            </h1>
            <div className="mt-[24px]">
              <p className="text-[#c5c5c5] dark:text-[#c5c5c5] font-[700]">
                What’s included:
              </p>
              <div className="flex gap-x-[8px] text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Unlimited Upload</p>
              </div>

              <div className="flex gap-x-[8px] text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Advanced Statistic</p>
              </div>

              <div className="flex gap-x-[8px] text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Profile Badge</p>
              </div>

              <div className="flex gap-x-[8px] text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Access to the community</p>
              </div>

              <div className="flex gap-x-[8px] text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>History of all Liked Photos</p>
              </div>

              <div className="flex gap-x-[8px] text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Directory Listing</p>
              </div>

              <div className="flex gap-x-[8px] text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Customize Your Profile</p>
              </div>

              <div className="flex gap-x-[8px] text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Display Your Workshops</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-[40px]">
              <button className="p-[10px_16px] dark:text-[white] bg-[white] border-[1px] border-[#CED1D8] rounded-full">
                Chose Plan
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[378px] rounded-[16px] border-[1px] border-[#8b8b8b] dark:bg-[#444444] text-left h-[801px] p-[40px_24px]">
            <div className="w-[40px]">
              <img src={Icon10} alt="" />
            </div>
            <h2 className="text-[20px] dark:text-[white] font-[600] mt-[16px]">
              Enterprise
            </h2>
            <p className="text-[#7E8492] text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <h1 className="text-[50px] dark:text-[white] mt-[10px] font-[600]">
              $2100<span className="text-[16px] text-[#7E8492]">/mo</span>
            </h1>
            <div className="mt-[24px]">
              <p className="text-[#1D1E25] dark:text-[#c5c5c5] font-[700]">
                What’s included:
              </p>
              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Unlimited Upload</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Advanced Statistic</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Profile Badge</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Access to the community</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>History of all Liked Photos</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Directory Listing</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Customize Your Profile</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Display Your Workshops</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-[40px]">
              <button className="p-[10px_16px] dark:text-[white] border-[1px] border-[#CED1D8] rounded-full">
                Chose Plan
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[345px] border-[1px] border-[#8b8b8b] rounded-[16px] dark:bg-[#444444] text-left h-[801px] p-[40px_24px]">
            <div className="w-[40px]">
              <img src={Icon6} alt="" />
            </div>
            <h2 className="text-[22px] dark:text-[white] font-[600] mt-[16px]">
              Starter
            </h2>
            <p className="text-[#7E8492] text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <h1 className="text-[50px] dark:text-[white] mt-[10px] font-[600]">
              $100<span className="text-[16px] text-[#7E8492]">/mo</span>
            </h1>
            <div className="mt-[24px]">
              <p className="text-[#1D1E25] dark:text-[#c5c5c5] font-[700]">
                What’s included:
              </p>
              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Unlimited Upload</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Advanced Statistic</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Profile Badge</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Access to the community</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>History of all Liked Photos</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Directory Listing</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Customize Your Profile</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Display Your Workshops</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-[40px]">
              <button className="p-[10px_16px] dark:text-[white] border-[1px] border-[#CED1D8] rounded-full">
                Chose Plan
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[345px] rounded-[16px] bg-[#161A34] dark:bg-[#161A34] text-left h-[801px] p-[40px_24px]">
            <div className="flex justify-between items-center">
              <div className="w-[40px]">
                <img src={Icon9} alt="" />
              </div>
              <button className="bg-[#1463FF] p-[6px_12px] text-[15px] rounded-full text-[white]">
                Best Offers 🔥
              </button>
            </div>
            <h2 className="text-[22px] text-[white] font-[600] mt-[16px]">
              Popular
            </h2>
            <p className="text-[#7E8492] text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <h1 className="text-[50px] text-[white] mt-[10px] font-[600]">
              $1400<span className="text-[16px] text-[#7E8492]">/mo</span>
            </h1>
            <div className="mt-[24px]">
              <p className="text-[#c5c5c5] dark:text-[#c5c5c5] font-[700]">
                What’s included:
              </p>
              <div className="flex gap-x-[8px] text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Unlimited Upload</p>
              </div>

              <div className="flex gap-x-[8px] text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Advanced Statistic</p>
              </div>

              <div className="flex gap-x-[8px] text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Profile Badge</p>
              </div>

              <div className="flex gap-x-[8px] text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Access to the community</p>
              </div>

              <div className="flex gap-x-[8px] text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>History of all Liked Photos</p>
              </div>

              <div className="flex gap-x-[8px] text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Directory Listing</p>
              </div>

              <div className="flex gap-x-[8px] text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Customize Your Profile</p>
              </div>

              <div className="flex gap-x-[8px] text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Display Your Workshops</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-[40px]">
              <button className="p-[10px_16px] dark:text-[white] bg-[white] border-[1px] border-[#CED1D8] rounded-full">
                Chose Plan
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[378px] rounded-[16px] border-[1px] border-[#8b8b8b] dark:bg-[#444444] text-left h-[801px] p-[40px_24px]">
            <div className="w-[40px]">
              <img src={Icon10} alt="" />
            </div>
            <h2 className="text-[20px] dark:text-[white] font-[600] mt-[16px]">
              Enterprise
            </h2>
            <p className="text-[#7E8492] text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <h1 className="text-[50px] dark:text-[white] mt-[10px] font-[600]">
              $2100<span className="text-[16px] text-[#7E8492]">/mo</span>
            </h1>
            <div className="mt-[24px]">
              <p className="text-[#1D1E25] dark:text-[#c5c5c5] font-[700]">
                What’s included:
              </p>
              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Unlimited Upload</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Advanced Statistic</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Profile Badge</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon7} alt="" />
                </div>
                <p>Access to the community</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>History of all Liked Photos</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Directory Listing</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Customize Your Profile</p>
              </div>

              <div className="flex gap-x-[8px] dark:text-[white] items-center mt-[16px]">
                <div className="">
                  <img src={Icon8} alt="" />
                </div>
                <p>Display Your Workshops</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-[40px]">
              <button className="p-[10px_16px] dark:text-[white] border-[1px] border-[#CED1D8] rounded-full">
                Chose Plan
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
