import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../src/styles";
import { github } from "../src/assets";
import { worldwide } from "../src/assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary ml-auto mr-auto p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 gap-1 card-img_hover">
            {/* Link for repo */}
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="black-gradient w-9 h-9 rounded-full  flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </a>

            {/* Link for deployment */}
            <a
              href={project_link}
              target="_blank"
              rel="noopener noreferrer"
              className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={worldwide}
                alt="world"
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Some things I’ve built</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore my portfolio of real-world projects, where I showcase my
          skills and expertise through compelling examples. Each project comes
          with a concise description and includes links to code repositories and
          live demos. These examples showcase my ability to tackle intricate
          challenges, adapt to various technologies, and efficiently handle
          project management.
        </motion.p>
      </div>

      <div className="mt-20 ml-auto mr-auto flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Work, "work");
