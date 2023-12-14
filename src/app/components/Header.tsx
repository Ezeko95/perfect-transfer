import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="flex justify-around items-center p-2 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-center">
        <img src="/logo-viejo.png" alt="Company Logo" className="h-12" />
      </div>
      <div className="flex flex-col items-center gap-y-1">
        <p className=" text-sm text-black dark:text-white">
          Norberto “Pappo” Napolitano 1652, C.A.B.A.
        </p>
        <div className="flex flex-row items-center gap-x-2">
          <p className="text-sm text-black dark:text-white">
            administracion@perfecttransfer.com.ar ||
          </p>
          <a
            href="https://wa.me/5491150539020"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row text-sm items-center gap-x-1 text-black dark:text-white hover:text-blue-600"
          >
            <FaWhatsapp />
            (+54) 911 5053-9020
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
