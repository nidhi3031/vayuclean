
import { Download, Mail, Phone } from "lucide-react";
import { Card1, VayuBanner } from "../utils/utils";
import Brands from "./Brands";
import Cards from "./Cards";
import Certification from "./Certification";
import Footer from "./Footer";
import HomeCta from "./HomeCta";
import HomeFaqs from "./HomeFaqs";
import ProductSlider from "./ProductSlider";

const Banner = () => {

  const cardsData = [
  {
    image: Card1,
    title: 'Cleanroom Equipments',
    description: 'Supports precision workflows in controlled environments.',
    features: [
      'Sterile production zones',
      'Microbiology & QC labs',
      'Packaging & injectable areas',
    ],
    buttonText: 'Explore',
  },
  {
    image: Card1,
    title: 'Lab Instruments',
    description: 'Essential tools for accurate testing and diagnostics.',
    features: [
      'Centrifuges & microscopes',
      'pH meters & analyzers',
      'Sterilizers & safety cabinets',
    ],
    buttonText: 'View More',
  },
  {
    image: Card1,
    title: 'Safety Equipment',
    description: 'Protective gear for staff in sensitive environments.',
    features: [
      'Gloves & gowns',
      'Face masks & shields',
      'Biohazard disposal units',
    ],
    buttonText: 'Shop Now',
  },
]; 

  
  return (

    <>
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center overflow-hidden"
      style={{ backgroundImage: `url(${VayuBanner})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 text-white px-4 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your Partner for Cleanroom Manufacturing
        </h1>
        <p className="text-lg md:text-xl mb-6">
          From isolators to AHUs, we deliver turnkey cleanroom systems that support safe, compliant, and efficient pharmaceutical manufacturing.
        </p>
        <div className="flex flex-col gap-4 justify-center w-[40%] mx-auto">
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-4 py-4 rounded-[8px] font-semibold">
            Explore Products
          </button>
            <a
    href="/catalogue.pdf"
    download
    className="inline-flex items-center justify-center gap-2 text-primary hover:text-cyan-200  font-semibold transition duration-200"
  >
    <Download className="w-4 h-4" />
    Download Catalogue
  </a>
        </div>
        
      </div>
      <div>
      <div className="absolute bottom-10 left-10 w-full flex flex-col md:flex-row  gap-6 text-sm text-cyan-300 mt-6">
          <h6>ISO 9001 Certified</h6>
          <h6>500+ Clients</h6>
          <h6>5+ Years</h6>
        </div>
        <div className="absolute bottom-10 right-10 flex gap-6 text-sm text-white">
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

    {/* about us */}
    <section>
      <div className="container">
        <div className="text-center">
          <h2>Browse By category</h2>
          <p>Comprehensive solutions covering every aspect of pharmaceutical manufacturing, from raw materials to finished products.</p>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mt-20">
        {cardsData.map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            features={card.features}
            buttonText={card.buttonText}
          />
        ))}
      </div>
        </div>
    </section>
    {/* product line */}
    <section>
      <div className="container">
        <div className="text-center">
          <h2>Our Product Line</h2>
          <p>Comprehensive solutions covering every aspect of pharmaceutical manufacturing, from raw materials to finished products.</p>
        </div>
       <ProductSlider />
      </div>
    </section>
    {/* certifications */}
    <Certification />
    {/* contact */}
    <HomeCta />
    {/* logos */}
    <Brands />
    {/* faqs */}
    <HomeFaqs />
    {/* footer */}
    < Footer />
    </>
  );
};

export default Banner;
