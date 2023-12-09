import React from "react";

const Download: React.FC = () => {
  const handleDownload = () => {
    const fileUrl = "/catalogo.pdf";
    window.open(fileUrl, "_blank");
  };

  return (
    <div className="flex justify-center py-20 bg-gray-200">
      <a
        href="#"
        onClick={handleDownload}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Ver catalogo
      </a>
    </div>
  );
};

export default Download;
