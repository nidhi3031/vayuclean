// src/components/ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition p-4"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <div className="text-indigo-600 font-semibold text-sm">
        ${product.price}
      </div>
    </div>
  );
};

export default ProductCard;
