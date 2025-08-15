import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import PrimaryHeading from "../components/PrimaryHeading";
import { VayuBanner } from "../utils/utils";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { categories } from "../utils/products";

const CategoryList = () => {
  return (
    <>
      <Section
        bgImage={VayuBanner}
        className="bg-white pt-48 h-[100vh] flex items-center justify-start"
      >
        <div className="md:max-w-2xl mx-auto text-center">
          <PrimaryHeading className="text-white mb-8">
            Explore Our Product Categories
          </PrimaryHeading>
          <p className="text-white text-base sm:text-lg max-w-2xl">
            Discover our curated collection of high-quality, reliable, and
            innovative products in each category.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionTitle className="text-center mb-10">
          Our Product Categories
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <Link key={index} to={`/category/${item.slug}`}>
              <ProductCard product={item} />
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
};

export default CategoryList;
