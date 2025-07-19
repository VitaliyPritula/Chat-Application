import { useState, useEffect } from "react";
import "./style.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // scroll lock лише для меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    if (isPopupOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen, isPopupOpen]);

  return (
    <header className="fixed w-full left-0 bg-white z-20">
      <div className="max-w-[1326px] px-[15px] mx-auto">
        <div className="flex justify-between items-center py-3 relative">
          <a
            href="/"
            className="text-m text-black font-semibold font-inter flex gap-x-1 items-center transition-colors duration-300 overflow-x-hidden md1:w-auto w-[25px]">
            <img src="/logo.svg" alt="Logo" />
            Chat Application
          </a>

          {/* Desktop Navigation */}
          <div
            className={`lg2:relative absolute top-15 lg2:top-0 right-0 lg2:bg-transparent bg-white w-full lg2:w-auto transform transition-all duration-500 ease-in-out ${
              isMenuOpen
                ? "translate-x-0 opacity-100 h-screen overflow-y-scroll px-3"
                : "lg2:translate-x-0 translate-x-[120%] lg:opacity-100 opacity-0"
            }`}>
            <nav className="flex flex-wrap lg2:flex-row flex-col gap-x-6">
              {["Demos", "About", "Blog", "Pages", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-black/70 font-inter font-medium hover:text-black transition-colors duration-300 lg2:mb-0 mb-3">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg2:pr-0 md1:pr-15 pr-14 flex items-center header-items">
            <a href="#" className="text-black mr-3">
              Login
            </a>
            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="btn lg:!text-m !text-s">
              Gen startde free
            </button>
          </div>

          {/* Burger Icon */}
          <div
            className="absolute right-3 flex flex-col justify-between w-6 h-4 lg2:hidden cursor-pointer z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span
              className={`block h-[2px] bg-black transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}></span>
            <span
              className={`block h-[2px] bg-black transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}></span>
            <span
              className={`block h-0.5 bg-black transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-[11px]" : ""
              }`}></span>
          </div>
        </div>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed w-full inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-[400px] w-full relative">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black">
              ✕
            </button>
            <h3 className="text-lg font-semibold mb-4">Let's Chat!</h3>
            <p className="text-sm text-gray-700">
              This is a demo popup. You can place a form, contact info, or
              anything here.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
