import { ProductCategory, IProductSubcategory } from "../../assets/products";
import { FaFilePdf } from "react-icons/fa6";
import React, { useState } from "react";
import Image from "next/image";

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

  return (
    <div className="fixed top-0 left-0 w-full min-h-screen max-h-fit flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className=" bg-white bg-opacity-50 shadow-2xl max-h-fit min-h-fit backdrop-blur rounded-md px-16 py-10 font-garamond ">
        <div className="flex flex-row justify-between">
          <h2 className="text-3xl text-black font-bold">{product.name}</h2>
          <button
            onClick={closeModal}
            className="flex items-center justify-center w-8 h-8 bg-green-700 hover:bg-gray-300 rounded-sm text-white focus:outline-none transform transition-transform hover:scale-110">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <Image
          src={product.image}
          alt={product.name}
          width={"571"}
          height={"320"}
          className="h-80 w-fit mt-4 rounded-sm"
          loading="lazy"
        />
        <div>
          <div className="bg-gray-300 overflow-hidden overflow-y-scroll max-h-70 rounded-sm">
            {details.map((detail: IProductSubcategory, index: number) => (
              <div className="bg-white p-2" key={detail.id}>
                <div
                  className=" cursor-pointer flex flex-row justify-between items-center"
                  onClick={() => handleAccordionClick(index)}>
                  <h3 className="text-xl">{detail.label}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {activeIndex === index && (
                  <div className="p-2 border-b-2">
                    <p className="text-lg ">
                      <span className="underline">Peso</span>:{" "}
                      <span className="text-gray-600">{detail.weight}</span>
                    </p>
                    <div className="text-lg">
                      <label
                        className="underline"
                        htmlFor="measurementDropdown">
                        Medidas:
                      </label>
                      <select
                        id="measurementDropdown"
                        className="text-gray-600 border-none rounded-sm p-1 ml-2 focus:border-none">
                        {detail.measures.map((measure, i) => (
                          <option key={i} value={measure} disabled>
                            {measure}
                          </option>
                        ))}
                      </select>
                    </div>
                    {detail.file ? (
                      <a
                        onClick={() => {
                          window.open(detail.file || "", "_blank");
                        }}
                        className="inline-flex items-center gap-2 px-3 py-2 mt-4 text-lg font-garamond font-bold text-center text-white bg-green-800 rounded-sm transform transition-transform duration-00 hover:scale-110">
                        <FaFilePdf />
                        Ficha Técnica
                      </a>
                    ) : (
                      <a className="inline-flex items-center gap-2 px-3 py-2 mt-4 text-lg cursor-not-allowed font-garamond font-bold text-center text-white bg-gray-500 rounded-sm">
                        <FaFilePdf />
                        Ficha Técnica
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
