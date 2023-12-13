"use client";
import React, { useRef } from "react";
import { About, Contact, Footer, Header, NavBar, Products } from "./components";

const Home: React.FC = () => {
  const sectionRef1 = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const sectionRef3 = useRef<HTMLDivElement>(null);

  return (
    <div>
      <NavBar />
      <Header />
      <Products sectionRef2={sectionRef2} />
      <About sectionRef1={sectionRef1} />
      <Contact sectionRef3={sectionRef3} />
      <Footer />
    </div>
  );
};

export default Home;
