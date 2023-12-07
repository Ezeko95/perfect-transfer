"use client";
import React from "react";

interface NavBarProps {
  scrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
  sectionRef1: React.RefObject<HTMLDivElement>;
}

const NavBar: React.FC<NavBarProps> = ({ scrollTo, sectionRef1 }) => {
  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          <div className="col-span-1">
            {" "}
            {/* Adjusted to span 1 column */}
            <img className="h-14" src="/logo.png" alt="Logo" />
          </div>
          <div className="hidden md:block col-start-2 col-span-2 text-center">
            <a
              href="#product"
              className="text-black hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-lg font-medium inline-block"
            >
              Productos
            </a>
            <a
              href="#contact"
              className="text-black hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-lg font-medium inline-block"
            >
              Contacto
            </a>
            <a
              href="#about"
              onClick={() => scrollTo(sectionRef1)}
              className="text-black hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-lg font-medium inline-block"
            >
              Acerca de nosotros
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Button for mobile view */}
          </div>
        </div>
      </div>
      <div className="md:hidden">{/* Mobile menu */}</div>
    </nav>
  );
};

export default NavBar;
