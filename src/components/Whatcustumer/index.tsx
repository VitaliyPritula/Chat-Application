import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Whatcustumer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

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
      className="bg-accent-50 py-[38px] text-while"
    >
      <div className="max-w-[1010px] mx-auto px-[15px]">
        <motion.h2
          variants={sectionVariants}
          className="text-while font-Clachdisplay font-semibold lg:mb-11 mb-9 lg:text-center text-[35px]"
        >
          What our customer are saying
        </motion.h2>

        <div className="flex flex-wrap justify-between gap-6">
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={controls}
            //   variants={cardVariants}
              className="flex-[0_1_450px]"
            >
              <h3 className="font-inter font-bold text-[23px] leading-8 mb-4">
                {i === 0
                  ? "“The best ui kit for developers. So easy to implement and publish.”"
                  : "“rareblocks helps you optimize for engagement.”"}
              </h3>
              <div className="flex gap-3 mb-2 py-7">
                <img
                  src={`/public/Main/0${i + 2}.png`}
                  alt="Eli json"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="font-inter font-bold text-xs mb-2.5">
                    Eli json
                  </p>
                  <p className="lg:text-m text-s font-inter lg:pr-10">
                    Medical assistant
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
