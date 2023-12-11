"use client";
import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Download from "./components/Download";
import Contact from "./components/Contact";

const Home: React.FC = () => {
  const sectionRef1 = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        <NavBar
          scrollTo={scrollToSection}
          sectionRef1={sectionRef1}
          sectionRef2={sectionRef2}
        />
        <Header scrollTo={scrollToSection} sectionRef1={sectionRef1} />
      </div>
        <About sectionRef1={sectionRef1} />
        <Products sectionRef2={sectionRef2} />
        <Download />
        <Contact />
        <Footer />
    </div>
  );
};

export default Home;
