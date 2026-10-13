"use client";

import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import BestWorks from "@/components/BestWorks";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <main className="relative neural-bg">
        <Hero />
        <About />
        <Skills />
        <BestWorks />
        <Portfolio />
        <Experience />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
