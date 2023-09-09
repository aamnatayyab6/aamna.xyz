import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center 
      md:text-left md:flex-row max-w-7xl px-10 justify-evenly 
      mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] 
      text-2xl text-dim-gray"
      >
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 mt-10 md:mt-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-80 xl:h-80"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-mountbatten-pink/50">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-sm">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
