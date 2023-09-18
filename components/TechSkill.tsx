import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";

type Props = { directionLeft?: boolean; techskill: Skill };

function TechSkill({ directionLeft, techskill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(techskill?.image).url()}
        className="rounded-full border border-davys-gray object-cover w-16 h-16 md:w-20 md:h-20 filter group-hover:grayscale transition duration-300 ease-in-out bg-davys-gray"
      />
      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-timberwolf w-16 h-16 md:w-20 md:h-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {techskill?.progress}%{" "}
          </p>
        </div>
        <div className="flex justify-center text-taupegray font-semibold">
          <p className="text-sm">{techskill?.title}</p>
        </div>
      </div>
    </div>
  );
}

export default TechSkill;
