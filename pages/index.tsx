"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import { NextPage } from "next";
import Link from "next/link";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div className="bg-dark-davys-gray h-screen text-timberwolf snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-davys-gray/20 scrollbar-thumb-mountbatten-pink/20">
      <Head>
        <title>Aamna's Portfolio</title>
      </Head>

      <Header />

      {/* Hero  */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
        {/* bugs-> all skills dont show on md screen  */}
      </section>

      {/* Projects -> Thesis also  */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      {/* Footer */}
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <div className="rounded-full flex items-center justify-center">
              <ArrowUpCircleIcon className="h-7 w-17 pb-0.5 filter  rounded-full grayscale hover:grayscale-0 cursor-pointer text-green-200" />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
