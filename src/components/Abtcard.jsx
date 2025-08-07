import Section from "./Section";

const stats = [
  {
    value: "150+",
    title: "Projects Delivered",
    description:
      "Delivered top-notch cleanroom solutions across pharma, biotech, and research industries.",
  },
  {
    value: "98%",
    title: "Client Satisfaction",
    description:
      "Trusted by industry leaders for our commitment to quality, compliance, and timelines.",
  },
  {
    value: "85%",
    title: "Repeat Clients",
    description:
      "A majority of our clients return to VayuClean for additional cleanroom installations and upgrades.",
  },
  {
    value: "20+",
    title: "Industries Served",
    description:
      "Catering to pharma, electronics, food, healthcare, and life sciences with cleanroom expertise.",
  },
];

const Abtcard = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-2xl p-10 min-h-[350px] transition-all duration-300 hover:bg-[#00B8D9] hover:text-white flex flex-col justify-between shadow-md hover:shadow-lg"
          >
            <h2 className="text-5xl text-primary font-semibold mb-8 group-hover:text-white transition-colors duration-300">
              {stat.value}
            </h2>

            <div>
              <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
              <p className="text-sm leading-relaxed">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Abtcard;
