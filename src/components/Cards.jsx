
const Cards = ({ image, title, description, features, buttonText }) => {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <ul className="space-y-2 text-sm text-gray-800 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">✔</span>
              {feature}
            </li>
          ))}
        </ul>
        <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Cards;
