import React from "react";
import Section from "../components/Section";
import PrimaryHeading from "../components/PrimaryHeading";
import Description from "../components/Description";
import PrimaryButton from "../components/PrimaryButton";

const ComingSoon = () => {
  return (
    <Section className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 text-center">
      <PrimaryHeading className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
        🚀 Coming Soon
      </PrimaryHeading>
      <Description className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:max-w-md mx-auto">
        We’re working hard to bring you something amazing. Stay tuned!
      </Description>
      <PrimaryButton to="/">Back to Home</PrimaryButton>
    </Section>
  );
};

export default ComingSoon;
