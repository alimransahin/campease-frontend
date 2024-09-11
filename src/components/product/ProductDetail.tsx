import React, { useState } from "react";
import { useParams } from "react-router-dom";
import getAllProducts from "../../pages/data";
import ReactImageMagnify from "react-image-magnify";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>(); // Extract id from params
  if (!id) {
    return <p>Invalid product ID</p>;
  }

  const products = getAllProducts();
  const product = products.find((item) => item.id === parseInt(id, 10)); // Find the product by ID

  if (!product) {
    return <p>Product not found</p>;
  }

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart.`);
  };

  const handleAddToWishlist = () => {
    console.log(`${product.name} added to wishlist.`);
  };

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-start md:space-x-10">
        {/* Product Images Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: product.name,
                isFluidWidth: true,
                src: product.images[0], // Ensure the small image is well-sized
              },
              largeImage: {
                src: product.images[0], // Use the same image for zoom
                width: 900, // Adjust to maintain the aspect ratio with the small image
                height: 600, // Ensure it matches the aspect ratio of the small image
              },
              lensStyle: { backgroundColor: "rgba(0,0,0,.5)" },
              enlargedImagePosition: "over", // Optional: This shows the zoomed image over the small image
              hintTextMouse: "Hover to Zoom",
              isHintEnabled: true,
              shouldHideHintAfterFirstActivation: false,
            }}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />

          {product.images && product.images.length > 1 && (
            <div className="flex mt-4 space-x-2">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  className="w-20 h-20 object-cover rounded-md border border-gray-300 cursor-pointer hover:opacity-80 transition-opacity"
                  src={image}
                  alt={`${product.name} - ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Information Section */}
        <div className="w-full md:w-1/2 text-start">
          <h1 className="text-4xl font-extrabold text-[#000428] mb-4">
            {product.name}
          </h1>

          {/* Price */}
          <p className="text-2xl text-gray-700 mb-4">
            Price:{" "}
            {product.offerPrice ? (
              <span>
                <span className="line-through text-red-500">
                  ${product.regularPrice}
                </span>{" "}
                <span className="font-bold text-[#004e92]">
                  ${product.offerPrice}
                </span>
              </span>
            ) : (
              <span className="font-bold">${product.offerPrice}</span>
            )}
          </p>

          {/* Stock Availability */}
          <p
            className={`text-lg font-medium ${
              product.qty > 0 ? "text-[#004e92]" : "text-red-500"
            } mb-4`}
          >
            {product.qty > 0 ? `${product.qty} in stock` : "Out of stock"}
          </p>

          {/* Category */}
          <p className="text-md text-gray-600 mb-4">
            Category:{" "}
            <span className="font-semibold text-gray-900">
              {product.category}
            </span>
          </p>

          {/* Product Ratings */}
          <div className="flex mb-6">
            <span className="text-yellow-500 text-xl">★★★★☆</span>
            <span className="ml-2 text-gray-600 text-md">(4.5 ratings)</span>
          </div>

          {/* Product Description */}
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity Selector and Add to Cart in one line */}
          <div className="flex items-center align-middle space-x-4 mb-6">
            <label className="block text-md font-medium text-gray-700">
              Quantity
            </label>
            <div>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value)))
                }
                className="w-20 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#004e92] focus:border-[#004e92]"
                min="1"
              />
            </div>
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 bg-[#004e92] text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] transform transition-transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>

          {/* Add to Wishlist Button */}
          <button
            onClick={handleAddToWishlist}
            className="px-6 py-3 border-2 border-[#004e92] text-[#004e92] rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] hover:text-white"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
