import React from "react";

const Download: React.FC = () => {
  const handleDownload = () => {
    const fileUrl = "/catalogo.pdf";
    window.open(fileUrl, "_blank");
  };

  return (
    <div className="flex justify-center pb-16 bg-gray-900">
      <a
        href="#"  
        onClick={handleDownload}
        className="bg-green-700 text-white font-garamond font-extrabold text-2xl transition-transform duration-300 transform hover:scale-110 py-4 px-6 rounded-md"
      >
        Ver catálogo
      </a>
    </div>
  );
};

export default Download;
