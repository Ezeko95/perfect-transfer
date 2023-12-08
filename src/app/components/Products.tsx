import React from "react";
import { ProductCategory, productCategories } from "../../assets/products";
import ProductCard from "./Product-Card";

interface ProductsProps {
  sectionRef2: React.RefObject<HTMLDivElement>;
}

const Products: React.FC<ProductsProps> = ({ sectionRef2 }) => {
  return (
    <div id="product" ref={sectionRef2}>
      {productCategories.map((category: ProductCategory) => (
        <ProductCard key={category.id} category={category}></ProductCard>
      ))}
    </div>
  );
};

export default Products;
