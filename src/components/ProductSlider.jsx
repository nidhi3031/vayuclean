import { MoveLeft, MoveRight } from 'lucide-react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Productcard } from '../utils/utils'; // Make sure this is an image

const productData = [
  {
    title: 'Laminar Air Flow Unit',
    description: 'Widely used in microbiology labs, quality control, and aseptic processing.',
    image: Productcard,
  },
  {
    title: 'Bio Safety Cabinet',
    description: 'Essential in handling biological samples, especially in R&D and diagnostics.',
    image: Productcard,
  },
  {
    title: 'Pass Box (Static & Dynamic)',
    description: 'Crucial for contamination-free material transfer in cleanroom environments.',
    image: Productcard,
  },
  {
    title: 'Air Shower',
    description: 'High-demand pre-entry solution for particulate removal before entering clean zones.',
    image: Productcard,
  },
  {
    title: 'Fume Hood',
    description: 'Common in R&D and chemical testing areas to ensure safe ventilation.',
    image: Productcard,
  },
];

const ProductSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">

        {/* Arrows aligned right above cards */}
        <div className="flex justify-end items-center mb-4 gap-2">
          <button
            ref={prevRef}
            className="w-12 h-10 rounded-[7px] bg-primary hover:text-blue-500 flex items-center justify-center text-blue-600 text-lg"
          >
          <MoveLeft className="w-6 h-6 text-white" />
          </button>
          <button
            ref={nextRef}
            className="w-12 h-10 rounded-[7px] bg-primary hover:text-blue-500 flex items-center justify-center text-blue-600 text-lg"
          >
           <MoveRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Swiper */}
        <Swiper
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
            1280: { slidesPerView: 4 },
          }}
        >
          {productData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm min-w-[250px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-46 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium mb-3">{item.title}</h3>
                  <p className=" text-gray-600">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View more button */}
       <div className="flex justify-center">
  <button className="mt-6 px-5 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 text-center">
    View more
  </button>
</div>
      </div>
    </section>
  );
};

export default ProductSlider;
