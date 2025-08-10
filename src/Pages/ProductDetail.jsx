// src/pages/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/products";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <Section>
        <SectionTitle className="text-red-600 text-center pt-32">
          Product Not Found
        </SectionTitle>
        <p className="text-center text-gray-600">
          The product you are looking for does not exist.
        </p>
      </Section>
    );
  }

  return (
    <Section className="bg-white pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-lg shadow-md"
        />
        <div>
          <SectionTitle className="mb-4">{product.name}</SectionTitle>
          <p className="text-gray-700 mb-4">{product.description}</p>

          <p className="text-sm text-gray-500">Category: {product.category}</p>
        </div>
      </div>
    </Section>
  );
};

export default ProductDetail;
