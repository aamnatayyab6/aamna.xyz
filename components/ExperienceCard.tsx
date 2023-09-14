import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[580px] xl:h-[450px] mt-24 xl:mt-10 snap-center p-10
     bg-gunmetal hover:opacity-100 opacity-40 cursor-pointer 
     transition-opacity duration-200 overflow-y-scroll scrollbar-thin scrollbar-track-davys-gray/40 scrollbar-thumb-mountbatten-pink/80"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full
        object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-2xl font-light text-timberwolf">
          {experience?.company}
        </h4>
        <p className="font-[Helvetica] text-xl mt-1 text-basic">
          {" "}
          {experience?.jobTitle}
        </p>
        <div className="flex space-x-2 my-2">
          {/* Texh stack */}
          {experience?.technologies?.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt="oops!"
              className="h-8 w-8 rounded-full bg-dim-gray"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-taupegray font-[Helvetica]">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 mr-2 text-timberwolf font-[Helvetica]">
          {experience?.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
