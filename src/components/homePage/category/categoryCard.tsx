import React from "react";
import { Link } from "react-router-dom";

interface Category {
  name: string;
  img: string;
  slug: string;
}

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <Link
      to={`/products?category=${category.slug}`}
      className="relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={category.img}
        alt={category.name}
        className="w-full h-40 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center">
        <h3 className="text-white text-xl font-bold">{category.name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
