import React from "react";
import { Link, useParams } from "react-router-dom";
import { categories, products } from "../utils/products";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

const CategoryProducts = () => {
  const { categorySlug } = useParams();

  // Find the category object that matches the slug
  const category = categories.find((cat) => cat.slug === categorySlug);

  // Filter products where the category name matches
  const filteredProducts = products.filter(
    (product) => product.category === category?.name
  );

  if (!category) {
    return <p className="p-6 text-red-600">Category not found.</p>;
  }

  return (
    <>
      <Section className="lg:pt-32 pt-28">
        <SectionTitle className="mb-10 text-center">
          {category.name}
        </SectionTitle>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/category/${category.slug}/${product.slug}`}
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        ) : (
          <p>No products found in this category.</p>
        )}
      </Section>
    </>
  );
};

export default CategoryProducts;
