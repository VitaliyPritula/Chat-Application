// Footer.tsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaFacebookF,
  FaGoogle,
  FaWhatsapp,
  FaShoppingCart,
} from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  };

  const navLinks = ["Demos", "About", "Blog", "Pages", "Contact"];
  const socials = [
    <FaGoogle />,
    <FaShoppingCart />,
    <FaFacebookF />,
    <FaWhatsapp />,
    <FaRegUser />,
  ];

  return (
    <footer ref={ref} className="bg-white border-t border-gray-200 py-6 px-4">
      <div className="max-w-[1326px] px-[15px] mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          className="max-w-6xl mx-auto flex flex-col md2:flex-row justify-between items-center gap-4">
          {/* Logo & Nav */}
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-2 font-semibold text-sm">
              <a
                href="/"
                className="text-m text-black font-semibold font-inter flex gap-x-1 items-center transition-colors duration-300">
                <img src="/public/logo.svg" alt="Logo" />
                Chat Application
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href="#"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={controls}
                className="hover:text-black">
                {link}
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 text-lg text-gray-700">
            {socials.map((icon, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={controls}
                className="hover:text-black transition-colors">
                {icon}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeUp}
          custom={navLinks.length + 1}
          className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2">
          <p>Copyright 2021, all rights reserved</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-black">
              Privacy policy
            </a>
            <a href="#" className="hover:text-black">
              Terms & conditions
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
