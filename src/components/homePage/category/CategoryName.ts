// getUniqueCategoryProducts.js

export const getUniqueCategoryProducts = (products) => {
  const uniqueCategoryProducts = Array.from(
    products.reduce((acc, product) => {
      // If the category is not in the map yet, add the product
      if (!acc.has(product.category)) {
        acc.set(product.category, product);
      }
      return acc;
    }, new Map())
  ).map(([_, product]) => product);

  return uniqueCategoryProducts;
};
