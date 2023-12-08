import React, { useState } from "react";
import { ProductCategory, productCategories } from "../../assets/products";
import ProductCard from "./Product-Card";

interface ProductsProps {
  sectionRef2: React.RefObject<HTMLDivElement>;
}

const Products: React.FC<ProductsProps> = ({ sectionRef2 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productCategories.length - 1 : prevIndex - 1
    );
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productCategories.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="product" ref={sectionRef2}>
      <div className="flex flex-row justify-center pt-20 pb-20 gap-10 bg-blue-800">
        <button className="text-xl text-white font-bold" onClick={goToPrevious}>
          Anterior
        </button>
        {productCategories.map((category: ProductCategory) => (
          <ProductCard key={category.id} category={category}></ProductCard>
        ))}
        <button
          onClick={goToNext}
          className="px-4 py-2 text-xl text-white font-bold"
        >
          Siguiente
        </button>
      </div>
      <div className="flex justify-center py-10 bg-blue-800">
        <button className="inline-flex items-center px-3 py-2 text-2xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Descargar catálogo
        </button>
      </div>
    </div>
  );
};

export default Products;
