
// ✅ Option 1: Local image imports (you can replace these with real logos)
// import Logo1 from '../assets/logo1.png';
// import Logo2 from '../assets/logo2.png';
// import Logo3 from '../assets/logo3.png';
// import Logo4 from '../assets/logo4.png';
// import Logo5 from '../assets/logo5.png';

import { Card1 } from "../utils/utils";

Card1

// ✅ Option 2: If using URLs, you can comment out imports above and use the array below:
// const logos = [
//   'https://example.com/logo1.png',
//   'https://example.com/logo2.png',
//   'https://example.com/logo3.png',
//   ...
// ];

const logos = [Card1, Card1, Card1, Card1,Card1, Card1, Card1, Card1, Card1, Card1 ];

const Brands = () => {
  return (
    <section className="py-12 text-center bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className=" font-bold mb-3">Brands Who Rely on Us</h2>
        <p className=" max-w-2xl mx-auto mb-10">
          Comprehensive solutions covering every aspect of pharmaceutical manufacturing, from raw materials to finished products.
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md h-20 flex items-center justify-center p-4"
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
        <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Brands;
