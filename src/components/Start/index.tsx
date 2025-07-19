import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function Features() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.8,
        duration: 0.6,
      },
    }),
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className="py-[49px]">
      <div className="max-w-[1189px] mx-auto px-[15px]">
        <div className="lg:flex flex-wrap">
          <div className="lg:flex-1/2">
            <div className="lx:max-w-[450px]">
              <h2 className="font-Clachdisplay font-semibold md2:text-[30px] text-[25px] mb-[20px] text-black-50">
                Start selling directly inside conversations
              </h2>
              <motion.p
                custom={0}
                variants={paragraphVariants}
                initial="hidden"
                animate={controls}
                className="mb-5 font-inter font-regular leading-8">
                Great software that allows you to chat from any place at any
                time without any interruption.
              </motion.p>
              <motion.p
                custom={1}
                variants={paragraphVariants}
                initial="hidden"
                animate={controls}
                className="font-inter font-regular leading-8">
                Great software that allows you to chat from any place at any
                time without any interruption. Great software that allows you to
                chat from any place at any time without any interruption.
              </motion.p>
            </div>
          </div>
          <div className=" mb-10">
            <img className="w-full" src="/Main/massege.jpg" alt="massege_img" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
