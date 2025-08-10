import React, { useRef } from "react";
import { VayuBanner } from "../utils/utils";
import Section from "../components/Section";
import PrimaryHeading from "../components/PrimaryHeading";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <>
      {/* Banner Section */}
      <Section
        bgImage={VayuBanner}
        className="h-screen flex items-center justify-center"
      >
        <PrimaryHeading className="text-center text-white">
          Contact Us
        </PrimaryHeading>
      </Section>

      {/* Form Section */}
      <Section>
        <SectionTitle className="mb-12 md:mb-24 text-center">
          Please fill in the form below
        </SectionTitle>

        <div className="form-container md:w-[65%] mx-auto">
          <ContactForm variant="light" />
        </div>
      </Section>
    </>
  );
};

export default ContactUs;
