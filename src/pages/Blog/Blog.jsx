import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonArrow from "./../../assets/Button Arrow.svg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";
export default function Blog() {
  return (
    <>
      <header>
        <div className="flex pt-[87px] sm:pt-[20px] sm:pb-[50px] pb-[141px] sm:flex-wrap sm:justify-center items-center justify-between">
          <div className="text-left w-[1200px] sm:w-full">
            <h1 className="text-[80px] sm:w-full w-[959px] dark:text-[#8b8282] sm:text-[30px] font-[700]">
              Activity & Updates
            </h1>
            <div className="flex justify-between sm:flex-col">
              <p className="text-[32px] dark:text-[#cacaca] sm:text-[20px] sm:w-full sm:mt-[20px] w-[738px] mt-[60px] font-[600]">
                Our biggest challenge is making sure we're always designing and
                building products that will help you run your business better.
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex text-[16px] sm:flex-wrap sm:gap-y-[20px] text-[#878787] items-center gap-x-[40px]">
            <p className="text-[#1D1E25] dark:text-[#edecec]">View all</p>
            <p>Design</p>
            <p>Articles</p>
            <p>Product</p>
            <p>Software Development</p>
            <p>Customer Success</p>
          </div>

          <div className="mt-[90px]">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className="w-[515px] sm:w-full bg-transparent">
                <div className="w-[515px] sm:w-full">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/1b25/e47b/3312a5cae9f164db84387e9c19484f2f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9~h-13-HBGbQKUbGz9No07zw7SfzrD1A2~be9KkeY1fqT~5rXp9YvzaOptmfIT9xDFz5fqnp6TPQBHwGSZHWi5QHLpgDPRF7lDt2SNnyVzWd~nhzQuI1~IUjZNao9MMQ1bEZU8rpUl8YLyw7M0lHoS3wKF9iAqimLMharcpKHdRPoKdV8s1kMHid45g~5J2URWeyhOrjaXN4WoGkW8HZkYwkPZuGYKjkw1S~p3I9oFzrFxAMubf3q88tjuLz8bU9S5-xRPIJwHTGj1VYmmN3LxTX5vUkp3m-qP0hVo2bu4BbJ-0SkE1cqO8reFN5OGr47eEvXRqm3O~3TL8jiS8gg__"
                    alt=""
                  />
                  <div className="flex sm:text-[11px] sm:mt-[3px] text-[14px] text-[#7E8492] mt-[16px] justify-between items-center">
                    <p>Published in Insight Jan 30, 2021</p>
                    <p>Published in Insight Jan 30, 2021</p>
                  </div>
                  <h2 className="text-[32px] mt-[5px] sm:mt-[13px] sm:text-[20px] sm:leading-6 text-left font-[600] leading-[48px] dark:text-[white]">
                    Practice making User Flow
                  </h2>
                  <p className="text-[#7E8492] sm:text-[16px] text-left text-[20px]">
                    In this article, we'll cover how to create user flows
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-[515px] sm:w-[360px] bg-transparent">
                <div className="w-[515px] sm:w-full">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/4266/8136/c799a4e3f0466344ecf4c49fc9187b14?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qPuXOf9~p39YYZ0fhIqmMxCi94QQy9PdhYZFvuC8SrHu1H-2Tcu0yeym7x7CRL661~~y6Tkl9lwNmioce2Kc2JbG7-xFSnc6HQQgs1CJAHe4i1LVK25oQE4t~tssiigleXDK75cPXTsuDsF8zBT3GkwpcvMuSeMVyezRebCPr6DYEYQFWvEJ8uCgJP7-By~YaNvCOcI2dyenzGGQNvbbUFbqXIEe3cymgeZt5XbUrjrCRJReko9DnG-c0jcU6KEaHChj63vqR8uHGNq9d0BwPCbnoYT9aM0aD5eeNMNE6jsI~8BaL5ReXWWxfBx0gMwL4aUMW4ItWuQn75jsi15UIg__"
                    alt=""
                  />
                  <div className="flex sm:text-[11px] sm:mt-[3px] text-[14px] text-[#7E8492] mt-[16px] justify-between items-center">
                    <p>Published in Insight Jan 30, 2021</p>
                    <p>Published in Insight Jan 30, 2021</p>
                  </div>
                  <h2 className="text-[32px] mt-[5px] sm:mt-[13px] sm:text-[20px] sm:leading-6 text-left font-[600] leading-[48px] dark:text-[white]">
                    Practice making User Flow
                  </h2>
                  <p className="text-[#7E8492] sm:text-[16px] text-left text-[20px]">
                    In this article, we'll cover how to create user flows
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-[515px] sm:w-full bg-transparent">
                <div className="w-[515px] sm:w-full">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/dbc8/3c61/86155510cda488a1962dfda25c0f5f52?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8i4-Yrj8Mkx14-io-5Symf30dGjoIClXqcLFtQi0paj8ECZ572cT-gzMoabgwhuaD~ivBWlQ53L7MSyTD59SuQkLl1geahvXwi-Eef7VDbqsmzyEGKHB9sJFz7xyjZQAEUOQpB3IYi5NCx83hryQWQNXgxYG0VWVRTdMZPelVLxhr1NNdpU-HqTnY6A7ZqLgk4NgDRhtQX0QUNjsDQhkn413Y-~ruChvuAvGqliaj9stRHqvVzpAzsrAEnRZ4nQ5eFGv94FFB9Naw87UrO1K5LrpycNuwGMVgTIcxFpZkNbku1XqtJX4OD-7T3MiP5hd5vgOXYrsxif0CNcNIo4Ng__"
                    alt=""
                  />
                  <div className="flex sm:text-[11px] sm:mt-[3px] text-[14px] text-[#7E8492] mt-[16px] justify-between items-center">
                    <p>Published in Insight Jan 30, 2021</p>
                    <p>Published in Insight Jan 30, 2021</p>
                  </div>
                  <h2 className="text-[32px] mt-[5px] sm:mt-[13px] sm:text-[20px] sm:leading-6 text-left font-[600] leading-[48px] dark:text-[white]">
                    Practice making User Flow
                  </h2>
                  <p className="text-[#7E8492] sm:text-[16px] text-left text-[20px]">
                    In this article, we'll cover how to create user flows
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div className="bg-[#1D1E25] flex-wrap py-[120px] sm:py-[60px] sm:px-[10px] sm:mt-[80px] mt-[168px] flex justify-between">
            <div className="">
              <div className="w-[584px] sm:w-full">
                <img
                  src="https://s3-alpha-sig.figma.com/img/e21d/b0b8/a9999f6992d296d9502a77ccb55b7283?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fAJ7WQe~GVA4-AknDtnVspSLZMMd23B2d6xkbzp2Z4VVldWY1ocu3AihITiSbwbwaMcy-ERZiMaiHv7lRva3ePfES5MxICzvoB~IhLqTAmRtiID0eQmzkgssUYiCNAXZqf9qmWGbQCjtnBoxkyqMnjHtfcUDY24fIpyaI9VOK8usm8IrSMpeMwfUUGvGV8t4JItHRauNDHZu05jmru9oHzhYsi3MFBOuDn-JQi4c-vs5ep4QU5B1oHEUBa1xdfhu2ta1SfMMuW0IlR3Kv82u6NKNM1NRtgLO4HqtwEpbkZbucI~jUsrhuH-6bwUIkCtufcbttURI0eXA-jmXaZ9bCQ__"
                  alt=""
                />
                <h1 className="text-[white] sm:text-[18px] text-[40px] mt-[24px] sm:mt-[16px] font-[600]">
                  How we perform long-running tasks using AWS services
                </h1>
                <p className="text-[#7E8492] text-[18px] sm:text-[14px] sm:mt-[16px] mt-[24px]">
                  Webflow is web design tool as well as a hosting platform and
                  CMS all in one. While you are probably familiar with all of
                  these, they are usually entirely separate tools.
                </p>
              </div>

              <div className="w-[584px] mt-[160px] sm:mt-[50px] sm:w-full">
                <img
                  src="https://s3-alpha-sig.figma.com/img/ff4c/f10b/26aef1fcdb671356ba03012fe8fbcc3b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cz9jgpDMsYaQ2GMiNSrE8UrlHIcLkKczhLrnbkrJp8CCSXG3~HJjLxULzpgKWmxgUTmvS3o4gMvCPelX~WxT4HUZEmHjm19eV2SLmS1MCwevRzoxBTEXbv0DlWHUoJrYNLSu3yOqHqd~BC7usQr3vllzbzhlfjKy3IyrwQme9jtOT6uZbV2~UGXobn0D7N~w37fhoG97qIT7lmsWOYkc-pdA3f9UasgBtDRwM9Gb~1ER7RQ~g5Mn8qdUS4ipggM2TqVg7YTqUpchpR74rNYN-9zkZe8X7P4UBNQ3JjlQBZI6xtFc8QbaNlyVwuh2Hb5Fzy0j3ZB1bi26DKSWPN0DMg__"
                  alt=""
                />
                <h1 className="text-[white] sm:text-[18px] text-[40px] mt-[24px] sm:mt-[16px] font-[600]">
                  Layout Exploration — Simple exercise but big effect
                </h1>
                <p className="text-[#7E8492] text-[18px] sm:text-[14px] sm:mt-[16px] mt-[24px]">
                  Make alternatives or other options for the design we are
                  making. For example, we are creating a website design. Then
                  there is the testimonial section.
                </p>
              </div>
            </div>

            <div className="sm:mt-[50px]">
              <div className="w-[584px] sm:w-full">
                <img
                  className="h-[507px] sm:h-auto"
                  src="https://s3-alpha-sig.figma.com/img/2e92/d0b9/8b56b5542ed2a8917fbe80e3418f1d82?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KdNO4CZVgLMXsMJ1lGpQ7BGDoqTZiA5HqHK0rO4XALGY9n6EhYVgsvt0t3oRIO88fHH7WQ1jaCj40rJEpCSQR22B2TRQy59slFEOi~Y9vwQd6v~PUdarp4hQ~65Tz6tQz-zL9Y1Ku-tiDxK36rWg9eBBgGEc-mfiXLz4Eop8sOiY7YyClDlkeFM09V9-nqJoHcAiEXN9ho1dfKeodmLsl2mES~JL4Uw6nGwjTATX9Ci68fRhtqFf6fGSz9upwHP2yOWbnWUrFop8aFgyZYPfBPaO4la9xKHqX8WMtbA9rvfdsiDcbPO2O0NuqHN~TxoffebgXnJV4EPGsWcEo~FRXA__"
                  alt=""
                />
                <h1 className="text-[white] sm:text-[18px] text-[40px] mt-[24px] sm:mt-[16px] font-[600]">
                  How to ask when doing User Research
                </h1>
                <p className="text-[#7E8492] text-[18px] sm:text-[14px] sm:mt-[16px] mt-[24px]">
                  Bro, the story is that you want to make an application for
                  buying and selling goods on the market. During user research,
                  what do you think you will ask people?
                </p>
              </div>

              <div className="w-[584px] mt-[160px] sm:mt-[50px] sm:w-full">
                <img
                  className="h-[751px] sm:h-auto"
                  src="https://s3-alpha-sig.figma.com/img/a03f/2524/8656c10496cd1aa76d413ae9373e4279?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S8av1f-jrg2-acQzV6NOR~5hVl7oCRo9mlyxs8mZaGXzznc9085APT8oPGf~lYxUPcH4-jE-BEs0eEso8G17h8ak4kqmno9gRlsy-K5NRrcwdxv3RJpfeSJVbVZR8~h~DSztQk8GVnlEfNRdpt04D3BytG6reYTUgkrQnslAFMZ0ss7mk5JJQhQlO28AdbJPLrTWlBI4kPaL6jBBkMKObok~K1D0y0fScRQzsokeoUbRf0K0AMXfsmxUB0aA3Q~012jg4pSzydfoW7y-6TX1m04KZu3MJNb9JgoCOQFMDZx5FXzvADY1rf9VTfljZVD4826UrfgQgzNOehDSfcMVvg__"
                  alt=""
                />
                <h1 className="text-[white] sm:text-[18px] text-[40px] mt-[24px] sm:mt-[16px] font-[600]">
                  Webflow Break the Coding Barrier
                </h1>
                <p className="text-[#7E8492] text-[18px] sm:text-[14px] sm:mt-[16px] mt-[24px]">
                  Webflow is web design tool as well as a hosting platform and
                  CMS all in one. While you are probably familiar with all of
                  these, they are usually entirely separate tools.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[160px] sm:mt-[80px]">
            <div className="flex justify-between sm:flex-col sm:gap-y-[20px] items-center sm:justify-center">
              <div className="">
                <h1 className="text-[#1D1E25] dark:text-[#ffffff] sm:text-[18px] text-[40px] mt-[24px] sm:mt-[16px] font-[600]">
                  Articles
                </h1>
                <p className="text-[#7E8492] w-[435px] sm:w-full text-[18px] sm:text-[14px]">
                  Complex tech decoded by engineers, business trends analyzed by
                  experts.
                </p>
              </div>

              <div className="">
                <img src={ButtonArrow} alt="" />
              </div>
            </div>
          </div>

          <div className="flex overflow-hidden sm:flex-wrap sm:gap-y-[20px] gap-x-[32px] mt-[80px] pb-[200px] sm:pb-[100px]">
            <div className="w-[405px] sm:w-full">
              <img src="https://s3-alpha-sig.figma.com/img/179d/e0c8/f9780c5a36aeea5aaa1b0f822676263b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bZq15Eu0Gfvf3x-kQ78aOoOkNXHuGvedSyTzxcHdeuBTlH0cCaCGBuqehFhH1S-YRJwMkBLJHyC1aCrWcUhhBwN2Lk1Y4eg8WrcD2WhS4O0jZGv-sZkcfpIBwaEaW91AmOPYUzra~l1W9wA4S3APOol~l3KfkxxvprL1hMJc7Os6yoaMTwgBxzdmAiUAUYCy8VuGGKdcuZoO~sLnWQOElHBCe6sUuR37L~CjnEf890PsYA9fN-OGC8qj2ogzhJYlK6ZW9QjurfMjsYhTEr4D3ywhknLeBE~hWedu0L~eyDU19kHICjt~-dFmjOXx5zDqzpv-4YtZVjkY82NtcwEF4w__" alt="" />
              <h1 className="dark:text-white leading-[42px] text-[32px] sm:text-[18px]">List of UX Designer Portfolio / Case Studies where you can make money</h1>  
              <p className="text-[#7E8492] text-[18px] sm:text-[16px]">Here are some portfolios / Case Studies from UX Designers that you can use as a reference for creating a portfolio. Two interesting things from their portfolio are:</p>
              <button className="p-[16px_32px] mt-[24px] border-[1px] border-[#CED1D8] rounded-full dark:text-[white]">Read More</button>
            </div>
            
            <div className="w-[405px] sm:w-full">
              <img src="https://s3-alpha-sig.figma.com/img/499e/4db9/8cad6de10f6282efc82d1431d35a88b4?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFK~Y44uvSVpSsd1c02p7mnEApBcHd8BXgrVEJewY03dtjZIl8Qdb1P7cAMMS10~JRPMqgaFzK~J8BMUKE3RHwLIEpbc~begWERypTbyuyHfacQths3FjmFG2BZq0j3Si3I3uEm460dXmbylqFd8IVJy3hvgpPgTJSWlGz8Lq-hXYks8IzzF0nAbmh~Sh8cWHe4uK~wVvkWB8mQy0WN6fnXK8gZnQSIRUq05E~KAIpVHOq8Iona~i-S6079T9IgXhBRXZDDgPb31JfMNJQbonw2epD9USYwT31YHUOqw10kEIN82dKI7nfV~QM5SFfGfEWXKgrusmQEHxdStHPpnkg__" alt="" />
              <h1 className="dark:text-white leading-[42px] text-[32px] sm:text-[18px]">Skyrocketing in The Designing Career, Why Not?</h1>  
              <p className="text-[#7E8492] text-[18px] sm:text-[16px]">Ever thought of jumping into the world of design as a career? If not, you may want to look at what the word ‘design’ actually means. Design is a method of designing aesthetic actions that are carried out.</p>
              <button className="p-[16px_32px] mt-[24px] border-[1px] border-[#CED1D8] rounded-full dark:text-[white]">Read More</button>
            </div>

            <div className="w-[405px] sm:w-full">
              <img className="h-[695px] w-[476px] sm:w-auto sm:h-auto" src="https://s3-alpha-sig.figma.com/img/9766/e83a/f787553f39ea36ca3d0575ddc92996e3?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XzI6r0~1gyBRsN1iaQCuoUl5RLivNnSkbYXhrgcaV0bLUOqTYyZZfwYJ5D0uuQbR0SdT3NN0KPPidlENIWOFq2pFvYPYldOCOwJYDZgy4ywS4d4PrAIkNLd7IYowjSzCjg~lP9DQidXbFJn5vrt3Iq-SFsVGgcWXGYWoxayG6eI8CuhyECWtitemfChE76wG~NRA-houArYJ6a7jy0Kqqo4YNHY5HatDSUUoKXyn5eOK7iMk48Qjq1pV9RCswlXa0fzKQxy5alJoFgZKwxGQHrPT-1QkQBaet4XUTdD44SSJBEEiIWEjyuDYSUSh00g8T92RBUt36Iz9CbI7SrevDw__" alt="" />
              <h1 className="dark:text-white leading-[42px] text-[32px] sm:text-[18px]">Elements that may be missed when designing the UI</h1>  
              <p className="text-[#7E8492] text-[18px] sm:text-[16px]">This is an article that talks about the little elements that are often overlooked when designing UI.</p>
              <button className="p-[16px_32px] mt-[24px] border-[1px] border-[#CED1D8] rounded-full dark:text-[white]">Read More</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
