import React from "react";
import { useParams } from "react-router-dom";
import getAllProducts from "../../pages/data";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>(); // Extract id from params
  if (!id) {
    return <p>Invalid product ID</p>; // Handle case when id is not available
  }
  // const { id } = useParams(); // Get the item ID from the URL
  const products = getAllProducts();
  const product = products.find((item) => item.id === parseInt(id, 10)); // Find the product with the matching ID

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-detail">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-auto" />
      <p className="text-lg">{product.description}</p>
      <p className="text-xl font-semibold">${product.price}</p>
    </div>
  );
};

export default ProductDetail;
