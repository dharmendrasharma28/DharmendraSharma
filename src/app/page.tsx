"use client";

import { useCallback, useState } from "react";
import Splash from "@/components/Splash";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import RouteMap from "@/components/RouteMap";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [ready, setReady] = useState(false);
  const handleSplashDone = useCallback(() => setReady(true), []);

  return (
    <>
      <Splash onDone={handleSplashDone} />
      <SmoothScroll>
        <Nav />
        <main>
          <Hero ready={ready} />
          <Marquee />
          <About />
          <RouteMap />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
