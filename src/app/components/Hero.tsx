import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden relative bg-black">
      <Image
        src={`/background.jpg`}
        alt="Hero Image"
        className="opacity-60 object-cover"
        fill
      />
      <div className="flex flex-col z-10 relative h-full justify-center items-center gap-y-52 sm:gap-y-10 md:gap-y-16 lg:gap-y-48">
        <div className="mb-4 mt-4 max-w-5xl bg-black bg-opacity-50 shadow-2xl py-2 sm:py-4 md:py-8 relative backdrop-blur  sm:max-w-xl lg:max-w-5xl">
          <h1 className="text-lg text-white font-tinos italic text-center z-10 sm:text-xl md:text-2xl lg:text-5xl">
            Convertimos la impresión en una experiencia de primera categoría.
          </h1>
        </div>
        <div className="flex justify-center items-center font-garamond">
          <a
            href="#product"
            className="text-black bg-white px-4 py-3 md:px-5 md:py-2 transition-transform transform hover:scale-105 rounded-sm text-lg md:text-2xl font-bold inline-block shadow-r-md">
            Productos
          </a>
          <span className="mx-10" />
          <a
            href="#contact"
            className="text-white bg-transparent border-2 border-white  transition-transform transform hover:scale-105 hover:shadow-r-md px-3 py-3 md:px-5 md:py-2 rounded-sm text-lg md:text-2xl font-bold inline-block">
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
}
