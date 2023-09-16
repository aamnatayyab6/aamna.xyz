import React from "react";
import COLORS from "@/styles/colors";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundShapes from "./BackgroundShapes";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, my name is ${pageInfo?.name}`,
      "Cross-Cultural Code Weaver",
      "Frontend Fanatic with Vintage Flair",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundShapes />
      <Image
        className="relative rounded-full mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage)?.url()}
        width={128}
        height={128}
        alt="oops!"
      />
      <div className="z-20">
        <h2 className="text-base uppercase text-heading pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-4xl lg:text-5xl text-timberwolf font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor={COLORS["heading"]} />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
