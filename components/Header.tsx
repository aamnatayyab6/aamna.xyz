import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import COLORS from "../styles/colors";
import Link from "next/link";
import { Social } from "@/typings";
import {
  ArrowRightOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header
      className="sticky top-0 p-5 flex items-start justify-between 
    max-w-7xl mx-auto z-20 xl:items-center"
    >
      <motion.div
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social?._id}
            url={social?.url}
            fgColor={COLORS["heading"]}
            bgColor="transparent"
            className="hover:green-400"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-heading"
      >
        <Link href="#contact" legacyBehavior>
          <SocialIcon
            network="email"
            fgColor={COLORS["heading"]}
            bgColor="transparent"
            className="cursor-pointer"
          />
        </Link>

        <Link
          href="https://aamnatayyab6.github.io/resources/Resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
          className="flex-row flex"
        >
          {" "}
          <p className="hidden md:visible uppercase border border-b-1 mx-4 py-1 px-4 tracking-[5px] border-dim-gray bg-dark-davys-gray rounded-sm shadow-md shadow-taupegray/10 hover:shadow-taupegray/30  opacity-70 hover:opacity-100 md:inline-flex text-sm font-[helvetica]">
            Resume
          </p>{" "}
          <div>
            <ArrowTopRightOnSquareIcon className="h-6 w-6 m-3 visible md:hidden cursor-pointer" />
          </div>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
