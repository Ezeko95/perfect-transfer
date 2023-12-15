import { ProductCategory, IProductSubcategory } from "../../assets/products";
import { FaFilePdf } from "react-icons/fa6";
import React, { useState, useEffect } from "react";

interface ProductDetailProps {
  product: ProductCategory;
  closeModal: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  closeModal,
}) => {
  const details: IProductSubcategory[] = product.subcategory;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleDownload = () => {
    const fileUrl = details.map((detail) => detail.file);
    window.open(fileUrl.join(), "_blank");
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className=" bg-white bg-opacity-50 shadow-2xl backdrop-blur rounded-md px-16 py-10 font-garamond">
        <div className="flex flex-row justify-between">
          <h2 className="text-4xl ">{product.name}</h2>
          <button
            onClick={closeModal}
            className="flex items-center justify-center w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-900 focus:outline-none transform transition-transform hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="h-80 w-fit mt-4 rounded-lg"
        />
        <div>
          {details.map((detail: IProductSubcategory, index: number) => (
            <div
              className="border rounded-md overflow-hidden mt-2 bg-white"
              key={detail.id}
            >
              <div
                className="p-2 cursor-pointer flex flex-row justify-between items-center"
                onClick={() => handleAccordionClick(index)}
              >
                <h3 className="text-2xl ">{detail.label}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {activeIndex === index && (
                <div className="p-2">
                  <p className="text-lg ">
                    <span className="underline">Peso</span>:{" "}
                    <span className="text-gray-600">{detail.weight}</span>
                  </p>
                  {detail.measures.map((measure, i) => (
                    <p className="text-lg" key={i}>
                      <span className="underline">Medidas</span>:{" "}
                      <span className="text-gray-600">{measure}</span>
                    </p>
                  ))}
                  <a
                    onClick={() => {
                      window.open(detail.file || "", "_blank");
                    }}
                    className="inline-flex items-center gap-2 px-3 py-2 mt-4 text-lg font-garamond font-bold text-center text-white bg-green-800 rounded-md transform transition-transform hover:scale-110"
                  >
                    <FaFilePdf />
                    Ficha Técnica
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
