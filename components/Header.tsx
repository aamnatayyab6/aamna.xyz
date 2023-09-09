import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import COLORS from "../styles/colors";
import Link from "next/link";
import { Social } from "@/typings";

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
        {socials.map((socials) => (
          <SocialIcon
            key={socials._id}
            url={socials.url}
            fgColor={COLORS["chinese-violet"]}
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <Link href="#contact" legacyBehavior>
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
          className="flex flex-row items-center text-chinese-violet"
        >
          <SocialIcon
            network="email"
            fgColor={COLORS["chinese-violet"]}
            bgColor="transparent"
            className="cursor-pointer"
          />

          <p className="uppercase hidden md:inline-flex text-sm text-chinese-violet">
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
