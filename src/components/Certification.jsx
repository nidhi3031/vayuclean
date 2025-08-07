import { Check } from "lucide-react";
import { Customer, Innovation, Quality } from "../utils/utils";
import SectionTitle from "./SectionTitle";
import Description from "./Description";

const Certification = () => {
  return (
    <section className="px-30">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-10">
          <SectionTitle className="mb-3">Our Commitment</SectionTitle>
          <Description>
            Committed to success through quality and trust.
          </Description>
        </div>

        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center mb-12 px-24">
          {/* Card 1 */}
          <div className="px-8">
            <img src={Quality} alt="Quality" className="mx-auto mb-4 h-12" />
            <h3 className="text-[24px ] font-medium">Quality Assurance</h3>
            <p className=" mt-2">
              Every product meets stringent pharmaceutical standards
            </p>
          </div>

          {/* Card 2 */}
          <div className="px-8">
            <img
              src={Innovation}
              alt="Innovation"
              className="mx-auto mb-4 h-12"
            />
            <h3 className="text-[24px ] font-medium">Innovation Focus</h3>
            <p className=" mt-2">
              Continuous R&amp;D investment in cutting-edge technology
            </p>
          </div>

          {/* Card 3 */}
          <div className="px-8">
            <img src={Customer} alt="Support" className="mx-auto mb-4 h-12" />
            <h3 className="text-[24px ] font-medium">Customer Success</h3>
            <p className=" mt-2">
              24/7 support and comprehensive service programs
            </p>
          </div>
        </div>

        <hr className="border-t-2 border-blue-300 max-w-6xl mx-auto mb-12" />

        {/* Certificate Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold">Certificate and Compliance</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center ">
          {/* Cert 1 */}
          <div className="border-2 border-blue-300 rounded-lg py-6 px-4 flex flex-col items-center gap-3">
            <Check className="text-blue-500 w-8 h-8" />
            <p className="font-medium text-center">
              ISO 9001:2015 Quality Management
            </p>
          </div>

          {/* Cert 2 */}
          <div className="border-2 border-blue-300 rounded-lg py-6 px-4 flex flex-col items-center gap-3">
            <Check className="text-blue-500 w-8 h-8" />
            <p className="font-medium">CE Mark Certified</p>
          </div>

          {/* Cert 3 */}
          <div className="border-2 border-blue-300 rounded-lg py-6 px-4 flex flex-col items-center gap-3">
            <Check className="text-blue-500 w-8 h-8" />
            <p className="font-medium">21 CFR Part 11</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
