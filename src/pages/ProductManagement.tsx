import React, { useState } from "react";
import getAllProducts from "./data";
import EditProductModal from "../components/product/EditProductModal";
import ProductModal from "../components/product/ProductModal";
import { Edit, Trash } from "lucide-react";

// Fetch products from your data source

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>(getAllProducts());
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
    setIsAddModalOpen(false);
  };

  const handleEditProduct = (updatedProduct: Product) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setIsEditModalOpen(false);
    setSelectedProduct(null);
  };

  const handleDeleteProduct = (productId: number) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((product) => product.id !== productId));
    }
  };

  const openEditModal = (product: Product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  return (
    <div>
      {/* Buttons to Open Modals */}
      <button
        onClick={() => setIsAddModalOpen(true)}
        className=" px-6 py-3 bg-[#004e92] text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] transform transition-transform hover:scale-105 my-4"
      >
        Add New Product
      </button>

      {/* Product List Table */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Image</th>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Price</th>
            <th className="px-4 py-2 border-b">Category</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-4 py-2 border-b">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="px-4 py-2 border-b">{product.name}</td>
              <td className="px-4 py-2 border-b">${product.regularPrice}</td>
              <td className="px-4 py-2 border-b">{product.category}</td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => openEditModal(product)}
                  className="px-4 py-2 border-2 border-[#004e92] text-[#004e92] rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-[#000428] hover:to-[#004e92] hover:text-white me-2"
                >
                  <Edit />
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="px-4 py-2 border-2 border-red-600 text-red-600 rounded-lg font-bold transition-all duration-500 ease-in-out bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white me-2"
                >
                  <Trash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <ProductModal
          onClose={() => setIsAddModalOpen(false)}
          onCreate={handleAddProduct}
        />
      )}

      {/* Edit Product Modal */}
      {isEditModalOpen && selectedProduct && (
        <EditProductModal
          product={selectedProduct}
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={handleEditProduct}
        />
      )}
    </div>
  );
};

export default ProductList;
