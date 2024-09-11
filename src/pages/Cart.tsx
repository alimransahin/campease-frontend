import { Trash } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

// const sampleProducts: CartItem[] = [
//   {
//     id: 1,
//     name: "Camping Tent",
//     regularPrice: 150,
//     offerPrice: 120,
//     qty: 5,
//     images: ["https://via.placeholder.com/150"],
//     quantity: 1,
//   },
//   {
//     id: 2,
//     name: "Sleeping Bag",
//     regularPrice: 80,
//     offerPrice: 70,
//     qty: 10,
//     images: ["https://via.placeholder.com/150"],
//     quantity: 2,
//   },
//   {
//     id: 3,
//     name: "Camping Chair",
//     regularPrice: 50,
//     qty: 8,
//     images: ["https://via.placeholder.com/150"],
//     quantity: 1,
//   },
// ];

const Cart = () => {
  const products = useAppSelector((store) => store.cart.products);
  const navigate = useNavigate();

  // Load cart from localStorage or use sample products for testing

  // Page refresh warning when cart is not empty
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (products.length > 0) {
        e.preventDefault();
        e.returnValue = ""; // Some browsers require this to show a warning dialog
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [products]);

  // const handleQuantityChange = (id: number, quantity: number) => {
  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
  //     )
  //   );
  // };

  // const handleRemoveProduct = (id: number) => {
  //   if (
  //     window.confirm(
  //       "Are you sure you want to remove this product from your cart?"
  //     )
  //   ) {
  //     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  //   }
  // };

  // const getTotalPrice = () => {
  //   return cart.reduce((total, item) => {
  //     const price = item.offerPrice || item.regularPrice;
  //     return total + price * item.quantity;
  //   }, 0);
  // };

  const isOrderEnabled = () => {
    return products.every((item) => item.quantity <= item.qty);
  };

  const handlePlaceOrder = () => {
    if (isOrderEnabled()) {
      navigate("/checkout");
    } else {
      alert("Some products are out of stock. Please adjust quantities.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Shopping Cart</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {products.length === 0 ? (
          <p className="text-xl py-8 lg:py-48">Your cart is empty.</p>
        ) : (
          <>
            <table className="min-w-full table-auto border-collapse ">
              <thead>
                <tr className="text-left border-b border-gray-300 text-center">
                  <th className="p-4 ">Image</th>
                  <th className="p-4">Product Name</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Unit Price</th>
                  <th className="p-4">Total</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 text-center"
                  >
                    <td className="p-4">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md mx-auto"
                      />
                    </td>
                    <td className="p-4">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h2>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                          className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                        >
                          -
                        </button>
                        <span className="text-lg">{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          disabled={item.quantity >= item.qty}
                          className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4">
                      ৳{(item.offerPrice || item.regularPrice).toLocaleString()}
                    </td>
                    <td className="p-4">
                      ৳
                      {(
                        (item.offerPrice || item.regularPrice) * item.quantity
                      ).toLocaleString()}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => handleRemoveProduct(item.id)}
                        className="px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white me-2"
                      >
                        <Trash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 flex justify-center">
              <button
                onClick={handlePlaceOrder}
                disabled={!isOrderEnabled()}
                className={`px-12 py-3 font-bold rounded-lg transition-all duration-500 ease-in-out ${
                  isOrderEnabled()
                    ? "px-6 py-3 bg-[#004e92] text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] transform transition-transform hover:scale-105 my-4"
                    : "bg-gray-300 text-gray-700 border-2 border-gray-300 cursor-not-allowed"
                }`}
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
