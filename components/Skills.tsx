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
      <h3 className="absolute top-14 uppercase tracking-[20px] text-dim-gray text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-24 uppercase tracking-[3px] text-dim-gray">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-7 pt-10">
        {skills.map((techskill) => (
          <TechSkill key={techskill._id} techskill={techskill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
