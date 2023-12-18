import React from "react";
import { ProductCategory } from "../../assets/products";

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
      <div className="flex items-center flex-col py-10 max-w-xs bg-white rounded-t-md shadow-xl transition-transform transform duration-500 hover:scale-110 hover:shadow-2xl">
        <img
          src={category.image}
          alt="product"
          className="rounded-t-md max-w-full"
        />
        <div className="flex flex-col justify-between h-full p-5">
          <div className="flex flex-col items-start">
            <h5 className="mb-2 text-2xl font-garamond font-bold tracking-tight text-gray-900">
              {category.name}
            </h5>
            <p className="mb-2 font-garamond text-gray-700">
              {category.description}
            </p>
          </div>
          <div className="mt-auto">
            <button
              onClick={() => openDetailsModal(category)}
              className="inline-flex items-center px-3 py-1 text-lg font-garamond font-bold text-center text-white bg-green-700 rounded-sm hover:bg-gray-400 hover:text-black"
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

{
  /* <hr className="border-[1px] border-black w-4/5" /> */
}
