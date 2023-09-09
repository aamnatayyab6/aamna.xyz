import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[600px] xl:h-[400px] snap-center p-10
     bg-chinese-violet hover:opacity-100 opacity-40 cursor-pointer 
     transition-opacity duration-200 overflow-hidden"
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
        <h4 className="text-3xl font-light ">{experience?.company}</h4>
        <p className="font-semibold text-2xl mt-1 "> {experience?.jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {/* Texh stack */}
          {experience?.technologies?.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt="oops!"
              className="h-8 w-8 rounded-full"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-timberwolf">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>

        {/* TODO: edit the scrollbar */}
        <ul className="list-disc space-y-4 ml-5 mr-4 text-lg overflow-y-scroll scrollbar-thin scrollbar-track-dark-davys-gray scrollbar-thumb-timberwolf">
          {experience?.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
