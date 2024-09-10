import React from "react";
import CategoryCard from "./categoryCard";

const CategoriesSection = () => {
  const categories = [
    {
      name: "Electronics",
      img: "https://via.placeholder.com/400x300?text=Electronics",
      slug: "electronics",
    },
    {
      name: "Fashion",
      img: "https://via.placeholder.com/400x300?text=Fashion",
      slug: "fashion",
    },
    {
      name: "Home Appliances",
      img: "https://via.placeholder.com/400x300?text=Home+Appliances",
      slug: "home-appliances",
    },
    {
      name: "Books",
      img: "https://via.placeholder.com/400x300?text=Books",
      slug: "books",
    },
    {
      name: "Sports",
      img: "https://via.placeholder.com/400x300?text=Sports",
      slug: "sports",
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center text-[#004e92] mb-8">
        Shop by Category
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 lg:px-12">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
