import { Card1 } from "../utils/utils";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Description from "./Description";
import PrimaryButton from "./PrimaryButton";

Card1;

// ✅ Option 2: If using URLs, you can comment out imports above and use the array below:
// const logos = [
//   'https://example.com/logo1.png',
//   'https://example.com/logo2.png',
//   'https://example.com/logo3.png',
//   ...
// ];

const logos = [
  Card1,
  Card1,
  Card1,
  Card1,
  Card1,
  Card1,
  Card1,
  Card1,
  Card1,
  Card1,
];

const Brands = () => {
  return (
    <Section className="text-center">
      <div className="text-center mb-10">
        <SectionTitle className="mb-3">Brands Who Rely on Us</SectionTitle>
        <Description>
          Comprehensive solutions covering every aspect of pharmaceutical
          manufacturing, from raw materials to finished products.
        </Description>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-gray rounded-md h-20 flex items-center justify-center p-4"
          >
            <img
              src={logo}
              alt={`Brand ${index + 1}`}
              className="max-h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Button */}
      <PrimaryButton to="/coming-soon">Learn More</PrimaryButton>
    </Section>
  );
};

export default Brands;
