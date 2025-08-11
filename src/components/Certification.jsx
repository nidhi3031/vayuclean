import {
  BadgeCheck,
  Check,
  Headset,
  Lightbulb,
  SquareCheckBig,
} from "lucide-react";
import { Customer, Innovation, Quality } from "../utils/utils";
import SectionTitle from "./SectionTitle";
import Section from "./Section";
import Description from "./Description";

const Certification = () => {
  return (
    <Section>
      {/* Heading */}
      <div className="text-center mb-10">
        <SectionTitle className="mb-3">Our Commitment</SectionTitle>
        <Description>
          Committed to success through quality and trust.
        </Description>
      </div>

      {/* Top Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center mb-12 md:px-24">
        {/* Card 1 */}
        <div className="p-8  rounded-xl hover:bg-gray transition">
          <BadgeCheck className="w-16 h-16 mx-auto text-primary" />
          <h3 className="text-[24px]  py-5 font-medium">Quality Assurance</h3>
          <p>Every product meets stringent pharmaceutical standards</p>
        </div>

        {/* Card 2 */}
        <div className="p-8 rounded-xl hover:bg-gray transition">
          <Lightbulb className="w-16 h-16 mx-auto text-primary" />
          <h3 className="text-[24px] py-5 font-medium">Innovation Focus</h3>
          <p>Continuous R&amp;D investment in cutting-edge technology</p>
        </div>

        {/* Card 3 */}
        <div className="p-8 rounded-xl hover:bg-gray transition">
          <Headset className="w-16 h-16 mx-auto text-primary" />
          <h3 className="text-[24px] py-5 font-medium">Customer Success</h3>
          <p>24/7 support and comprehensive service programs</p>
        </div>
      </div>

      {/* <hr className="border-t-2 border-blue-300 max-w-6xl mx-auto mb-12" /> */}

      {/* Certificate Section */}
      <div className="text-center mb-8 mt-24">
        <h3 className="text-2xl font-semibold">Certificate and Compliance</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center ">
        {/* Cert 1 */}
        <div className=" bg-gray rounded-lg py-6 px-4 flex flex-col items-center gap-3">
          <SquareCheckBig className="text-blue-500 w-8 h-8" />
          <p className="font-medium text-center">
            ISO 9001:2015 Quality Management
          </p>
        </div>

        {/* Cert 2 */}
        <div className=" bg-gray rounded-lg py-6 px-4 flex flex-col items-center gap-3">
          <SquareCheckBig className="text-blue-500 w-8 h-8" />

          <p className="font-medium">CE Mark Certified</p>
        </div>

        {/* Cert 3 */}
        <div className="bg-gray border-blue-300 rounded-lg py-6 px-4 flex flex-col items-center gap-3">
          <SquareCheckBig className="text-blue-500 w-8 h-8" />

          <p className="font-medium">21 CFR Part 11</p>
        </div>
      </div>
    </Section>
  );
};

export default Certification;
