import React from "react";
import { ProductCategory, productCategories } from "../../assets/products";
import ProductCard from "./Product-Card";

interface ProductsProps {
  sectionRef2: React.RefObject<HTMLDivElement>;
}

const Products: React.FC<ProductsProps> = ({ sectionRef2 }) => {
  return (
    <div id="product" ref={sectionRef2} className="flex justify-center items-center max-w-screen bg-gray-900">
      <div className="flex flex-row flex-wrap max-w-7xl justify-center pt-20 pb-20 gap-10 ">
        {productCategories.map((category: ProductCategory) => (
          <ProductCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Products;
