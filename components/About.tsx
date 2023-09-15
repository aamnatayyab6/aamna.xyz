import React from "react";
import { motion } from "framer-motion";
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
        className="absolute top-14 uppercase tracking-[20px] 
      text-2xl text-heading"
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
        className="-mb-2 md:mb-0 flex-shrink-0 w-28 h-28 mt-20 md:mt-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-80 xl:h-80"
      />
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-3xl md:text-4xl font-semibold text-basic">
          Here is a{" "}
          <span className="underline decoration-mountbatten-pink/50">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base text-timberwolf">
          Hello there! I&apos;m Aamna, a dynamic tech enthusiast hailing from
          Pakistan. Armed with a degree in Computer Science earned on a
          scholarship journey in Hungary, I&apos;ve evolved into a passionate coder,
          a devoted advocate for cross-cultural tech collaboration, and an
          aficionado of all things vintage and cinematic.
          <br />
          <br /> As a BSc. Computer Science graduate from{" "}
          <u className="text-taupegray">
            <a href="https://www.elte.hu/en/">
              Eötvös Loránd University (ELTE)
            </a>
          </u>
          , I&apos;ve made it my mission to bridge the digital divide and transcend
          borders through code. With more than a year of experience as an IT
          Intern at{" "}
          <u className="text-taupegray">
            <a href="https://corporate.exxonmobil.com/">ExxonMobil</a>
          </u>
          , I&apos;ve honed my skills in full-stack web development and beyond.
          During my tenure, I learned the art of full-stack web development,
          automation and configuration management.
          <br />
          <br />
          Beyond my internship, I am proud to have created and lead the{" "}
          <u className="text-taupegray">
            <a href="https://gdsc.community.dev/eotvos-lorand-university/">
              Google Developer Student Club{" "}
            </a>
          </u>
          at ELTE. Within two months, I expanded our community from a core team
          of 9 to 100 members. As the lead, I hosted engaging tech events and
          facilitated productive weekly meetings. <br />
          <br />
          Currently, I&apos;m actively contributing to the tech community as a
          co-organizer at{" "}
          <u className="text-taupegray">
            <a href="https://gdg.community.dev/gdg-budapest/">
              Google Developer Groups Budapest{" "}
            </a>
          </u>
          , uniting tech minds in innovative ways.
          <br />
          <br />
          I&apos;m on the lookout for exciting opportunities in application
          development, where I can leverage my experience to create innovative
          digital solutions that push boundaries and transform industries.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
