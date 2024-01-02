import React, { useState, useEffect } from "react";
import { ProductCategory, productCategories } from "../../assets/products";
import { ProductDetail, ProductCard } from ".";
import { FaFilePdf } from "react-icons/fa6";

interface ProductsProps {
  sectionRef2: React.RefObject<HTMLDivElement>;
}

const Products: React.FC<ProductsProps> = ({ sectionRef2 }) => {
  const [blockScroll, setBlockScroll] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductCategory | null>(null);

  const openDetailsModal = (product: ProductCategory) => {
    setSelectedProduct(product);
    setBlockScroll(true);
  };

  const closeDetailsModal = () => {
    setSelectedProduct(null);
    setBlockScroll(false);
  };

  useEffect(() => {
    if (blockScroll) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [blockScroll]);

  return (
    <div
      id="product"
      ref={sectionRef2}
      className={`flex flex-col justify-center items-center min-w-screen ${
        blockScroll ? "overflow-hidden" : ""
      }`}>
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-screen md:max-w-8xl justify-center py-10 gap-1 md:gap-10">
        {productCategories.map((category: ProductCategory) => (
          <ProductCard
            key={category.id}
            category={category}
            openDetailsModal={openDetailsModal}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <a
          onClick={() => window.open("/catalogo.pdf", "_blank")}
          className="inline-flex items-center gap-x-2 mt-10 bg-green-700 text-white font-garamond font-extrabold text-lg md:text-2xl transition-transform duration-300 transform hover:scale-110 py-4 px-6 rounded-md mb-20">
          <FaFilePdf />
          Ver catálogo
        </a>
      </div>
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
