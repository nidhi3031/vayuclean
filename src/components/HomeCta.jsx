import { Mail, Phone } from 'lucide-react';
import { BgCta } from '../utils/utils';

const HomeCta = () => {
  return (
    <section
      className="relative bg-gray-50  px-6 md:px-12"
      style={{
  backgroundImage: `url(${BgCta})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right top',
  backgroundSize: 'contain',
}}
    >
        <div className="container px-20">
      {/* Background blur */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-transparent opacity-30
          rounded-full filter blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-8">
          Ready to discuss your pharmaceutical equipment needs? Share your contact details and our experts will reach out within 24 hours.
        </p>

        <form className="space-y-6 max-w-md">
          <div>
            <label className="block font-semibold mb-1" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="SACHIN TIWARI"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1" htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="1234@gamil.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex space-x-2">
            <div className="w-20">
              <label className="block font-semibold mb-1" htmlFor="country-code">Code</label>
              <input
                id="country-code"
                type="text"
                defaultValue="+91"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1" htmlFor="mobile">Mobile number</label>
              <input
                id="mobile"
                type="tel"
                placeholder="123456789"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-400 text-white font-semibold rounded-md px-6 py-2 hover:bg-blue-500 transition"
          >
            Submit
          </button>
        </form>

        <div className="flex space-x-12 mt-10 max-w-md">
          <div>
            <div className="flex items-center gap-1 text-blue-400 font-semibold mb-1">
              <Phone size={18} />
              <span>Phone no.</span>
            </div>
            <p>+91 123456789</p>
            <p>+91 123456789</p>
          </div>
          <div>
            <div className="flex items-center gap-1 text-blue-400 font-semibold mb-1">
              <Mail size={18} />
              <span>E-mail</span>
            </div>
            <p>Sachin.tiwari@vayumail.com</p>
            <p>Sachin.tiwari@vayumail.com</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HomeCta;
