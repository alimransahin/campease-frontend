import React from "react";
import { Link } from "react-router-dom";

import { IProduct } from "../utils/interface";

const FeaturedProducts: React.FC = () => {
  const products = getAllProducts();
  const featuredProducts: any = products.slice(0, 4);

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-[#004e92] mb-8">
        Featured Products
      </h2>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 lg:px-12">
        {featuredProducts.map((product: IProduct) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">${product.regularPrice}</p>
              <Link
                to={`/product/${product.id}`}
                className="mt-4 inline-block px-4 py-2 border-2 hover:text-white  border-[#004e92] text-[#004e92] rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92]"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
