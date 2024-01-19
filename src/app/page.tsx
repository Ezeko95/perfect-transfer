"use client";
import React, { useRef } from "react";
import { About, Contact, Footer, NavBar, Products, Hero } from "./components";

const Home: React.FC = () => {
  const sectionRef1 = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const sectionRef3 = useRef<HTMLDivElement>(null);

  return (
    <>
      <NavBar />
      <Hero />
      <About sectionRef1={sectionRef1} />
      <div className="mt-10 border-t border-gray-500"></div>
      <div className="mt-10"></div>
      <Products sectionRef2={sectionRef2} />
      <div className="mt-10 border-t border-gray-500"></div>
      <Contact sectionRef3={sectionRef3} />
      <Footer />
    </>
  );
};

export default Home;
