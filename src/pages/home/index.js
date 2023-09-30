import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import vecone from "../../assets/section_one/grid.136a9256d16888900db0.svg (2).png";
import vectwo from "../../assets/section_one/grid.136a9256d16888900db0.svg (3).png";
import picone from "../../assets/section_one/AdobeStock_362497671 1.png";
import pictwo from "../../assets/section_one/AdobeStock_400053098 1.png";
import picthree from "../../assets/section_one/woman-using-smartphone-technology 2.png";
import dart from "../../assets/section_two/Icon placeholder.png";
import paperplane from "../../assets/section_two/Icon placeholder (1).png";
import revision from "../../assets/section_two/Icon placeholder (2).png";
import vidrepo from "../../assets/section_two/Video Repository (1).png";

export default function Home() {
  return (
    <div>
      <section className="h-[700px] md:px-[100px] px-[20px] py-[50px] md:py-[100px] mb-[75px] flex flex-col md:flex-row items-center justify-between overflow-x-hidden ">
        <div className="w-full md:w-[45%] relative z-10">
          <h1 className="text-[46px] md:text-[64px] font-bold text-[#141414] leading-[65px] mb-5">
            Show Them Don’t Just Tell
          </h1>
          <p className="text-[20px] font-regular leading-7 text-black opacity-75 mb-12">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
          <button className="flex items-center gap-2 px-6 py-5 bg-[#120b48] text-white rounded-lg mb-10 md:mb-0">
            <span className="text-[18px]">Install HelpMeOut</span>
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
        <div className="w-full md:w-[50%] relative">
          <div className="w-full h-full absolute left-0 top-0">
            <img
              src={vecone}
              alt="vector image"
              className="w-[300px] h-[313px] absolute top-0 left-[-50px]"
            />
            <img
              src={vectwo}
              alt="vector image"
              className="w-[300px] h-[313px] absolute bottom-0 right-[-50px]"
            />
          </div>

          <div className=" h-full w-full absolute left-0 top-0 flex items-center gap-4">
            <div className="">
              <div className="w-[311px] h-[214px]rounded-[8px] mb-4">
                <img
                  src={pictwo}
                  alt="woman on headphone"
                  className="h-full w-full object-cover rounded-[8px]"
                />
              </div>

              <div className="hidden sm:block w-[311px] h-[214px] rounded-[8px]">
                <img
                  src={picone}
                  alt="tutor and kid"
                  className="h-full w-full object-cover rounded-[8px]"
                />
              </div>
            </div>

            <div className="w-[305px] h-[450px] rounded-[8px] hidden sm:block md:hidden lg:block">
              <img
                src={picthree}
                alt="woman on phone"
                className="h-full w-full object-cover rounded-[8px]"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-slate-100 h-14 w-full mb-20"></div>

      <section className="px-[20px] md:px-[100px] pb-20">
        <h2 className="text-center text-[#141414] font-bold text-3xl md:text-4xl">
          Features
        </h2>
        <h5 className="text-center text-black opacity-75 mb-16 font-medium md:text-sm text-xl">
          Key Highlights of Our Extension
        </h5>

        <div className="flex flex-col md:flex-row gap-7w md:gap-14">
          <div className="w-full md:w-[50%]">
            <div className="flex gap-4 mb-12">
              <img src={dart} alt="dart" className="h-[38px] md:h-[48px] w-[38px] md:w-[48px]"/>
              <div>
                <h4 className="text-[20px] lg:text-[28px] font-semibold text-[#1b233d]">Simple Screen Recording</h4>
                <p className="text-[16px] lg:text-[20px] text-black opacity-75">
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </p>
              </div>
            </div>

            <div className="flex gap-4 mb-12">
              <img src={paperplane} alt="paperplane" className="h-[38px] md:h-[48px] w-[38px] md:w-[48px]" />
              <div>
                <h4 className="text-[20px] lg:text-[28px] font-semibold text-[#1b233d]">Easy-to-Share URL</h4>
                <p className="text-[16px] lg:text-[20px] text-black opacity-75">
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </p>
              </div>
            </div>

            <div className="flex gap-4 mb-12">
              <img src={revision} alt="revision" className="h-[38px] md:h-[48px] w-[38px] md:w-[48px]" />
              <div>
                <h4 className="text-[20px] lg:text-[28px] font-semibold text-[#1b233d]">Revisit Recordings</h4>
                <p className="text-[16px] lg:text-[20px] text-black opacity-75">
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[50%]">
            <img src={vidrepo} alt="video repo" className="w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
