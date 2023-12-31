import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-14 uppercase tracking-[20px] 
      text-2xl text-heading mt-8"
      >
        Experience
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 
      snap-x snap-mandatory overflow-y-hidden scrollbar-thin scrollbar-track-davys-gray/20 scrollbar-thumb-timberwolf/20"
      >
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
