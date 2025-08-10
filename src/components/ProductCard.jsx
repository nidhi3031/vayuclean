// src/components/ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Description from "./Description";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${product.slug}`)}
      className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 text-left h-f"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-md mb-5"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {product.name}
      </h3>
      <Description className="text-gray-600 text-sm mb-2">
        {product.description}
      </Description>
    </div>
  );
};

export default ProductCard;
