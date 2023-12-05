import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          <div className="col-start-1">
            <img className="h-16" src="/perfect-transfer-logo.png" alt="Logo" />
          </div>
          <div className="hidden md:block col-start-2 col-span-2 text-center">
            <a
              href="#"
              className="text-black hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium inline-block"
            >
              Productos
            </a>
            <a
              href="#"
              className="text-black hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium inline-block"
            >
              Contacto
            </a>
            <a
              href="#"
              className="text-black hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium inline-block"
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
