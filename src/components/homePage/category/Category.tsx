import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCard from "./CategoryCard";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "40px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center text-[#004e92] mb-8">
        Shop by Category
      </h2>
      <div className="container mx-auto px-6 lg:px-12">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="px-4">
              <CategoryCard category={category} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategoriesSection;
