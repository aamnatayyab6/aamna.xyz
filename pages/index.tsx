"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import { NextPage } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div className="bg-dark-davys-gray h-screen text-timberwolf snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Aamna's Portfolio</title>
      </Head>

      <Header />

      {/* Hero  */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects -> Thesis also  */}
      {/* Contact Me */}
    </div>
  );
};

export default Home;
