import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";

type Props = { directionLeft?: boolean; techskill: Skill };

function TechSkill({ directionLeft, techskill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 0.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(techskill?.image).url()}
        className="rounded-full border border-davys-gray object-cover w-24 h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out group-hover:bg-timberwolf h-24 w-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {techskill?.progress}%{" "}
          </p>
        </div>
        <div className="flex justify-center text-black font-bold">
          <p>{techskill?.title}</p>
        </div>
      </div>
    </div>
  );
}

export default TechSkill;
