"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { sanityClient } from "@/sanity";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-dark-davys-gray h-screen text-timberwolf snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-davys-gray/20 scrollbar-thumb-timberwolf/20">
      <Head>
        <title>Portfolio - Aamna Tayyab</title>
      </Head>

      <Header socials={socials} />

      {/* Hero  */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />{" "}
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
        {/* bugs-> all skills dont show on md screen  */}
      </section>

      {/* Projects -> Thesis also  */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      {/* Footer */}
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <div className="rounded-full flex items-center justify-center">
            <Link href="#hero">
              <ArrowUpCircleIcon className="h-7 w-17 pb-0.5 filter rounded-full bg-davys-gray grayscale hover:grayscale-0 cursor-pointer text-green-200" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await sanityClient.fetch(
    `*[_type == 'pageInfo'][0]`
  );
  const experiences: Experience[] = await sanityClient.fetch(
    `*[_type == 'experience'] {
      ...,
      technologies[]->
    }`
  );
  const projects: Project[] = await sanityClient.fetch(`*[_type == 'project'] {
    ...,
    technologies[]->
  }`);
  const skills: Skill[] = await sanityClient.fetch(`*[_type == 'skill']`);
  const socials: Social[] = await sanityClient.fetch(`*[_type == 'social']`);

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },
    // ISR: 10ec
    // revalidate: 10,
  };
};
