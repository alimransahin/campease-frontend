import React, { useState } from "react";
import ProductCard from "../components/product/ProductCard";
import { IProduct } from "../components/utils/interface";
import { useGetFilteredProductQuery } from "../redux/api/productsApi";

const Product = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("0-1000");
  const [sortOption, setSortOption] = useState("default"); // Default sorting value

  // Use the correct options for `pollingInterval`
  const {
    data: products = [],
    error,
    isLoading,
  } = useGetFilteredProductQuery({}) as {
    data: IProduct[];
    error: any;
    isLoading: boolean;
  };

  console.log(products);

  // Input handlers
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriceRange(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setPriceRange("0-1000");
    setSortOption("asc"); // Reset to default sorting value
  };

  // Filter and sort products on the frontend
  const filteredProducts = products
    .filter((product) => {
      const lowercasedQuery = searchQuery.toLowerCase().trim();
      return product.name.toLowerCase().includes(lowercasedQuery);
    })
    .filter(
      (product) =>
        selectedCategory === "" || product.category === selectedCategory
    )
    .filter((product) => {
      const [min, max] = priceRange.split("-").map(Number);
      return product.regularPrice >= min && product.regularPrice <= max;
    })
    .sort((a, b) =>
      sortOption === "asc"
        ? a.regularPrice - b.regularPrice
        : b.regularPrice - a.regularPrice
    );

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 mb-12">
      <h1 className="text-4xl font-bold my-10 text-center text-blue-400">
        All Products
      </h1>

      <div className="flex flex-col-reverse xl:flex-row justify-between items-center mb-6">
        {/* Filters and Sorting on the Left */}
        <div className="flex flex-wrap justify-center gap-4">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            {/* Add more options as needed */}
          </select>

          <select
            value={priceRange}
            onChange={handlePriceRangeChange}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="0-1000">All Prices</option>
            <option value="0-50">Up to $50</option>
            <option value="50-100">$50 to $100</option>
            <option value="100-200">$100 to $200</option>
            <option value="200-500">$200 to $500</option>
            <option value="500-1000">$500 to $1000</option>
            <option value="1000-">Over $1000</option>
          </select>

          <select
            value={sortOption}
            onChange={handleSortChange}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Default</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>

          <button
            onClick={handleClearFilters}
            className="px-6 py-3 border-2 border-[#004e92] text-[#004e92] rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] hover:text-white"
          >
            Clear Filters
          </button>
        </div>

        {/* Search Bar on the Right */}
        <div className="flex-grow flex justify-end">
          <input
            type="text"
            placeholder="Search by name or description"
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-3 xl:my-0 my-3 w-full max-w-md  border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 lg:gap-10">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
