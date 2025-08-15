// src/components/ProductCard.jsx
import React from "react";
import Description from "./Description";
import { categories } from "../utils/products";

const ProductCard = ({ product, categories }) => {
  return (
    <div className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 text-left h-full">
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
