import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7
    flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10
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
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] 
        object-cover object-center"
        src="https://s3.amazonaws.com/media.thecrimson.com/photos/2018/11/12/215331_1334130.jpg"
        alt=""
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light ">CEO Aamna Co</h4>
        <p className="font-bold text-2xl mt-1 "> Aamzz</p>
        <div className="flex space-x-2 my-2">
          {/* Texh stack */}
          <img
            src="https://s3.amazonaws.com/media.thecrimson.com/photos/2018/11/12/215331_1334130.jpg"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://s3.amazonaws.com/media.thecrimson.com/photos/2018/11/12/215331_1334130.jpg"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://s3.amazonaws.com/media.thecrimson.com/photos/2018/11/12/215331_1334130.jpg"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://s3.amazonaws.com/media.thecrimson.com/photos/2018/11/12/215331_1334130.jpg"
            alt=""
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-chinese-violet">dates...</p>
        
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
