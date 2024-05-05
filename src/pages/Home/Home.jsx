import { useTranslation } from "react-i18next";
import SalesLight from "../../assets/Sales - Light.png";
import Icon1 from "../../assets/Icon (1).svg";
import Icon2 from "../../assets/Icon (2).svg";
import Icon3 from "../../assets/Icon (3).svg";
import Icon4 from "../../assets/Icon (4).svg";
import Icon5 from "../../assets/Icon (5).svg";
import AirbnbLogo from "../../assets/Airbnb Logo.svg";
import AmazonLogo from "../../assets/Amazon Logo.svg";
import FedExLogo from "../../assets/FedEx Logo.svg";
import MicrosoftLogo from "../../assets/Microsoft Logo.svg";
import GoogleLogo from "../../assets/Google Logo.svg";
import OLALogo from "../../assets/OLA Logo.svg";
import WalmartLogo from "../../assets/Walmart Logo.svg";
import OYOLogo from "../../assets/OYO Logo.svg";
import Image from "../../assets/Image.png";
import Image1 from "../../assets/Image (1).png";
import Frame1171275175 from "../../assets/Frame 1171275175.png";
import Frame1171275176 from "../../assets/Frame 1171275176.png";
import Frame1171275178 from "../../assets/Frame 1171275178.png";
import Frame1171275177 from "../../assets/Frame 1171275177.png";
import BarChart from "../../assets/Bar Chart.png";
import StatisticLight from "../../assets/Statistic - Light.png";
import CustomerGrowthLight from "../../assets/Customer Growth - Light.png";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.css";
import Ender from "./components/Ender/Ender";
import Rating from "../../assets/Rating.svg";
export default function Home() {
  const { t, i18n } = useTranslation();
  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <header>
        <div className="flex pt-[87px] sm:pt-[20px] sm:pb-[50px] pb-[141px] sm:flex-wrap sm:justify-center items-center justify-between">
          <div className="text-left sm:w-full w-[645px]">
            <h1 className="text-[80px] dark:text-[#8b8282] sm:text-[30px] font-[700]">
              {t("header.h1")}
            </h1>
            <p className="text-[32px] dark:text-[#cacaca] sm:text-[20px] sm:w-full sm:mt-[20px] w-[514px] mt-[60px] font-[600]">
              {t("header.h2")}
            </p>
            <div className="flex mt-[70px] sm:w-full sm:mt-[20px] justify-between w-[471px] items-start">
              <div className="w-[280px] sm:w-[150px] border-b-[1px] sm:mt-[0px] mt-[9px] border-[#CED1D8] h-[47px]">
                <h1 className="text-[#7E8492] sm:text-[15px]">
                  {t("header.input")}
                </h1>
              </div>
              <button className="bg-[#1D1E25] dark:bg-[#3d3f4e] sm:p-[10px_15px] sm:text-[16px] text-[white] p-[16px_32px] rounded-[100px]">
                {t("header.b1")}
              </button>
            </div>
          </div>

          <div data-aos="zoom-in">
            <img
              className="absolute sm:w-full sm:left-0 top-[155px] left-[133px]"
              src={SalesLight}
              alt=""
            />
            <img
              className="absolute bottom-0 sm:left-0 left-[133px]"
              src={StatisticLight}
              alt=""
            />
            <img
              className="w-[419px] h-[346px] top-[155px] left-[133px]"
              src={CustomerGrowthLight}
              alt=""
            />
          </div>
        </div>
      </header>

      <main className="overflow-hidden">
        <section>
          <div className="bg-[#1D1E25] sm:p-[30px_0px] text-left p-[100px_0px]">
            <h1 className="w-[816px] sm:w-full text-[56px] text-[#FFFFFF] font-[600] leading-[67.2px] sm:pl-[10px] sm:text-[26px] sm:leading-[32px]">
              {t("main.section1.div1.h1")}
            </h1>
            <p className="text-[#7E8492] sm:text-[16px] sm:w-full text-[18px] w-[660px] sm:pl-[10px] mt-[24px]">
              {t("main.section1.div1.p")}
            </p>
            <div className="flex sm:px-[10px] justify-between sm:flex-wrap mt-[80px]">
              <div data-aos="fade-up" data-aos-duration="3000" className="">
                <div className="w-[413px] h-[250px] sm:w-full sm:h-auto">
                  <img src={Icon1} alt="" />
                  <h2 className="mt-[24px] leading-[42px] text-[32px] text-white font-[600] w-[249px]">
                    {t("main.section1.div1.div.card1.h2")}
                  </h2>
                  <p className="text-[#7E8492] mt-[24px]">
                    {t("main.section1.div1.div.card1.p")}
                  </p>
                </div>

                <div className="w-[413px] mt-[54px] h-[250px] sm:w-full sm:h-auto">
                  <img src={Icon2} alt="" />
                  <h2 className="mt-[24px] leading-[42px] text-[32px] text-white font-[600] w-[249px]">
                    {t("main.section1.div1.div.card3.h2")}
                  </h2>
                  <p className="text-[#7E8492] mt-[24px]">
                    {t("main.section1.div1.div.card3.p")}
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="sm:mt-[50px]"
              >
                <div className="w-[413px] h-[250px] sm:w-full sm:h-auto">
                  <img src={Icon3} alt="" />
                  <h2 className="mt-[24px] leading-[42px] text-[32px] text-white font-[600] w-[249px]">
                    {t("main.section1.div1.div.card2.h2")}
                  </h2>
                  <p className="text-[#7E8492] mt-[24px]">
                    {t("main.section1.div1.div.card2.p")}
                  </p>
                </div>

                <div className="w-[433px] mt-[54px] h-[250px] sm:w-full sm:h-auto">
                  <img src={Icon4} alt="" />
                  <h2 className="mt-[24px] leading-[42px] text-[32px] text-white font-[600] w-[293px]">
                    {t("main.section1.div1.div.card4.h2")}
                  </h2>
                  <p className="text-[#7E8492] mt-[24px]">
                    {t("main.section1.div1.div.card4.p")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between sm:flex-wrap sm:pt-[80px] sm:pb-[30px] pb-[90px] pt-[160px]">
            <div data-aos="fade-right" className="relative">
              <img src={Image} alt="" />
              <img
                className="absolute bottom-[40px] sm:h-[150px] right-[36px]"
                src={BarChart}
                alt=""
              />
            </div>
            <div className="ml-[58px] sm:mt-[20px] w-[557px] text-left sm:w-full sm:ml-[0px]">
              <h1 className="dark:text-[#8b8282] text-[56px] font-[600] leading-[67.2px] sm:text-[26px] sm:leading-[32px]">
                {t("main.section1.div2.h1")}
              </h1>
              <p className="sm:text-[16px] w-[360px] sm:w-full text-[#7E8492] mt-[24px] text-[18px]">
                {t("main.section1.div2.p")}
              </p>
              <div className="mt-[40px] w-[393px] sm:w-full">
                <div className="flex items-center">
                  <img src={Icon5} alt="" />
                  <p className="ml-[16px] dark:text-[white]">
                    {t("main.section1.div2.div.p1")}
                  </p>
                </div>

                <div className="flex items-center mt-[32px]">
                  <img src={Icon5} alt="" />
                  <p className="ml-[16px] dark:text-[white]">
                    {t("main.section1.div2.div.p2")}
                  </p>
                </div>

                <div className="flex items-center mt-[32px]">
                  <img src={Icon5} alt="" />
                  <p className="ml-[16px] dark:text-[white]">
                    {t("main.section1.div2.div.p3")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center sm:gap-y-[10px] sm:flex-wrap sm:mt-[30px] mt-[66px]">
            <div
              data-aos="flip-right"
              className="text-left w-[176px] sm:w-[145px]"
            >
              <h1 className="text-[64px] font-[600] sm:text-[32px] dark:text-[rgb(255,255,255)]">
                17k
              </h1>
              <p className="text-[#7E8492] sm:text-[16px] text-[18px]">
                {t("main.section2.div1.p1")}
              </p>
            </div>

            <div className="bg-[#CED1D8] sm:h-[64px] w-[1px] h-[99px]"></div>

            <div
              data-aos="flip-right"
              className="text-left w-[151px] sm:w-[130px]"
            >
              <h1 className="text-[64px] sm:text-[32px] font-[600] dark:text-[white]">
                15+{" "}
              </h1>
              <p className="text-[#7E8492] sm:text-[16px] text-[18px]">
                {t("main.section2.div1.p2")}
              </p>
            </div>

            <div className="bg-[#CED1D8] sm:h-[64px] w-[1px] h-[99px]"></div>

            <div
              data-aos="flip-left"
              className="text-left w-[199px] sm:w-[160px]"
            >
              <h1 className="text-[64px] sm:text-[32px] font-[600] dark:text-[white]">
                50+{" "}
              </h1>
              <p className="text-[#7E8492] sm:text-[16px] text-[18px]">
                {t("main.section2.div1.p3")}
              </p>
            </div>

            <div className="bg-[#CED1D8] sm:h-[64px] w-[1px] h-[99px]"></div>

            <div
              data-aos="flip-left"
              className="text-left w-[199px] sm:w-[143px]"
            >
              <h1 className="text-[64px] sm:text-[32px] font-[600] dark:text-[white]">
                100+{" "}
              </h1>
              <p className="text-[#7E8492] sm:text-[16px] text-[18px]">
                {t("main.section2.div1.p4")}
              </p>
            </div>
          </div>

          <div className="mt-[80px] sm:mt-[50px]">
            <img data-aos="flip-down" src={Image1} alt="" />
            <div className="flex justify-between sm:mt-[50px] mt-[80px] flex-wrap text-left sm:justify-center">
              <h1 className="dark:text-[#8b8282] sm:w-full w-[772px] text-[56px] font-[600] leading-[67.2px] sm:text-[26px] sm:leading-[32px]">
                {t("main.section2.div2.h1")}
              </h1>
              <p className="sm:text-[16px] w-[360px] sm:w-full text-[#7E8492] mt-[24px] text-[18px]">
                {t("main.section2.div2.p")}
              </p>
            </div>
          </div>

          <div className="flex justify-between sm:mt-[90px] mt-[160px] flex-wrap text-left sm:justify-center">
            <div className="w-[313px]">
              <h1 className="dark:text-[#8b8282] sm:w-full text-[56px] font-[600] leading-[67.2px] sm:text-[26px] sm:leading-[32px]">
                890+
              </h1>
              <p className="sm:text-[16px] sm:w-full text-[#7E8492] sm:mt-[5px] mt-[16px] text-[18px]">
                {t("main.section2.div3.p")}
              </p>
            </div>

            <div
              data-aos="zoom-in"
              className="flex flex-wrap sm:mt-[20px] justify-between gap-y-[10px] w-[730px] sm:w-full"
            >
              <img className="sm:w-[48%]" src={AirbnbLogo} alt="" />
              <img className="sm:w-[48%]" src={AmazonLogo} alt="" />
              <img className="sm:w-[48%]" src={FedExLogo} alt="" />
              <img className="sm:w-[48%]" src={MicrosoftLogo} alt="" />
              <img className="sm:w-[48%]" src={GoogleLogo} alt="" />
              <img className="sm:w-[48%]" src={OLALogo} alt="" />
              <img className="sm:w-[48%]" src={WalmartLogo} alt="" />
              <img className="sm:w-[48%]" src={OYOLogo} alt="" />
            </div>
          </div>
        </section>

        <section>
          <div className="text-left mt-[200px] sm:mt-[100px]">
            <h1 className="dark:text-[#8b8282] w-[601px] sm:w-full text-[56px] font-[600] leading-[67.2px] sm:text-[26px] sm:leading-[32px]">
              {t("main.section3.div1.h1")}
            </h1>
            <p className="sm:text-[16px] w-[442px] sm:w-full text-[#7E8492] sm:mt-[5px] mt-[16px] text-[18px]">
              {t("main.section3.div1.p")}
            </p>
            <div className="flex flex-wrap justify-between items-center mt-[80px] sm:justify-center gap-y-[56px]">
              <div
                data-aos="fade-right"
                className="w-[568px] sm:w-full flex justify-between"
              >
                <img
                  className="sm:w-[160px] sm:h-[216px]"
                  src={Frame1171275175}
                  alt=""
                />
                <div className="w-[268px] sm:ml-[8px] sm:w-auto">
                  <h1 className="dark:text-[#8b8282] text-[32px] font-[600] leading-[42px] sm:text-[16px] sm:leading-[24px]">
                    {t("main.section3.div1.div.card1.h1")}
                  </h1>
                  <p className="sm:text-[14px] text-[#7E8492] sm:mt-[8px] mt-[24px]">
                    {t("main.section3.div1.div.card1.p")}
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-left"
                className="w-[568px] sm:w-full flex justify-between"
              >
                <img
                  className="sm:w-[160px] sm:h-[216px]"
                  src={Frame1171275176}
                  alt=""
                />
                <div className="w-[268px] sm:ml-[8px] sm:w-auto">
                  <h1 className="dark:text-[#8b8282] text-[32px] font-[600] leading-[42px] sm:text-[16px] sm:leading-[24px]">
                    {t("main.section3.div1.div.card2.h1")}
                  </h1>
                  <p className="sm:text-[14px] text-[#7E8492] sm:mt-[8px] mt-[24px]">
                    {t("main.section3.div1.div.card2.p")}
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-right"
                className="w-[568px] sm:w-full flex justify-between"
              >
                <img
                  className="sm:w-[160px] sm:h-[216px]"
                  src={Frame1171275178}
                  alt=""
                />
                <div className="w-[268px] sm:ml-[8px] sm:w-auto">
                  <h1 className="dark:text-[#8b8282] text-[32px] font-[600] leading-[42px] sm:text-[16px] sm:leading-[24px]">
                    {t("main.section3.div1.div.card3.h1")}
                  </h1>
                  <p className="sm:text-[14px] text-[#7E8492] sm:mt-[8px] mt-[24px]">
                    {t("main.section3.div1.div.card3.p")}
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-left"
                className="w-[568px] sm:w-full flex justify-between"
              >
                <img
                  className="sm:w-[160px] sm:h-[216px]"
                  src={Frame1171275177}
                  alt=""
                />
                <div className="w-[268px] sm:ml-[8px] sm:w-auto">
                  <h1 className="dark:text-[#8b8282] text-[32px] font-[600] leading-[42px] sm:text-[16px] sm:leading-[24px]">
                    {t("main.section3.div1.div.card4.h1")}
                  </h1>
                  <p className="sm:text-[14px] text-[#7E8492] sm:mt-[8px] mt-[24px]">
                    {t("main.section3.div1.div.card4.p")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-[160px] sm:mt-[80px]">
            <h1 className="dark:text-[#8b8282] text-[56px] font-[600] leading-[67.2px] sm:text-[22px] sm:leading-[32px]">
              {t("main.section3.div2.h1")}
            </h1>
            <p className="sm:text-[14px] text-[#7E8492] sm:mt-[5px] mt-[16px] text-[18px]">
              {t("main.section3.div2.p")}
            </p>
            <div className="flex justify-between mt-[80px] sm:mt-[30px] sm:justify-center flex-wrap sm:gap-y-[30px]">
              <div data-aos="zoom-in-right" className="w-[582px] sm:hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/8f24/e625/0401d8ff44ee193630b53e9e24acab9f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NwQ-auAJkhbD8K6aXEF2hLpgV6WcYqMt~IteHWPElfY-s-DXH7WQ2vijAHMLghNpP1M5f1TcR3H598BF2uziuEo5SHooI~-k1uJVgND9Q13wjjeFfLSP0IAgBTU4ANJjpg5pSy~KTiyn14IXSjSm8NUa~VC3C4AFoF1pvWr-o0cNC8QF6R3B8zNkspJBW7mTrlb1QToPtqiNkNoNFIwBm8X-GY0QBhKsydqVVDFJtPzyzpHPSaSep5jsOBZ44kyjpotZ7Xar6-yhO5o1kwbyh7~69yiuRQfObQdRrnLpSCualskhTmD-lvz96VJvJBMM15219yHgW3RsBI68eg8IaA__"
                  alt=""
                />
                <div className="flex sm:text-[13px] sm:mt-[3px] text-[#7E8492] mt-[16px] justify-between items-center">
                  <p>{t("main.section3.div2.div.card1.p1")}</p>
                  <p>{t("main.section3.div2.div.card1.p2")}</p>
                </div>
                <h2 className="text-[32px] sm:mt-[13px] sm:text-[20px] sm:leading-6 text-left font-[600] leading-[48px] dark:text-[white]">
                  {t("main.section3.div2.div.card1.h2")}
                </h2>
              </div>

              <div data-aos="zoom-in-left" className="w-[582px] sm:hidden">
                <img
                  src="https://s3-alpha-sig.figma.com/img/4699/bb7a/8fa49082b01dafe3cac61bd3e9bd13b9?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cV6hTAz~bARw26mwfULQtPhURHlQ1Cj7AXKXoI6eELp7b0jzTwWy0tw07Eob-dAZDITuHZ18pNN69eIh~wo012-Xl8V8lV6hsx48PpAkIXksi-WYnkKGIMhtb3ll8aLEM~9d8sEPsY458Tcy9ZACrSInqqBRVscVYmC312r4rSbQo8xZXmi0kOVE2be15-GLxvI5ZEhLPV2eEl1rtiny8YvnOP7RH9SZipCiPs1z12YyR95zDapzUfIGH8~Cnw934q-CwHmEwudKOKetTave~8PNVExnNomyyeBu29JQNNJCuURZ5ri2R5DrrgmlEyEHT9IH7Q~nRRfNuYqbaGbJVg__"
                  alt=""
                />
                <div className="flex sm:text-[13px] sm:mt-[3px] text-[#7E8492] mt-[16px] justify-between items-center">
                  <p>{t("main.section3.div2.div.card2.p1")}</p>
                  <p>{t("main.section3.div2.div.card2.p2")}</p>
                </div>
                .
                <h2 className="text-[32px] sm:mt-[13px] sm:text-[20px] sm:leading-6 text-left font-[600] leading-[48px] dark:text-[white]">
                  {t("main.section3.div2.div.card2.h2")}
                </h2>
              </div>

              <div className="hidden sm:block pb-[20px]">
                <Swiper className="mySwiper">
                  <SwiperSlide>
                    <div data-aos="zoom-in-right" className="w-[340px]">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/8f24/e625/0401d8ff44ee193630b53e9e24acab9f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NwQ-auAJkhbD8K6aXEF2hLpgV6WcYqMt~IteHWPElfY-s-DXH7WQ2vijAHMLghNpP1M5f1TcR3H598BF2uziuEo5SHooI~-k1uJVgND9Q13wjjeFfLSP0IAgBTU4ANJjpg5pSy~KTiyn14IXSjSm8NUa~VC3C4AFoF1pvWr-o0cNC8QF6R3B8zNkspJBW7mTrlb1QToPtqiNkNoNFIwBm8X-GY0QBhKsydqVVDFJtPzyzpHPSaSep5jsOBZ44kyjpotZ7Xar6-yhO5o1kwbyh7~69yiuRQfObQdRrnLpSCualskhTmD-lvz96VJvJBMM15219yHgW3RsBI68eg8IaA__"
                        alt=""
                      />
                      <div className="flex sm:text-[13px] sm:mt-[3px] text-[#7E8492] mt-[16px] justify-between items-center">
                        <p>{t("main.section3.div2.div.card1.p1")}</p>
                        <p>{t("main.section3.div2.div.card1.p2")}</p>
                      </div>
                      <h2 className="text-[32px] sm:mt-[13px] sm:text-[20px] sm:leading-6 text-left font-[600] leading-[48px] dark:text-[white]">
                        {t("main.section3.div2.div.card1.h2")}
                      </h2>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>

          <div className="mt-[100px] sm:mt-[50px] pb-[160px] sm:pb-[80px]">
            <div className="flex justify-between items-center sm:flex-col sm:justify-center">
              <h1 className="dark:text-[#8b8282] w-[530px] sm:w-full text-[56px] font-[600] leading-[67.2px] sm:text-[22px] sm:leading-[32px]">
                {t("main.section3.div3.h1")}
              </h1>
              <p className="sm:text-[14px] w-[376px] sm:w-full text-[#7E8492] sm:mt-[5px] mt-[16px] text-[18px]">
                {t("main.section3.div3.p")}
              </p>
            </div>
            <div
              data-aos="flip-down"
              data-aos-duration="1000"
              className="mt-[100px]"
            >
              <Ender img={Rating} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
