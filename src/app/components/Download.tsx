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
        className="bg-blue-500 text-white font-semibold transition-transform duration-300 transform hover:scale-110 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Ver catalogo
      </a>
    </div>
  );
};

export default Download;
