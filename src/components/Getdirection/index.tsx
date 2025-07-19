import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Features() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  const [customers, setCustomers] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      let start: number | null = null;

      const duration = 2000;
      const customersTarget = 7;
      const ratingTarget = 4.3;

      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;

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
        delay: i * 0.6,
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
      className="py-[49px]"
    >
      <div className="max-w-[1189px] mx-auto px-[15px]">
        <div className="flex flex-wrap items-center">
          <div className="flex-1/2 mb-15">
            <img
              className="lx:w-auto w-full"
              src="/public/Main/massege-2.jpg"
              alt="massege_img"
            />
          </div>
          <div className="lx:max-w-[450px]">
            <h2 className="font-Clachdisplay font-semibold md2:text-[40px] text-[25px] mb-[20px] text-black-50 lg:leading-10">
              Get direct orders from your customers
            </h2>

            <motion.p
              custom={0}
              variants={paragraphVariants}
              initial="hidden"
              animate={controls}
              className="mb-5 font-inter font-regular leading-8"
            >
              Great software that allows you to chat from any place at any time
              without any interruption.
            </motion.p>

            <div className="flex gap-6">
              <motion.div
                custom={1}
                variants={paragraphVariants}
                initial="hidden"
                animate={controls}
                className="font-inter font-regular flex items-center"
              >
                <span className="text-l uppercase font-bold leading-8 pr-2.5">
                  {rating.toFixed(1)}k+
                </span>
                <span className="leading-5">
                  Website's <br />
                  powering
                </span>
              </motion.div>

              <motion.div
                custom={2}
                variants={paragraphVariants}
                initial="hidden"
                animate={controls}
                className="font-inter font-regular flex items-center"
              >
                <span className="text-l uppercase font-bold leading-8 pr-2.5">
                  {customers.toLocaleString()}М+
                </span>
                <span className="leading-5 text-m">
                  Chats in <br />
                  last 2022
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
