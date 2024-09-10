import React from "react";
import getAllProducts from "./data";
import ProductCard from "../components/product/ProductCard";

const Product = () => {
  const products = getAllProducts();
  return (
    <div className="container mx-auto px-4 mb-12">
      <h1 className="text-4xl font-bold my-10 text-center">All Products</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-8 lg:gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
