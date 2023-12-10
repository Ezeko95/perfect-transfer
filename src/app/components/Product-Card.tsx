import React, { useState } from "react";
import { ProductCategory } from "../../assets/products";

interface ProductCardProps {
  category: ProductCategory;
}

const ProductCard: React.FC<ProductCardProps> = ({ category }) => {

  return (
    <div className="flex items-center flex-col max-w-xs bg-white border border-gray-200 rounded-lg shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl">
      <img src={category.image} alt="product" className="rounded-t-lg" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {category.name}
        </h5>
        <p className="mb-2 font-normal text-gray-700">{category.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
