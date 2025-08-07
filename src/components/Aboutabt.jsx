import { Card1, VayuBanner } from "../utils/utils";
import Description from "./Description";
import PrimaryButton from "./PrimaryButton";
import PrimaryHeading from "./PrimaryHeading";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const Aboutabt = () => {
  return (
    <>
      <Section bgImage={VayuBanner} className="h-screen flex items-center">
        {/* Overlay */}

        {/* Content */}
        <div className="relative z-20 text-white px-6 sm:px-12 lg:max-w-3xl text-left pt-20">
          <PrimaryHeading className="mb-4">
            Shaping the Future of Architecture
          </PrimaryHeading>

          <Description className="mb-6 lg:max-w-xl text-white">
            We design environments that inspire innovation, performance, and
            sustainability.
          </Description>
          <PrimaryButton to="/products" className="mb-4">
            Explore Our Products
          </PrimaryButton>
        </div>
      </Section>
      {/* description */}
      <Section>
        <SectionTitle className="mb-16 text-center lg:max-w-4xl mx-auto">
          Shaping the Future of Cleanroom Manufacturing
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Left side - Image */}
          <div>
            <img
              src={Card1}
              alt="Cleanroom Manufacturing"
              className="rounded-lg shadow-lg object-cover w-full h-full max-h-[450px]"
            />
          </div>

          {/* Right side - Text content */}
          <div className="text-gray-800 space-y-6">
            <p className="mb-4">
              At VayuClean, we specialize in delivering turnkey cleanroom
              systems designed to meet the rigorous demands of the
              pharmaceutical and life sciences industries. With over 5 years of
              industry experience and more than 500 satisfied clients, we pride
              ourselves on providing solutions that ensure safety, compliance,
              and efficiency in manufacturing environments.
            </p>

            <p>
              Our comprehensive portfolio covers everything from isolators and
              laminar airflow units to advanced HVAC and filtration systems.
              Each solution is engineered to support sterile production zones,
              microbiology and quality control laboratories, and packaging areas
              requiring the highest standards of cleanliness.
            </p>
            <PrimaryButton to="/contact">Discover More</PrimaryButton>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Aboutabt;
