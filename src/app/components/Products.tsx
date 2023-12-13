import React from "react";
import { ProductCategory, productCategories } from "../../assets/products";
import ProductCard from "./Product-Card";

const Download: React.FC = () => {
  const handleDownload = () => {
    const fileUrl = "/catalogo.pdf";
    window.open(fileUrl, "_blank");
  };

  return (
    <div className="flex justify-center pb-16 bg-gray-900">
      <a
        href="#"
        onClick={handleDownload}
        className="bg-green-700 text-white font-garamond font-extrabold text-2xl transition-transform duration-300 transform hover:scale-110 py-4 px-6 rounded-md"
      >
        Ver catálogo
      </a>
    </div>
  );
};

interface ProductsProps {
  sectionRef2: React.RefObject<HTMLDivElement>;
}

const Products: React.FC<ProductsProps> = ({ sectionRef2 }) => {
  return (
    <div
      id="product"
      ref={sectionRef2}
      className="flex flex-col justify-center items-center min-w-screen min-h-screen bg-gray-900 "
    >
      <div className="flex flex-row flex-wrap max-w-7xl justify-center pt-20 pb-20 gap-10 ">
        {productCategories.map((category: ProductCategory) => (
          <ProductCard key={category.id} category={category} />
        ))}
      </div>
      <Download />
    </div>
  );
};

export default Products;
