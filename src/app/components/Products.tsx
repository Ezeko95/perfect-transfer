import React, { useState } from "react";
import { ProductCategory, productCategories } from "../../assets/products";
import { ProductDetail, ProductCard } from ".";
import { FaFilePdf } from "react-icons/fa6";

interface ProductsProps {
  sectionRef2: React.RefObject<HTMLDivElement>;
}

const Products: React.FC<ProductsProps> = ({ sectionRef2 }) => {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductCategory | null>(null);

  const openDetailsModal = (product: ProductCategory) => {
    setSelectedProduct(product);
  };

  const closeDetailsModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div
      id="product"
      ref={sectionRef2}
      className="flex flex-col justify-center items-center min-w-screen min-h-screen"
    >
      <div className="flex flex-row flex-wrap max-w-7xl justify-center pt-20 pb-20 gap-10 ">
        {productCategories.map((category: ProductCategory) => (
          <ProductCard
            key={category.id}
            category={category}
            openDetailsModal={openDetailsModal}
          />
        ))}
      </div>
      <a
        onClick={() => window.open("/catalogo.pdf", "_blank")}
        className="inline-flex items-center gap-x-2 bg-green-700 text-white font-garamond font-extrabold text-2xl transition-transform duration-300 transform hover:scale-110 py-4 px-6 rounded-md mb-20"
      >
        <FaFilePdf />Ver catálogo
      </a>
      <hr className="border-[1px] border-black w-4/5" />
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          closeModal={closeDetailsModal}
        />
      )}
    </div>
  );
};

export default Products;
