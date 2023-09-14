import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Link from "next/link";
import Image from "next/image";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-14 uppercase tracking-[20px] text-heading text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-y-hidden overflow-x-scroll snap-x snap-mandatory z-20 scrollbar scrollbar-track-davys-gray/20 scrollbar-thumb-timberwolf/20">
        {projects.map((project) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
              className="h-64 w-66"
            />

            <div className="space-y-5 px-0 md:px-10 max-w-4xl">
              <Link href={project?.linkToBuild}>
                <h4 className="text-3xl font-semibold text-center text-timberwolf hover:text-rose-quartz">
                  <span className="underline decoration-pale-dogwood/50">
                    {/* Case study {i + 1} of {projects.length}:{" "} */}
                    {project.title}
                  </span>{" "}
                </h4>
              </Link>

              <div className="flex items-center justify-center space-x-2">
                {/* Texh stack */}
                {project?.technologies?.map((technology) => (
                  <Image
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt="oops!"
                    className="h-12 w-12 rounded-full bg-davys-gray"
                  />
                ))}
              </div>

              <p className="text-base text-center md:text-left text-timberwolf">
                {project?.summary}
              </p>

              {/* link to build */}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-mountbatten-pink/10 left-0 h-[350px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
