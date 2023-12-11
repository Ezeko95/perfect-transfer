import React, { useState } from "react";
import { ProductCategory } from "../../assets/products";

interface ProductCardProps {
  category: ProductCategory;
}

const ProductCard: React.FC<ProductCardProps> = ({ category }) => {
  return (
    <div className="flex items-center flex-col max-w-xs bg-white rounded-xl shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl">
      <img src={category.image} alt="product" className="rounded-t-xl" />
      <div className="flex flex-col items-start justify-start min-w-full p-5 gap-y-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {category.name}
        </h5>
        <p className="mb-2 font-normal text-gray-700">{category.description}</p>
        <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Ficha técnica
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
