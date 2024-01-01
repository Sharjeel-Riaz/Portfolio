import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

import { styles } from "../src/styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

function Footer() {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} mb-[-30px] bg-tertiary rounded-2xl min-h-[100px]`}
      >
        <motion.div variants={textVariant()} className="flex justify-center">
          <h4
            className="font-black md:text-[30px] sm:text-[25px] xs:text-[20px] 
          text-[16px] text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text tracking-wider"
          >
            Made With{" "}
            <span
              className="text-red-500"
              style={{ mixBlendMode: "difference" }}
            >
              ❤️
            </span>{" "}
            By Sharjeel Riaz.{" "}
          </h4>
        </motion.div>
      </div>
      <motion.div variants={textVariant()}>
        <div
          className="border-t border-gray-300 mx-auto mt-2"
          style={{ width: "80%" }}
        ></div>
        <div
          className="text-center md:text-[14px] sm:text-[12px] xs:text-[10px] 
          text-[8px] text-slate-400 pt-8 pb-8"
        >
          © 2022 - Present Sharjeel Riaz. All Rights Reserved.
        </div>
        <div className="flex justify-end mt-[-15px] mr-12 pb-5">
          <a
            href="https://www.linkedin.com/in/sharjeel-riaz/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link rounded-full p-2 hover:bg-secondary transition 
          duration-200 ease-linear"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:sharjeelriazsh@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link rounded-full p-2 hover:bg-secondary transition
          duration-200 ease-linear"
          >
            <FaEnvelope size={28} />
          </a>
          <a
            href="https://github.com/Sharjeel-Riaz"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link rounded-full p-2 hover:bg-secondary transition
          duration-200 ease-linear"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Footer, "");
