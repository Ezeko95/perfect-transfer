"use client";
import React from "react";

interface HeaderProps {
  scrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
  sectionRef1: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ sectionRef1, scrollTo }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url("/background.jpg")',
        }}
      />
      <div className="flex flex-col z-10 relative h-full justify-center items-center gap-y-52">
        <div className="mb-8 mt-8 p-3 max-w-6xl bg-black opacity-75 py-8">
          <h1 className="text-6xl text-white font-light italic">
            "Transformamos la impresión en una experiencia de excelencia."
          </h1>
        </div>
        <div className="flex justify-center px-4">
          <a
            href="#about"
            onClick={() => scrollTo(sectionRef1)}
            className="text-white bg-transparent border-2 border-white hover:bg-white hover:text-black px-6 py-2 rounded-md text-2xl font-medium inline-block"
          >
            Descubre
          </a>
          <span className="mx-10" />
          <a
            href="#contact"
            className="text-white bg-transparent border-2 border-white hover:bg-white hover:text-black px-6 py-2 rounded-md text-2xl font-medium inline-block"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
