import React from "react";

export default function Features() {
  return (
    <section className="bg-[#FAFAFA] py-[49px]">
      <div className="max-w-[1189px] mx-auto px-[15px]">
        <h2 className="text-center font-Clachdisplay font-semibold md2:text-[30px] text-[25px] mb-[30px]">
          Features for a better experience
        </h2>
        <div className="flex flex-wrap gap-10">
          <div className="bg-while shadow-lg l py-2.5 px-[18px] lg2:w-auto w-full  h-auto rounded-lg">
            <div className="flex items-center gap-x-3.5">
              <img
                className="bg-[#E8F3FF] rounded-full p-[9px]"
                src="/public/video.svg"
                alt="video"
              />
              <h3 className="text-md font-inter font-bold">Video messaging</h3>
            </div>
            <p className="text-m leading-8 font-inter font-regular">
              This software is very easy for
            </p>
            <p className="text-m font-inter font-regular">
              you to manage you can use it as you wish.
            </p>
          </div>
          <div className="bg-while shadow-lg py-2.5 px-[18px] lg2:w-auto w-full rounded-lg h-auto">
            <div className="flex items-center gap-x-3.5">
              <img
                className="bg-[#E8F3FF] rounded-full p-[9px]"
                src="/public/wifi.svg"
                alt="wifi"
              />
              <h3 className="text-md font-inter font-bold">
                keep safe & private
              </h3>
            </div>
            <p className="text-m leading-8 font-inter font-regular">This software is very easy for </p>
            <p className="text-m font-inter font-regular">you to manage you can use it as you wish.</p>
          </div>
          <div className="bg-while shadow-lg py-2.5 px-[18px] lg2:w-auto w-full rounded-lg h-auto">
            <div className="flex items-center gap-x-3.5">
              <div className="bg-[#FDFAEC] p-2">
                <img
                  className="bg-[#E8F3FF] rounded-full p-[9px]"
                  src="/public/timer.svg"
                  alt="timer"
                />
              </div>
              <h3 className="text-md font-inter font-bold">Save you time</h3>
            </div>
            <p className="text-m font-inter font-regular">This software is very easy for</p>
            <p className="text-m font-inter font-regular">you to manage you can use it as you wish.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
