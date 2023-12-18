"use client";
import React, { useRef } from "react";
import {
  About,
  Contact,
  Footer,
  Landing,
  Header,
  Products,
} from "./components";

const Home: React.FC = () => {
  const sectionRef1 = useRef<HTMLDivElement>(null);
  const sectionRef2 = useRef<HTMLDivElement>(null);
  const sectionRef3 = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Header />
      <Landing />
      <About sectionRef1={sectionRef1} />
      <Products sectionRef2={sectionRef2} />
      <Contact sectionRef3={sectionRef3} />
      <Footer />
    </div>
  );
};

export default Home;
