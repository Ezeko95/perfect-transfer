"use client";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), url("/background.jpg")',
        }}
      />
      {/* Content */}
      <div className="flex flex-col z-10 relative h-full justify-center items-center gap-y-52">
        <div className="mb-8 mt-8 p-3 max-w-6xl bg-black opacity-75 py-8">
          <h1 className="text-6xl text-white">
            "Transformamos la impresión en una experiencia de excelencia."
          </h1>
        </div>
        <div className="flex justify-center px-4">
          <a
            href="#"
            className="text-black bg-white hover:bg-green-700 hover:text-white px-6 py-2 rounded-md text-2xl font-medium inline-block"
          >
            Descubre
          </a>
          <span className="mx-10" />
          <a
            href="#"
            className="text-black bg-white hover:bg-green-700 hover:text-white px-6 py-2 rounded-md text-2xl font-medium inline-block"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
