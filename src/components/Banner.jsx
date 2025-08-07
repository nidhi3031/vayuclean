import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Download, Mail, Phone } from "lucide-react";
import { VayuBanner } from "../utils/utils";
import PrimaryButton from "./PrimaryButton";
import PrimaryHeading from "./PrimaryHeading";
import Description from "./Description";

const banners = [VayuBanner, VayuBanner, VayuBanner];

const Banner = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden text-center flex items-center justify-center">
      {/* Swiper Background */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="absolute inset-0"
        style={{ zIndex: 0 }}
      >
        {banners.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 text-white px-4 max-w-5xl">
        <PrimaryHeading className="mb-5">
          Your Partner for Cleanroom Manufacturing
        </PrimaryHeading>
        <Description className="text-white mb-7 lg:max-w-3xl mx-auto">
          From isolators to AHUs, we deliver turnkey cleanroom systems that
          support safe, compliant, and efficient pharmaceutical manufacturing.
        </Description>
        <div className="flex justify-center items-center gap-12">
          <PrimaryButton to="/products">Explore Products</PrimaryButton>
          <a
            href="/catalogue.pdf"
            download
            className="inline-flex items-center justify-center gap-2 text-primary hover:text-[#009dbb] font-semibold transition duration-200 text-sm sm:text-base"
          >
            <Download className="w-4 h-4" />
            Download Catalogue
          </a>
        </div>
      </div>

      {/* Bottom Info */}
      <div>
        <div className="absolute text-start bottom-10 left-4 sm:left-10 flex flex-col md:flex-row gap-2 sm:gap-6 text-xs sm:text-sm text-primary z-20">
          <h6>ISO 9001 Certified</h6>
          <h6>500+ Clients</h6>
          <h6>5+ Years</h6>
        </div>

        <div className="absolute text-start bottom-10 right-4 sm:right-10 flex flex-col md:flex-row gap-3 sm:gap-6 text-xs sm:text-sm text-primary z-20">
          <a
            href="tel:+91123456789"
            className="flex items-center gap-2 hover:underline cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            +91 123456789
          </a>

          <a
            href="mailto:Sachin.tiwari@vayumail.com"
            className="flex items-center gap-2 hover:underline cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            Sachin.tiwari@vayumail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
