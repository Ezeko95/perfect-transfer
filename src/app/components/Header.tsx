"use client";
import React from "react";

const Header: React.FC = () => {
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
        <div className="mb-8 mt-8 p-3 max-w-5xl bg-white bg-opacity-20 shadow-2xl py-8 relative backdrop-blur">
          <div className="blur-bg absolute inset-0"></div>
          <h1 className="text-5xl text-white font-tinos italic text-center relative z-10">
            Convertimos la impresión en una experiencia de primera categoría.
          </h1>
        </div>
        <div className="flex justify-center font-garamond">
          <a
            href="#about"
            className="text-black bg-white px-5 py-2 transition-transform transform hover:scale-110 rounded-sm text-2xl font-bold inline-block"
          >
            Sobre Nosotros
          </a>
          <span className="mx-10" />
          <a
            href="#contact"
            className="text-white bg-transparent border-2 border-white  transition-transform transform hover:scale-110 hover:shadow-r-md px-5  py-2 rounded-sm text-2xl font-bold inline-block"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
