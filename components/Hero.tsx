import React from "react";
import COLORS from "@/styles/colors";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundShapes from "./BackgroundShapes";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Aamna Tayyab",
      "Cross-Cultural Code Weaver",
      "Frontend Fanatic with Vintage Flair",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundShapes />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://s3.amazonaws.com/media.thecrimson.com/photos/2018/11/12/215331_1334130.jpg"
        alt=""
      />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor={COLORS["pale-dogwood"]} />
      </h1>
    </div>
  );
};

export default Hero;
