import { ArrowLeft, ArrowRight, MoveLeft, MoveRight } from "lucide-react";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Description from "./Description";
import SectionTitle from "./SectionTitle";
import PrimaryButton from "./PrimaryButton";
import Section from "./Section";
import ProductCard from "./ProductCard";
import { products } from "../utils/products";
import "swiper/css";
import "swiper/css/navigation";

const ProductSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Section className="bg-gray overflow-hidden">
      <div className="text-center mb-10">
        <SectionTitle className="mb-6 text-center">
          Our Product Line
        </SectionTitle>
        <Description className="lg:max-w-3xl mx-auto mb-5">
          Comprehensive solutions covering every aspect of pharmaceutical
          manufacturing, from raw materials to finished products.
        </Description>
      </div>

      {/* Swiper */}
      <Swiper
        className="overflow-visible"
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard key={product.id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between mt-5 md:mt-12">
        <PrimaryButton to="/products"> View more</PrimaryButton>
        <div className="flex items-center gap-2">
          <button
            ref={prevRef}
            className="px-3 py-3 rounded-[7px] bg-primary hover:text-blue-500 flex items-center justify-center text-blue-600 text-lg"
          >
            <ArrowLeft className=" text-white" />
          </button>
          <button
            ref={nextRef}
            className="px-3 py-3 rounded-[7px] bg-primary hover:text-blue-500 flex items-center justify-center text-blue-600 text-lg"
          >
            <ArrowRight className=" text-white" />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default ProductSlider;
