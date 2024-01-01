import React from "react";
import { motion } from "framer-motion";

import { herovector } from "../src/assets";
import { styles } from "../src/styles";
import { ComputersCanvas } from "./canvas";
import { staggerContainer } from "../utils/motion";
import { textVariant } from "../utils/motion";

const Hero = () => {
  const isMobile = window.matchMedia("(max-width: 500px)").matches;

  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative w-full h-screen mx-auto"
      >
        <div
          className={`absolute inset-0 top-[90px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5 z-10">
            <div className="w-5 h-5 rounded-full bg-[#2D44FF]" />
            <div className="w-1 sm:h-80 h-40 blue-gradient" />
          </div>

          <motion.div variants={textVariant()}>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Ayo, I'm{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                Sharjeel.
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 p`}>
              I build{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                beautiful interfaces{" "}
              </span>
              and <br className="sm:block hidden" />
              robust backends for modern applications.
            </p>
          </motion.div>
        </div>

        {!isMobile && <ComputersCanvas />}

        {isMobile && (
          <motion.div variants={textVariant()}>
            <img
              src={herovector}
              alt="Vector Illustration..."
              className="absolute -translate-x-1/2 -translate-y-1/2 mt-[80%] animate-hero"
              style={{ width: "auto", height: "auto" }}
              loading="eager"
            />
          </motion.div>
        )}

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </motion.section>

      {/* SVG Curve */}
      <svg
        viewBox="0 0 1466 96"
        fill="#060917"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="h-[75px] mb-[-3px] block overflow-visible w-full"
      >
        <path
          d="
          M 517.5 1.5
          C 305 -6
            0 50
            0 50
          V 95.5
          H 1465.5
          V 37.5
          C 1465.5 37.5
            1232 90
            1080 90
          C 865.13 90.5758
            732.237 9.06473
            517.5 1.50001
          Z
        "
        />
      </svg>
    </>
  );
};

export default Hero;
