import React from "react";
import Section from "../components/Section";
import { VayuBanner } from "../utils/utils";
import PrimaryHeading from "../components/PrimaryHeading";
import SectionTitle from "../components/SectionTitle";
import { products } from "../utils/products";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <>
      <Section
        bgImage={VayuBanner}
        className="bg-white pt-48 h-[90vh] flex items-center justify-start"
      >
        <PrimaryHeading className="text-white mb-8">
          Explore Our Products
        </PrimaryHeading>
        <p className="text-white text-base sm:text-lg max-w-2xl">
          Discover our curated collection of high-quality, reliable, and
          innovative products designed to meet your every need. Whether you're
          shopping for essentials or something unique, we’ve got you covered.
        </p>
      </Section>

      <Section className="bg-white">
        <SectionTitle className="text-center mb-5">Our Products</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Products;
