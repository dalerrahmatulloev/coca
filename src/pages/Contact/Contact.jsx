import Map from "./../../assets/Map.png";
import AirbnbLogo from "./../../assets/Airbnb Logo.svg";
import AmazonLogo from "./../../assets/Amazon Logo.svg";
import FedExLogo from "./../../assets/FedEx Logo.svg";
import MicrosoftLogo from "./../../assets/Microsoft Logo.svg";
import GoogleLogo from "./../../assets/Google Logo.svg";
import OLALogo from "./../../assets/OLA Logo.svg";
import WalmartLogo from "./../../assets/Walmart Logo.svg";
import OYOLogo from "./../../assets/OYO Logo.svg";
import Image2 from "./../../assets/Image (2).png";
import { Input } from "antd";

const { TextArea } = Input;
export default function Contact() {
  return (
    <>
      <header className="py-[90px] overflow-hidden sm:py-[45px]">
        <h1 data-aos="fade-right" className="text-[72px] w-[741px] sm:leading-[40px] leading-[86.4px] sm:w-full dark:text-[#8b8282] sm:text-[30px] font-[700]">
          Contact our team to find out more
        </h1>
        <div className="flex justify-between mt-[100px] sm:mt-[50px] items-center sm:flex-col sm:justify-center">
          <img data-aos="fade-right" src={Map} alt="" />
          <div data-aos="fade-left" className="sm:flex sm:flex-wrap sm:mt-[50px] sm:justify-between">
            <div className="h-[146px] w-[146px] sm:h-[120px] border-b-[1px] border-[#AFB3BB]">
              <h2 className="text-[24px] sm:text-[16px] font-[700] dark:text-[#8b8282]">
                Support
              </h2>
              <p className="text-[#7E8492] text-[14px] mt-[8px]">
                Our friendly team is here to help.
              </p>
              <p className="text-[#1D1E25] text-[14px] sm:mt-[12px] mt-[20px] font-[500] dark:text-[#8b8282]">
                support@sans.com
              </p>
            </div>

            <div className="h-[146px] w-[146px] sm:h-[120px] border-b-[1px] mt-[40px] sm:mt-[0px] border-[#AFB3BB]">
              <h2 className="text-[24px] sm:text-[16px]  font-[700] dark:text-[#8b8282]">
                Sales
              </h2>
              <p className="text-[#7E8492] text-[14px] mt-[8px]">
                Questions or queries? Get in touch!
              </p>
              <p className="text-[#1D1E25] text-[14px] sm:mt-[12px] mt-[20px] font-[500] dark:text-[#8b8282]">
                sales@sans.com
              </p>
            </div>

            <div className="h-[146px] w-[146px] sm:h-[120px] border-b-[1px] sm:mt-[24px] mt-[40px] border-[#AFB3BB]">
              <h2 className="text-[24px] sm:text-[16px]  font-[700] dark:text-[#8b8282]">
                Phone
              </h2>
              <p className="text-[#7E8492] text-[14px] mt-[8px]">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="text-[#1D1E25] text-[14px] sm:mt-[12px] mt-[20px] font-[500] dark:text-[#8b8282]">
                +1 (435) 345-7655
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="overflow-hidden">
        <section>
          <div data-aos="zoom-in-up" className="flex justify-between sm:mt-[56px] mt-[160px] flex-wrap text-left sm:justify-center">
            <div className="w-[313px]">
              <h1 className="dark:text-[#8b8282] sm:w-full text-[56px] font-[600] leading-[67.2px] sm:text-[26px] sm:leading-[32px]">
                890+
              </h1>
              <p className="sm:text-[16px] sm:w-full text-[#7E8492] sm:mt-[5px] mt-[16px] text-[18px]">
                some big companies that we work with, and trust us very much
              </p>
            </div>

            <div className="flex flex-wrap sm:mt-[20px] justify-between gap-y-[10px] w-[730px] sm:w-full">
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

          <div className="mt-[180px] sm:mt-[80px] relative pb-[200px] sm:pb-[100px]">
            <img data-aos="fade-left" className="right-0 absolute sm:hidden z-[-10] h-[765px] w-[787.27px]" src={Image2} alt="" />
            <div data-aos="zoom-out-up" className="p-[56px_48px] sm:p-[24px] dark:bg-[#323232] bg-[#ffffff] sm:w-full w-[608px]">
              <h1 className="dark:text-[#8b8282] sm:text-[18px] text-[36px]">
                Let’s level up your brand
              </h1>
              <p className="text-[#7E8492] sm:text-[14px] text-[18px] mt-[10px]">
                You can reach us anytime{" "}
                <span className="text-[#1463FF]">
                  hellosansbrothers@gmail.com
                </span>
              </p>
              <div className="flex justify-between sm:flex-col items-center">
                <div className="mt-[48px] sm:mt-[24px]">
                  <p className="dark:text-[white]">First name</p>
                  <input
                    className="h-[44px] pl-[12px] border-[#EDEDED] sm:w-[305px] border-[1px] w-[240px] dark:text-[white] rounded-[8px] mt-[6px] dark:bg-[#808080]"
                    type="text"
                    placeholder="First name"
                  />
                </div>

                <div className="mt-[48px] sm:mt-[32px]">
                  <p className="dark:text-[white]">Last name</p>
                  <input
                    className="h-[44px] pl-[12px] sm:w-[305px] border-[#EDEDED] border-[1px] w-[240px] dark:text-[white] rounded-[8px] mt-[6px] dark:bg-[#808080]"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="mt-[24px]">
                <p className="dark:text-[white]">Email</p>
                <input
                  className="h-[44px] sm:w-[305px] pl-[12px] border-[#EDEDED] border-[1px] w-[100%] dark:text-[white] rounded-[8px] mt-[6px] dark:bg-[#808080]"
                  type="text"
                  placeholder="you@company.com"
                />
              </div>

              <div className="mt-[24px]">
                <p className="dark:text-[white]">Phone number</p>
                <input
                  className="h-[44px] sm:w-[305px] pl-[12px] border-[#EDEDED] border-[1px] w-[100%] dark:text-[white] rounded-[8px] mt-[6px] dark:bg-[#808080]"
                  type="text"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="mt-[24px]">
                <p className="dark:text-[white]">Message</p>
                <TextArea className="dark:bg-[#808080] sm:w-[305px] dark:text-[white] mt-[6px] border-[#EDEDED] border-[1px]" rows={4} placeholder="Leave us a message..." maxLength={6} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
