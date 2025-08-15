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
        <SectionTitle className="text-red-600 text-center md:pt-32 pt-28">
          Product Not Found
        </SectionTitle>
        <p className="text-center text-gray-600">
          The product you are looking for does not exist.
        </p>
      </Section>
    );
  }

  return (
    <>
      <Section className="bg-white md:pt-32 pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
          <div>
            <SectionTitle className="mb-4">{product.name}</SectionTitle>
            <p className="text-gray-700 mb-4">{product.description}</p>

            <p className="text-sm text-gray-500">
              Category: {product.category}
            </p>
          </div>
        </div>
      </Section>
      {Array.isArray(product.list) && product.list.length > 0 && (
        <Section className="bg-white lg:pt-0">
          <ul className="divide-y divide-[#c3c3c3] p-10 bg-gray rounded-lg">
            {product.list.map((item, index) => (
              <li key={index} className="flex items-center gap-4 p-4">
                <p className="text-gray-500 flex gap-3">
                  <h6 className="text-md font-semibold text-center text-nowrap">
                    {item.title} -
                  </h6>
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
};

export default ProductDetail;
