import React from "react";
import { Link } from "react-router-dom";

interface product {
  id: number;
  name: string;
  img?: string;
  regularPrice: number | string;
  description?: string; // Optional field
}
const ProductCard: React.FC<{ product: product }> = ({ product }) => {
  return (
    <div className="product-card border rounded-lg p-4 shadow-lg">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-[200px] object-cover"
        />
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-gray-700">${product.regularPrice}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
