import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Footer: React.FC = () => {
  // 385 x 64
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a className="flex items-center">
              <Image
                src="/logo-viejo.webp"
                width={"385"}
                height={"64"}
                className="h-16 me-3"
                alt="Perfect-transfer-logo"
                loading="lazy"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Horarios
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a>Lunes a Viernes</a>
                </li>
                <li className="mb-4">
                  <a>8:30 - 17:00 hs</a>
                </li>
                <li>
                  <a className="flex flex-row items-center gap-x-1">
                    11-5053-9020
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Redes sociales
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/perfecttransfersrl/"
                    className="hover:underline "
                    target="_blank"
                    rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/perfecttransfersrl"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a className="hover:underline">Perfect Transfer™</a>. All
            Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
