import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Header: React.FC = () => {
  return (
    <header className="flex justify-around items-center md:p-2 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-center">
        <img src="/logo-viejo.png" alt="Company Logo" className="h-6 md:h-12" />
      </div>
      <div className="flex flex-col items-center gap-y-1 text-xxs md:text-sm">
        <p className="text-black dark:text-white">
          Norberto “Pappo” Napolitano 1652, C.A.B.A.
        </p>
        <p className="text-black dark:text-white flex flex-row items-center gap-x-1">
          <MdOutlineEmail />
          administracion@perfecttransfer.com.ar
        </p>
        <div className="flex flex-row items-center gap-x-2 text-xxs md:text-sm">
          <a
            href="https://wa.me/5491150539020"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-rowitems-center gap-x-1 text-black dark:text-white hover:text-blue-600">
            <FaWhatsapp />
            (+54) 911 5053-9020
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
