import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-dim-gray text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-y-hidden overflow-x-scroll snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-davys-gray/20 scrollbar-thumb-mountbatten-pink/20">
        {projects.map((project, i) => (
          <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-pale-dogwood/50">
                  Case study {i + 1} of {projects.length}:{" "}
                </span>{" "}
                UPS clone
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                sit sequi aperiam. Reiciendis soluta ab excepturi! Illum quis
                unde, nisi laudantium modi veritatis ipsum repellendus. Magni at
                fugiat adipisci molestias.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="w-full absolute top-[30%] bg-mountbatten-pink/10 left-0 h-[500px] -skew-y-12" /> */}
    </motion.div>
  );
}

export default Projects;
