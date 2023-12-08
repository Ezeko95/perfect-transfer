import React from "react";
import { ProductCategory, productCategories } from "../../assets/products";
import ProductCard from "./Product-Card";

const Products: React.FC = () => {
  return (
    <div>
      {productCategories.map((category: ProductCategory) => (
        <ProductCard key={category.id} category={category}></ProductCard>
      ))}
    </div>
  );
};

export default Products;
