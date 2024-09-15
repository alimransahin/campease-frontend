import React from "react";
import { useNavigate } from "react-router-dom";

const Success: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-green-500 mb-6">
        Order Successful
      </h1>
      <p className="text-gray-700 mb-4">
        Your order has been placed successfully! Thank you for shopping with us.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
      >
        Go to Home
      </button>
    </div>
  );
};

export default Success;
