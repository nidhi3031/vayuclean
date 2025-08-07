import { Check } from "lucide-react";
import { Card1 } from "../utils/utils";
import SectionTitle from "./SectionTitle";
import Description from "./Description";
import Section from "./Section";
const points = [
  "Over 5 years of trusted industry experience",
  "500+ successful projects with leading pharma brands",
  "Turnkey cleanroom and HVAC solutions under one roof",
  "ISO 9001 certified quality processes",
  "Expert support from concept to commissioning",
];

const Abtchoose = () => {
  return (
    <Section className="bg-gray">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Right side - Text content */}
        <div className="max-w-5xl mx-auto text-left py-16 px-6">
          <SectionTitle className="mb-5"> Why Choose Us</SectionTitle>

          <Description className="mb-6">
            At Vayuclean, we go beyond providing equipment — we deliver
            precision-engineered solutions tailored to pharmaceutical, biotech,
            and cleanroom environments.
          </Description>

          <ul className="space-y-3">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <Check className="w-5 h-5 text-primary mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Left side - Image */}
        <div>
          <img
            src={Card1}
            alt="Cleanroom Manufacturing"
            className="rounded-lg shadow-lg object-cover w-full h-full max-h-[450px]"
          />
        </div>
      </div>

      {/* missionvision */}
      <div className="max-w-6xl mx-auto flex justify-between gap-x-6 pt-20">
        {/* Mission Box */}
        <div className="bg-primary text-white p-6 pt-16 rounded-lg shadow-md flex-1">
          <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
          <p>
            At Vayuclean, we go beyond providing equipment — we deliver
            precision-engineered solutions tailored to pharmaceutical, biotech,
            and cleanroom environments.
          </p>
        </div>

        {/* Vision Box */}
        <div className="bg-primary text-white p-6 pt-16 rounded-lg shadow-md flex-1">
          <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
          <p>
            To be the leading provider of advanced cleanroom technology,
            ensuring the highest standards of safety, quality, and innovation
            across industries worldwide.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Abtchoose;
