import React from "react";
import { motion } from "framer-motion";
import TechSkill from "./TechSkill";
import { Skill } from "@/typings";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-heading text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-24 uppercase tracking-[3px] text-taupegray">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 md:grid-cols-5 gap-7 ">
        {skills?.slice(0, skills.length / 2).map((techskill) => (
          <TechSkill key={techskill._id} techskill={techskill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((techskill) => (
          <TechSkill key={techskill._id} techskill={techskill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
