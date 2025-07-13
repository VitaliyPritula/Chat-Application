import { useState, useEffect } from "react";
import './style.css';
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <header className="fixed w-full left-0 bg-white z-20">
      <div className="max-w-[1326px] px-[15px] mx-auto">
        <div className="flex justify-between items-center py-3 relative">
          <a
            href="/"
            className="text-m text-black font-semibold font-inter flex gap-x-1 items-center transition-colors duration-300 overflow-x-hidden md1:w-auto w-[25px]">
            <img src="/public/logo.svg" alt="" />
            Chat Application
          </a>
          {/* Desktop Navigation */}
          <div
            className={`lg2:relative absolute top-15 lg2:top-0 right-0 lg2:bg-transparent bg-white w-full lg2:w-auto transform transition-all duration-500 ease-in-out ${
              isOpen
                ? "translate-x-0 opacity-100 h-screen overflow-y-scroll px-3"
                : "lg2:translate-x-0 translate-x-[120%] lg:opacity-100 opacity-0"
            }`}>
            <nav className="flex flex-wrap lg2:flex-row flex-col gap-x-6 ">
              <a
                href="#"
                className="text-black/70 font-inter font-medium hover:text-black  transition-colors duration-300 lg2:mb-0 mb-3">
                Demos
              </a>
              <a
                href="#"
                className="text-black/70 font-inter font-medium hover:text-black transition-colors duration-300 lg2:mb-0 mb-3">
                About
              </a>
              <a
                href="#"
                className="text-black/70 font-inter font-medium hover:text-black transition-colors duration-300 lg2:mb-0 mb-3">
                Blog
              </a>
              <a
                href="#"
                className="text-black/70 font-inter font-medium hover:text-black transition-colors duration-300 lg2:mb-0 mb-3">
                Pages
              </a>{" "}
              <a
                href="#"
                className="text-black/70 font-inter font-medium hover:text-black transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>
          <div className="lg2:pr-0 md1:pr-15 pr-14 flex items-center header-items">
            <a href="" className="text-black">Login</a>
            <button type="submit" className="btn text-m">
              Gen startde free
            </button>            
          </div>
          {/* Burger Icon */}
          <div
            className="absolute right-3 flex flex-col justify-between w-6 h-4 lg2:hidden cursor-pointer z-20"
            onClick={toggleMenu}>
            <span
              className={`block h-[2px] bg-black transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1" : ""
              }`}></span>
            <span
              className={`block h-[2px] bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}></span>
            <span
              className={`block h-0.5 bg-black transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[11px]" : ""
              }`}></span>
          </div>
        </div>
      </div>
    </header>
  );
};
