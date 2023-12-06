"use client";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-green-200">
      {/* Background with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/background.jpg")',
          opacity: 0.2, // Adjust opacity here
        }}
      ></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-start items-center h-full">
        <div className="mb-8">
          <img
            src="/perfect-transfer.png"
            alt="logo"
            style={{ filter: "opacity(100%)" }}
          />
        </div>
        <div className="flex justify-center px-4">
          <a
            href="#"
            className="text-black hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-4xl inline-block"
          >
            Descubre
          </a>
          <span className="mx-10" />
          <a
            href="#"
            className="text-black bg-teal-400 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-4xl font-medium inline-block"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
