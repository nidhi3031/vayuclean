import { Card1 } from "../utils/utils";

const products = [
  {
    title: "Laminar Air Flow Unit",
    description: "Widely used in microbiology labs, quality control, and aseptic processing.",
    image:  Card1,
  },
  {
    title: "Air Handling Unit",
    description: "Controls air flow and quality in cleanrooms with high efficiency.",
    image: Card1,
  },
  {
    title: "Modular Cleanroom",
    description: "Custom cleanroom structures designed for pharmaceutical environments.",
    image: Card1,
  },
];

const ProductLine = () => {
  return (
    <section id="products">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Product Line
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLine;
