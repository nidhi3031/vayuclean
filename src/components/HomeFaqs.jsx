import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

const faqData = [
  {
    question: 'What types of pharmaceutical machines does VayuClean Technologies offer?',
    answer:
      'VayuClean Technologies offers laminar air flow units, biosafety cabinets, air showers, pass boxes, fume hoods, and more for pharmaceutical environments.',
  },
  {
    question: 'How does VayuClean ensure equipment quality?',
    answer:
      'All our equipment complies with ISO standards and undergoes rigorous testing and quality checks.',
  },
  {
    question: 'Can I request a custom machine design?',
    answer:
      'Yes, we provide tailored solutions based on your lab or facility requirements. Contact us to discuss your needs.',
  },
  {
    question: 'What is the typical delivery time?',
    answer:
      'Delivery times vary by product but generally range from 2 to 6 weeks depending on specifications and quantity.',
  },
];

const HomeFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4  mx-auto bg-white">
      <h2 className="font-bold text-center mb-6">FAQ</h2>

      <div className='px-20'>
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className={`rounded-lg border px-4 py-3 mb-4 transition-all duration-200 ${
                isOpen ? 'border-blue-400' : 'border-gray-300'
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
    </section>
  );
};

export default HomeFaqs;
