import { ProductCategory } from "../../assets/products";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  category: ProductCategory;
  openDetailsModal: (product: ProductCategory) => void;
}
const ProductCard: React.FC<ProductCardProps> = ({
  category,
  openDetailsModal,
}) => {
  return (
    <>
      <div
        onClick={() => openDetailsModal(category)}
        className="flex items-center flex-col max-w-xs bg-white rounded-t-md shadow-xl transition-transform transform duration-500 hover:scale-105 hover:shadow-2xl">
        <Image
          src={category.image}
          alt="imagen-producto"
          width={"318"}
          height={"178"}
          className="rounded-t-md max-w-full"
          loading="lazy"
        />
        <div className="flex flex-col justify-between h-full p-5">
          <div className="flex flex-col items-start">
            <h5 className="mb-2 text-md md:text-2xl font-garamond font-bold tracking-tight text-gray-900">
              {category.name}
            </h5>
            <p className="text-sm md:text-base/6 mb-2 font-garamond text-gray-900 ">
              {category.description}
            </p>
          </div>
          <div className="mt-auto">
            <button
              onClick={() => openDetailsModal(category)}
              className="inline-flex items-center px-3 py-1 text-sm md:text-lg font-garamond font-bold text-center text-white bg-green-700 rounded-sm hover:bg-gray-400 hover:text-black">
              Ver más
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
