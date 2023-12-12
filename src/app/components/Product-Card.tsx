import React, { useState } from "react";
import { ProductCategory } from "../../assets/products";

interface ProductCardProps {
  category: ProductCategory;
}

const ProductCard: React.FC<ProductCardProps> = ({ category }) => {
  return (
    <div className="flex items-center flex-col max-w-xs bg-white rounded-md shadow-xl transition-transform transform duration-500 hover:scale-110 hover:shadow-2xl">
      <img src={category.image} alt="product" className="rounded-t-md" />
      <div className="flex flex-col items-start justify-start min-w-full p-5 gap-y-2">
        <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 ">
          {category.name}
        </h5>
        <p className="mb-2 font-normal text-gray-700">{category.description}</p>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-md hover:bg-gray-500">
          Ficha técnica
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
