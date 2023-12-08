import React from "react";
import { ProductCategory } from "../../assets/products";

interface ProductCardProps {
  category: ProductCategory;
}

const ProductCard: React.FC<ProductCardProps> = ({ category }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img
        src={category.image}
        alt="product"
        className="w-32 h-32 object-cover mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{category.name}</h2>
      <p className="text-gray-600">{category.description}</p>
    </div>
  );
};

export default ProductCard;
