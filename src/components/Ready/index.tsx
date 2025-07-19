import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Whatcustumer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [inView, controls, isModalOpen]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className="py-[60px]">
      <div className="max-w-[542px] mx-auto px-[15px]">
        <motion.h2
          variants={sectionVariants}
          className="text-black-50 font-Clachdisplay font-semibold lg:mb-11 mb-9 lg:text-center text-[30px] leading-[152%]">
          Ready to grow your business? Start with application, become faster
          every second
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          <motion.div initial="hidden" animate={controls}>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="text-m font-medium font-inter border px-4 py-2 rounded hover:bg-black hover:text-white transition">
              Start chatting now
            </button>
          </motion.div>
        </div>
      </div>

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
              This is a demo popup. You can place a form, contact info, or
              anything here.
            </p>
          </div>
        </div>
      )}
    </motion.section>
  );
}
