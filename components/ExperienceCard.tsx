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
    flex-shrink-0 h-[600px] w-72 md:w-[600px] xl:w-[580px] xl:h-[500px] mb-6 md:mb-0 mt-24 xl:mt-10 snap-center p-10 pb-24 md:pb-10
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
        className="w-20 h-20 md:w-32 md:h-32 rounded-full
        object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="w-full px-0 md:px-10 ">
        <h4 className="text-2xl font-light text-timberwolf">
          {experience?.jobTitle}
        </h4>
        <p className="font-[Helvetica] text-xl mt-1 text-basic">
          {experience?.company}{" "}
        </p>
        <div className="flex flex-wrap space-y-1 space-x-2 my-2">
          {/* Tech stack */}
          {experience?.technologies?.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology?.image)?.url()}
              alt="oops!"
              className="rounded-full bg-dim-gray"
              height={32}
              width={32}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-taupegray font-[Helvetica] text-start">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>

        <ul className="list-disc text-start space-y-3 ml-3 md:ml-5 mr-0 md:mr-2 text-timberwolf font-[Helvetica]">
          {experience?.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
