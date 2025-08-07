import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const faqData = [
  {
    question:
      "What types of pharmaceutical machines does VayuClean Technologies offer?",
    answer:
      "VayuClean Technologies offers laminar air flow units, biosafety cabinets, air showers, pass boxes, fume hoods, and more for pharmaceutical environments.",
  },
  {
    question: "How does VayuClean ensure equipment quality?",
    answer:
      "All our equipment complies with ISO standards and undergoes rigorous testing and quality checks.",
  },
  {
    question: "Can I request a custom machine design?",
    answer:
      "Yes, we provide tailored solutions based on your lab or facility requirements. Contact us to discuss your needs.",
  },
  {
    question: "What is the typical delivery time?",
    answer:
      "Delivery times vary by product but generally range from 2 to 6 weeks depending on specifications and quantity.",
  },
];

const HomeFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section className="bg-gray">
      <SectionTitle className="text-center mb-10 ">FAQ</SectionTitle>

      <div className="px-20">
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className={`rounded-lg border px-4 py-3 mb-4 transition-all duration-200 ${
                isOpen ? "border-blue-400" : "border-gray-300"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left font-medium text-gray-800"
              >
                <span>{item.question}</span>
                {isOpen ? (
                  <Minus className="text-blue-500 w-5 h-5" />
                ) : (
                  <Plus className="text-blue-500 w-5 h-5" />
                )}
              </button>

              {isOpen && <p className="mt-3 text-gray-600">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default HomeFaqs;
