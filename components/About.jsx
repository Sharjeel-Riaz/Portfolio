import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

import { profile } from "../src/assets";
import { styles } from "../src/styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] ml-auto mr-auto w-full ease-in duration-75">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 1.25)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary p-5 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-wrap">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-5 mb-12 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a skilled Software Developer specializing in JavaScript and
          technologies like React, Node.js, and Three.js. With experience in
          creating modern web applications, I deliver efficient and
          user-friendly solutions for real-world problems. As a Developer, I've
          worked on diverse projects and collaborated with clients globally.
          With a passion for exploring the possibilities of the metaverse and
          web 2.0/3.0 technologies, I strive to push the boundaries of what's
          possible on the web. Whether you're a startup seeking a cutting-edge
          web application or a business looking to enhance your online presence,
          I provide tailored solutions to meet your specific needs. Let's
          collaborate and bring your ideas to life!
        </motion.p>

        <div
          className={`ml-auto mr-auto mt-${
            isMobile ? "[1rem]" : "[-1rem]"
          } w-80 h-80 relative`}
        >
          {/* For desktop-view */}
          {!isMobile && (
            <motion.div
              variants={fadeIn("right", "spring", 0.1, 1)}
              className="w-80 h-80"
            >
              <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Sphere args={[1, 100, 200]} scale={2.8}>
                  <MeshDistortMaterial
                    color="#151030"
                    attach="material"
                    distort={0.3}
                    speed={2.5}
                  />
                </Sphere>
              </Canvas>
            </motion.div>
          )}

          {/* For mobile-view */}
          {isMobile && (
            <div className="w-80 h-80 animate-blob transition-all bg-[#151030] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          )}

          <motion.img
            variants={fadeIn("right", "spring", 0.1, 1)}
            src={profile}
            alt="Profile Image"
            className="w-56 h-56 rounded-full green-pink-gradient p-[2px] select-none absolute object-cover inset-x-0 inset-y-0 m-auto animate-profile"
          />
        </div>
      </div>

      <div className="mt-16 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
