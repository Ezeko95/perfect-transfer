"use client";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/background.jpg")',
        }}
      ></div>
      <div className="flex flex-col z-10 relative h-full justify-center items-center gap-y-52 sm:gap-y-10 md:gap-y-16 lg:gap-y-48">
        <div className="mb-4 mt-4 p-3 max-w-5xl bg-black bg-opacity-50 shadow-2xl py-8 relative backdrop-blur sm:p-2 md:p-2 sm:max-w-xl md:max-w-xl lg:max-w-5xl">
          <h1 className="text-lg text-white font-tinos italic text-center z-10 sm:text-xl md:text-2xl lg:text-5xl">
            Convertimos la impresión en una experiencia de primera categoría.
          </h1>
        </div>
        <div className="flex justify-center font-garamond">
          <a
            href="#product"
            className="text-black bg-white px-5 py-2 transition-transform transform hover:scale-110 rounded-sm text-2xl font-bold inline-block shadow-r-md"
          >
            Productos
          </a>
          <span className="mx-10" />
          <a
            href="#contact"
            className="text-white bg-transparent border-2 border-white  transition-transform transform hover:scale-110 hover:shadow-r-md px-5 py-2 rounded-sm text-2xl font-bold inline-block"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
