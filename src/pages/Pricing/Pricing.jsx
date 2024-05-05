import { Switch } from "antd";
import React, { useRef, useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { Collapse, Select } from "antd";
const { Option } = Select;
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Icon6 from "./../../assets/Icon (6).svg";
import Icon7 from "./../../assets/Icon (7).svg";
import Icon8 from "./../../assets/Icon (8).svg";
import Icon9 from "./../../assets/Icon (9).svg";
import Icon10 from "./../../assets/Icon (10).svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Card from "./components/Card/Card";
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
export default function Pricing() {
  const [expandIconPosition, setExpandIconPosition] = useState("start");
  const onChange = (key) => {
    console.log(key);
  };
  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  const items = [
    {
      key: "1",
      label: "Is there a free trial available?",
      children: <div>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</div>,
      extra: genExtra(),
    },
    {
      key: "2",
      label: "How Can I Add More Emails To My Account?",
      children: <div>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</div>,
      extra: genExtra(),
    },
    {
      key: "3",
      label: "Can I Change Plans Or Cancel My Subscription At Any Time",
      children: <div>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</div>,
      extra: genExtra(),
    },
    {
      key: "4",
      label: "How Secure Is My Date With Sans CRM",
      children: <div>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</div>,
      extra: genExtra(),
    },
    {
      key: "5",
      label: "What Is The Uptime Guarantee",
      children: <div>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</div>,
      extra: genExtra(),
    }
  ];
  return (
    <>
      <header data-aos="zoom-in" className="flex flex-col mt-[90px] sm:mt-[45px] sm:pb-[60px] pb-[120px] justify-center items-center">
        <button className="p-[4px_12px] bg-[#1462ff2e] rounded-[16px]">
          Pricing plans 🤑
        </button>
        <h1 className="text-[80px] w-[1003px] sm:w-full text-center dark:text-[#8b8282] sm:text-[30px] font-[700]">
          Choose a plan for a more advanced business
        </h1>
        <div className="flex justify-center mt-[56px] sm:mt-[20px] items-center">
          <Switch defaultChecked onChange={onChange} />
          <p className="text-[#7E8492] ml-[10px]">Annual pricing (save 20%)</p>
        </div>
      </header>

      <main>
        <section>
          <div className="sm:hidden pb-[80px]">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="rounded-[16px] bg-white">
                <div className="w-[378px] border-[1px] border-[#8b8b8b] rounded-[16px] dark:bg-[#444444] text-left h-[801px] p-[40px_24px]">
                  <div className="w-[40px]">
                    <img src={Icon6} alt="" />
                  </div>
                  <h2 className="text-[24px] dark:text-[white] font-[600] mt-[16px]">
                    Starter
                  </h2>
                  <p className="text-[#7E8492]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h1 className="text-[56px] dark:text-[white] mt-[24px] font-[600]">
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
                    <button className="p-[16px] dark:text-[white] border-[1px] border-[#CED1D8] rounded-full">
                      Chose Plan
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="rounded-[16px] bg-transparent">
                <div className="w-[378px] rounded-[16px] bg-[#161A34] dark:bg-[#161A34] text-left h-[801px] p-[40px_24px]">
                  <div className="flex justify-between items-center">
                    <div className="w-[40px]">
                      <img src={Icon9} alt="" />
                    </div>
                    <button className="bg-[#1463FF] p-[6px_12px] rounded-full text-[white]">
                      Best Offers 🔥
                    </button>
                  </div>
                  <h2 className="text-[24px] text-[white] font-[600] mt-[16px]">
                    Popular
                  </h2>
                  <p className="text-[#7E8492]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h1 className="text-[56px] text-[white] mt-[24px] font-[600]">
                    $1400<span className="text-[16px] text-[#7E8492]">/mo</span>
                  </h1>
                  <div className="mt-[24px]">
                    <p className="text-[#1D1E25] dark:text-[#c5c5c5] font-[700]">
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
                    <button className="p-[16px] dark:text-[black] bg-[white] border-[1px] border-[#CED1D8] rounded-full">
                      Chose Plan
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="rounded-[16px] bg-white">
                <div className="w-[378px] rounded-[16px] border-[1px] border-[#8b8b8b] dark:bg-[#444444] text-left h-[801px] p-[40px_24px]">
                  <div className="w-[40px]">
                    <img src={Icon10} alt="" />
                  </div>
                  <h2 className="text-[24px] dark:text-[white] font-[600] mt-[16px]">
                    Enterprise
                  </h2>
                  <p className="text-[#7E8492]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h1 className="text-[56px] dark:text-[white] mt-[24px] font-[600]">
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
                    <button className="p-[16px] dark:text-[white] border-[1px] border-[#CED1D8] rounded-full">
                      Chose Plan
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="rounded-[16px] bg-white">
                <div className="w-[378px] border-[1px] border-[#8b8b8b] rounded-[16px] dark:bg-[#444444] text-left h-[801px] p-[40px_24px]">
                  <div className="w-[40px]">
                    <img src={Icon6} alt="" />
                  </div>
                  <h2 className="text-[24px] dark:text-[white] font-[600] mt-[16px]">
                    Starter
                  </h2>
                  <p className="text-[#7E8492]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h1 className="text-[56px] dark:text-[white] mt-[24px] font-[600]">
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
                    <button className="p-[16px] dark:text-[white] border-[1px] border-[#CED1D8] rounded-full">
                      Chose Plan
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="rounded-[16px] bg-transparent">
                <div className="w-[378px] border-[1px] border-[#8b8b8b] rounded-[16px] bg-[#161A34] dark:bg-[#161A34] text-left h-[801px] p-[40px_24px]">
                  <div className="flex justify-between items-center">
                    <div className="w-[40px]">
                      <img src={Icon9} alt="" />
                    </div>
                    <button className="bg-[#1463FF] p-[6px_12px] rounded-full text-[white]">
                      Best Offers 🔥
                    </button>
                  </div>
                  <h2 className="text-[24px] text-[white] font-[600] mt-[16px]">
                    Popular
                  </h2>
                  <p className="text-[#7E8492]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h1 className="text-[56px] text-[white] mt-[24px] font-[600]">
                    $1400<span className="text-[16px] text-[#7E8492]">/mo</span>
                  </h1>
                  <div className="mt-[24px]">
                    <p className="text-[#1D1E25] dark:text-[#c5c5c5] font-[700]">
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
                    <button className="p-[16px] dark:text-[black] bg-[white] border-[1px] border-[#CED1D8] rounded-full">
                      Chose Plan
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="rounded-[16px] bg-white">
                <div className="w-[378px] border-[1px] border-[#8b8b8b] rounded-[16px] dark:bg-[#444444] text-left h-[801px] p-[40px_24px]">
                  <div className="w-[40px]">
                    <img src={Icon10} alt="" />
                  </div>
                  <h2 className="text-[24px] dark:text-[white] font-[600] mt-[16px]">
                    Enterprise
                  </h2>
                  <p className="text-[#7E8492]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <h1 className="text-[56px] dark:text-[white] mt-[24px] font-[600]">
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
                    <button className="p-[16px] dark:text-[white] border-[1px] border-[#CED1D8] rounded-full">
                      Chose Plan
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="hidden sm:block pb-[40px]">
            <Card />
          </div>

          <div className="text-center pt-[80px] pb-[160px] sm:pt-[40px] sm:pb-[80px]">
            <h1 className="text-[56px] dark:text-[#8b8282] sm:text-[30px] font-[700]">
              Frequently asked questions
            </h1>
            <p className="text-[#7E8492]">
              Everything you need to know about the product and billing.
            </p>
            <div className="mt-[80px] sm:mt-[40px]">
              <Collapse
                className="text-left font-[600] border-none bg-transparent sm:text-[13px] text-[18px] text-[#7E8492]"
                defaultActiveKey={["1"]}
                onChange={onChange}
                expandIconPosition={'end'}
                items={items}
              />
              <br />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
