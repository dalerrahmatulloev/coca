import LinkedPath from "./../../assets/Linked Path.svg";
import Frame1171275129 from "./../../assets/Frame 1171275129.svg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper/modules";
export default function About() {
  return (
    <>
      <header>
        <div className="flex pt-[87px] sm:pt-[20px] sm:pb-[50px] pb-[141px] sm:flex-wrap sm:justify-center items-center justify-between">
          <div className="text-left w-[1200px] sm:w-full">
            <h1 className="text-[80px] sm:w-full w-[959px] dark:text-[#8b8282] sm:text-[30px] font-[700]">
              Everything you need to get the attention of your audience
            </h1>
            <div className="flex justify-between sm:flex-col">
              <p className="text-[32px] dark:text-[#cacaca] sm:text-[20px] sm:w-full sm:mt-[20px] w-[738px] mt-[60px] font-[600]">
                Our digital agency helps clients develop, implement and maintain
                successful digital marketing strategies across all channels.
                Also work with you to build your website and create online
                businesses that grow.
              </p>
              <img src={LinkedPath} alt="" />
            </div>
          </div>
        </div>

        <div className="flex items-start relative sm:flex-col overflow-hidden pb-[165px] sm:pb-[80px]">
          <img
            className="w-[502px] h-[629px] sm:w-auto sm:h-auto"
            src="https://s3-alpha-sig.figma.com/img/9dc4/3ea8/7c29b788c5623e6a9566cbcf1874ea1d?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Haj-Gf~WsvkhwUGeCaVLWKw4s6He~e89qh7qguaxF0mwrqsmJ3JYuY1uYMn3TpcwC9H3FCCI7QFEe1rB5tOy1yE8f0Io3xL5aiBv5RTihCHEr49H4al0Qeg-Iv3JHxnItNelBVUgGIMKUMvlXsSBBch6i3bA0gC9okcd1Vx5IL7BVV1ifXBS-n05tMDJvz1HanGgPHCcJ6JlKJsystbfs44lY5aJvnkYJaPfmSk2l6J6YYwgDBcc8GT9ewDpjxfwuFL0moJdok~GSzy47iYXEPDZ7aOG6Oj8XYGbb6Z91IhCx6S2tOZHKyGjTaRIAOxaLE5sNjsPG~j1~pDicaetCA__"
            alt=""
          />
          <div className="w-[502px] sm:w-full sm:mt-[20px] h-[629px] ml-[32px] sm:ml-[0px]">
            <img
              className="w-[502px] sm:w-auto sm:h-auto h-[370px]"
              src="https://s3-alpha-sig.figma.com/img/a03f/2524/8656c10496cd1aa76d413ae9373e4279?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S8av1f-jrg2-acQzV6NOR~5hVl7oCRo9mlyxs8mZaGXzznc9085APT8oPGf~lYxUPcH4-jE-BEs0eEso8G17h8ak4kqmno9gRlsy-K5NRrcwdxv3RJpfeSJVbVZR8~h~DSztQk8GVnlEfNRdpt04D3BytG6reYTUgkrQnslAFMZ0ss7mk5JJQhQlO28AdbJPLrTWlBI4kPaL6jBBkMKObok~K1D0y0fScRQzsokeoUbRf0K0AMXfsmxUB0aA3Q~012jg4pSzydfoW7y-6TX1m04KZu3MJNb9JgoCOQFMDZx5FXzvADY1rf9VTfljZVD4826UrfgQgzNOehDSfcMVvg__"
              alt=""
            />
            <h1 className="text-[#1D1E25] mt-[24px] text-[32px] dark:text-[#8b8282]">
              What we believe in
            </h1>
            <p className="text-[18px] text-[#7E8492]">
              Over the years at Sans, we’ve put a lot of thought into what it is
              that makes us who we are. The qualities that unite us, that make
              us such an effective team, and...
            </p>
            <button className="text-[white] p-[16px_32px] mt-[32px] bg-[#1D1E25] rounded-[100px] dark:bg-[#4a4a4a]">
              See Details →
            </button>
          </div>
          <img
            className="h-[460px] absolute right-[-560px]"
            src="https://s3-alpha-sig.figma.com/img/a592/3d37/59c42dcbcbe4f467c995bb0863eb9ddf?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gab9qbFJ3ITW5WcfNRGK3LZX6WbCzw7gGibtjJBy38ViwXyDZfZxcj7eNWNncsvUIFcHVSVsZO69b39LSDS34agCObeURoA~2jpe~LZTRGJeALgTl996KO~uq9-3AzwbH1i-z~AMeJGaG1e9ssdZwQWAR9Nw-dU1bq1irGVf6sGtQqXvauK9CaKvDysr4cIqhM1we0oxCDfbKED00fhf5ilx51SJTAadDBRkSWQxwWhyIgvTE3Op5MEJCHJN9PMJNnr2cF5~bvRb3GkROTsKin1ieMBF3Sem1ApJKCyWkm8SYfa6wLdxMd4B5IsT0ZT7jhQWMg8rPLz-S2M86H7muQ__"
            alt=""
          />
        </div>
      </header>

      <main>
        <section>
          <div className="border-t-[1px] flex justify-between items-center sm:flex-col sm:justify-center sm:gap-y-[30px] border-[#EDEDED] py-[80px] sm:py-[30px]">
            <h1 className="dark:text-[#8b8282] w-[480px] text-[56px] sm:text-[28px] leading-[67.2px] sm:leading-6 sm:w-full">
              Powerful ideas & sales acceleration
            </h1>
            <p className="dark:text-[#cacaca] w-[522px] text-[25px] sm:text-[18px] leading-[36px] sm:leading-6 sm:w-full">
              We are a software development firm specializing in digital
              products. We build beautiful, functional and cross-platform
              solutions that are accessible to all.
            </p>
          </div>

          <div className="mt-[160px] sm:mt-[80px]">
            <h1 className="dark:text-[#8b8282] w-[803px] text-[56px] sm:text-[28px] leading-[67.2px] sm:leading-6 sm:w-full">
              Meet our team of creators, designers, and world-class problem
              solvers
            </h1>
            <p className="text-[18px] w-[534px] sm:text-[16px] sm:w-full mt-[24px] text-[#7E8492]">
              To become the company that customers want, it takes a group of
              passionate people. Get to know the people who lead
            </p>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mt-[80px] sm:mt-[50px]"
            >
              <SwiperSlide className=" bg-transparent">
                <div className="h-[521px] w-[379px]">
                  <div className="w-[379px] h-[434px]">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/05be/041b/58b5e1fe37be4a6bb5a74f76d7c0f06d?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X7AU2ZUGa1K3XLnBe9G3pzvAx9xGi3CynxQ2wOOzKV570MUejqqeqOJV9erxdv2cQNbvGeDgomQeab47ttpK9CpadVfY-pCQKYgi~Heaaa08spaAxHWawl7FFHRxcEddPrG5EHwwahOh182pO4~pTqb26Wa0ySNPBPJIqSseaXtikVnXt7bbFLBBBFFJdfUkfotk07uRZihPn5hw4Ii8ciZQpEvk2S8a7VjpC6-odV7ZRXQ-XS6yXERH4ubhfoB91ikAN3KdFpp0wtEtVmpDHWRxQzEnIvS~k0gMQV5oKZHSBtOR68XCnMxiDc8meBxT7uReOLkvCvdcnuPd6Cs7mw__"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between mt-[16px] items-start">
                    <div className="text-left">
                      <h1 className="text-[#1D1E25] text-[24px] dark:text-[#4b4d5b]">
                        Arlyne Stefano
                      </h1>
                      <p className="text-[#7E8492] text-[18px]">
                        Founder & CEO
                      </p>
                    </div>
                    <div className="">
                      <img src={Frame1171275129} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-transparent">
                <div className="h-[521px] w-[379px]">
                  <div className="w-[379px] h-[434px]">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/30d4/a462/ea7b6e1428ffcb7ed5d646ca522e5a23?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OKK4VWKLnsrtWeYmKworUc5nGx-p~~b5zeee4v2bwZYd5IhmDIolll90KmMZCt2BfQtr6mQnfId3zYz5beF4RQozsLdGLhIv-7n-gBBfNoU8LtMLmy27wr2QqTGiZWzccYh2978AGtldyXInqVZURMqhO7Y-iOdSq38RM3Lcs3CERjE3p17Ir9KwSr7wxGDn79bS816YXCus-WsCGIXzqeujD3MzXSk~M4HRkdaRBTGZWdxDinPoEOT98QsAfNnPRfMxepQ4uVsbm3oHETJ5eEZFrbeE7OprXOtczBXqvs6Ht-rlBaf5JMuNqSme-Vhx1Mak8NBul-J2BYZl9P-hYQ__"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between mt-[16px] items-start">
                    <div className="text-left">
                      <h1 className="text-[#1D1E25] text-[24px] dark:text-[#4b4d5b]">
                        Katy Cristy
                      </h1>
                      <p className="text-[#7E8492] text-[18px]">
                        Chief Technology Officer
                      </p>
                    </div>
                    <div className="">
                      <img src={Frame1171275129} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-transparent">
                <div className="h-[521px] w-[379px]">
                  <div className="w-[379px] h-[434px]">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/3bbe/168e/ab287460eef89ff5351e750f87e0634b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EYV7JpUwcxmhNPRReIjx-cW7dbkoxTNuJ57HKrWJT2hPS46oJYvmYske3VyfdEvlZYV~~MconeMpfJ7odV-WQfBg3MifhdOBSgGrZTalQIXaHKWdr8moYCVa743~yRqaRMp4Xbd1hhOAHsYspQfX5RG1B2bXQ~W5L~K3eCIuR7M8lozDtJw3dLPUFKuvD10XzC6S61PVx8ySKTy1oIFABH64KELU5F16LVwjKbc8ddY3wydI85fgIeXM4vNKvTYTxgMFhIlVKxcA6jBo0jQ6WQwwO9CPPBoW3uW7aInKNgku9oqAARCaHn6ZsNt2eEuyI03fQcFONAHu0lf9Xhs45w__"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between mt-[16px] items-start">
                    <div className="text-left">
                      <h1 className="text-[#1D1E25] text-[24px] dark:text-[#4b4d5b]">
                        Roger Dzawin
                      </h1>
                      <p className="text-[#7E8492] text-[18px]">
                        Chief Technology Officer
                      </p>
                    </div>
                    <div className="">
                      <img src={Frame1171275129} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-transparent">
                <div className="h-[521px] w-[379px]">
                  <div className="w-[379px] h-[434px]">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/05be/041b/58b5e1fe37be4a6bb5a74f76d7c0f06d?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X7AU2ZUGa1K3XLnBe9G3pzvAx9xGi3CynxQ2wOOzKV570MUejqqeqOJV9erxdv2cQNbvGeDgomQeab47ttpK9CpadVfY-pCQKYgi~Heaaa08spaAxHWawl7FFHRxcEddPrG5EHwwahOh182pO4~pTqb26Wa0ySNPBPJIqSseaXtikVnXt7bbFLBBBFFJdfUkfotk07uRZihPn5hw4Ii8ciZQpEvk2S8a7VjpC6-odV7ZRXQ-XS6yXERH4ubhfoB91ikAN3KdFpp0wtEtVmpDHWRxQzEnIvS~k0gMQV5oKZHSBtOR68XCnMxiDc8meBxT7uReOLkvCvdcnuPd6Cs7mw__"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between mt-[16px] items-start">
                    <div className="text-left">
                      <h1 className="text-[#1D1E25] text-[24px] dark:text-[#4b4d5b]">
                        Arlyne Stefano
                      </h1>
                      <p className="text-[#7E8492] text-[18px]">
                        Founder & CEO
                      </p>
                    </div>
                    <div className="">
                      <img src={Frame1171275129} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-transparent">
                <div className="h-[521px] w-[379px]">
                  <div className="w-[379px] h-[434px]">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/30d4/a462/ea7b6e1428ffcb7ed5d646ca522e5a23?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OKK4VWKLnsrtWeYmKworUc5nGx-p~~b5zeee4v2bwZYd5IhmDIolll90KmMZCt2BfQtr6mQnfId3zYz5beF4RQozsLdGLhIv-7n-gBBfNoU8LtMLmy27wr2QqTGiZWzccYh2978AGtldyXInqVZURMqhO7Y-iOdSq38RM3Lcs3CERjE3p17Ir9KwSr7wxGDn79bS816YXCus-WsCGIXzqeujD3MzXSk~M4HRkdaRBTGZWdxDinPoEOT98QsAfNnPRfMxepQ4uVsbm3oHETJ5eEZFrbeE7OprXOtczBXqvs6Ht-rlBaf5JMuNqSme-Vhx1Mak8NBul-J2BYZl9P-hYQ__"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between mt-[16px] items-start">
                    <div className="text-left">
                      <h1 className="text-[#1D1E25] text-[24px] dark:text-[#4b4d5b]">
                        Katy Cristy
                      </h1>
                      <p className="text-[#7E8492] text-[18px]">
                        Chief Technology Officer
                      </p>
                    </div>
                    <div className="">
                      <img src={Frame1171275129} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-transparent">
                <div className="h-[521px] w-[379px]">
                  <div className="w-[379px] h-[434px]">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/3bbe/168e/ab287460eef89ff5351e750f87e0634b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EYV7JpUwcxmhNPRReIjx-cW7dbkoxTNuJ57HKrWJT2hPS46oJYvmYske3VyfdEvlZYV~~MconeMpfJ7odV-WQfBg3MifhdOBSgGrZTalQIXaHKWdr8moYCVa743~yRqaRMp4Xbd1hhOAHsYspQfX5RG1B2bXQ~W5L~K3eCIuR7M8lozDtJw3dLPUFKuvD10XzC6S61PVx8ySKTy1oIFABH64KELU5F16LVwjKbc8ddY3wydI85fgIeXM4vNKvTYTxgMFhIlVKxcA6jBo0jQ6WQwwO9CPPBoW3uW7aInKNgku9oqAARCaHn6ZsNt2eEuyI03fQcFONAHu0lf9Xhs45w__"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between mt-[16px] items-start">
                    <div className="text-left">
                      <h1 className="text-[#1D1E25] text-[24px] dark:text-[#4b4d5b]">
                        Roger Dzawin
                      </h1>
                      <p className="text-[#7E8492] text-[18px]">
                        Chief Technology Officer
                      </p>
                    </div>
                    <div className="">
                      <img src={Frame1171275129} alt="" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex justify-between mt-[100px] sm:pb-[80px] sm:mt-[56px] pb-[160px] items-center sm:flex-col smLgap-y-[30px]">
            <h1 className="dark:text-[#8b8282] w-[626px] text-[56px] sm:text-[28px] leading-[67.2px] sm:leading-7 sm:w-full">
              Join our team, The one with the master touch
            </h1>
            <div className="">
              <p className="dark:text-[#cacaca] sm:mt-[20px] w-[506px] text-[18px] sm:text-[16px] leading-[32px] sm:leading-5 sm:w-full">
                We believe it takes great people to make a great product. That’s
                why we hire not only the perfect professional fits, but people
                who embody our company values.
              </p>
              <p className="mt-[24px] font-[600] text-[16px] dark:text-white">See Open Position →</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
