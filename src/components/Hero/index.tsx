"use strict";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customers, setCustomers] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 200);

    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      const customersTarget = 2291;
      const ratingTarget = 4.8;
      const duration = 2000;

      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      const timeFraction = Math.min(progress / duration, 1);
      const eased = easeOut(timeFraction);

      setCustomers(Math.floor(eased * customersTarget));
      setRating(parseFloat((eased * ratingTarget).toFixed(1)));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      clearTimeout(timeout);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <section className="">
      <div className="max-w-[1326px] mx-auto px-[15px]">
        <div className="flex lg:flex-wrap flex-wrap">
          <div className="2xl:flex-[0_1_65%] lg2:flex-[0_1_55%] mb-5">
            <div className="lg:max-w-[495px]">
              <h1
                className={`lg:text-xlg text-[29px] font-semibold font-Clachdisplay text-black-50 mb-5 transition-all duration-700 ease-out ${
                  loaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}>
                Start chatting with customers, anywhere anytime with applacation
              </h1>
              <p
                className={`font-regular text-sm font-inter lg2:max-w-[420px] mb-5 transition-all duration-1000 ease-out ${
                  loaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}>
                Great software that allows you to chat from any place at any
                time without any interruption.
              </p>
              <button
                type="submit"
                onClick={() => setIsModalOpen(true)}
                className="form-btn font-inter font-medium btn">
                Start chatting now
              </button>
              {/* POPUP / MODAL */}
              {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-6 max-w-[400px] w-full relative">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-2 right-2 text-gray-500 hover:text-black">
                      ✕
                    </button>
                    <h3 className="text-lg font-semibold mb-4">Let's Chat!</h3>
                    <p className="text-sm text-gray-700">
                      This is a demo popup. You can place a form, contact info,
                      or anything here.
                    </p>
                  </div>
                </div>
              )}
              <div
                className={`flex flex-wrap items-center md2:pt-[58px] pt-3.5 transition-all duration-1000 ease-out ${
                  loaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}>
                <div className="flex items-center">
                  <img className="" src="/public/Main/01.png" alt="image" />
                  <img
                    className="transform -translate-x-4"
                    src="/public/Main/02.png"
                    alt="image"
                  />
                  <img
                    className="transform -translate-x-8"
                    src="/public/Main/03.png"
                    alt="image"
                  />
                </div>
                <div className="md:pr-10 pr-2">
                  <p className="text-sm font-inter font-bold">
                    {customers.toLocaleString()}
                  </p>
                  <p className="md:text-m text-[11px] font-inter font-regular">
                    Happy customers
                  </p>
                </div>
                <div className="">
                  <p className="text-sm font-inter font-bold">{rating}/5</p>
                  <p className="md:text-m text-[11px] font-inter font-regular">
                    Rating
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-center lg2:w-auto w-full">
            <div className="relative h-[500px]">
              <div className="mx-auto">
                <img
                  className="md2:w-full w-[90%]"
                  src="/public/Main/user.png"
                  alt="user"
                />
                <span className="-z-2 border-black border-3 top-9 rounded-full absolute md1:w-[414px] w-[313px] md1:h-[414px] h-[313px]"></span>
                <span className="before:absolute before:-z-10 md1:before:w-[414px] before:w-[314px] md1:before:h-[414px] before:h-[314px] before:bg-amber-400 before:top-12 before:-left-8 before:rounded-full"></span>
              </div>
              <div
                className={`bg-white transform 2xl:-translate-x-64 lg:-translate-x-36 md2:-translate-x-30 -translate-x-4 lg:-translate-y-36 -translate-y-48 shadow-lg rounded-xl py-[9px] md2:px-[22px] px-[11px] max-w-xs duration-1000 ease-out lg:w-auto w-[200px] ${
                  loaded ? "opacity-100 " : "opacity-0 -translate-x-96"
                }`}>
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="/public/Main/03.png"
                    alt="Eli json"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <p className="font-inter font-bold text-black-100">
                    Eli json
                  </p>
                </div>
                <p className="lg:text-m text-[11px] font-inter lg:pr-10  text-black-100">
                  Great software that allows you to chat from any place at any
                  time without any interruption.
                </p>
              </div>
              <div
                className={`bg-white transform lg:translate-x-46 md:translate-x-26 translate-x-22 lg:-translate-y-80 -translate-y-36 shadow-lg rounded-xl p-4 max-w-[240px] pr-10 transition-all duration-700 ease-out
                 ${loaded ? "opacity-100 " : "opacity-0 translate-x-96"}

                `}>
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="/public/Main/02.png"
                    alt="Eli json"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <p className="font-semibold tex-[10px]">Eli json</p>
                </div>
                <p className="text-[11px] text-gray-700 font-inter ">
                  Great software that allows you to chat from any place at any
                  time without any interruption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
