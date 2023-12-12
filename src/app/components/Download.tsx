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
        className="bg-green-700 text-white font-semibold text-2xl transition-transform duration-300 transform hover:scale-110 py-2 px-4 rounded"
      >
        Ver catálogo
      </a>
    </div>
  );
};

export default Download;
