import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cartSlice";

const ProductCard = ({ product }: { product: any }) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };
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
      <button
        onClick={() => {
          handleAddToCart(product);
        }}
        className="px-6 py-2 my-2 w-full bg-[#004e92] text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] transform transition-transform hover:scale-105"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
