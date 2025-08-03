import { Blacklogo } from "../utils/utils";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-4 rounded-t-3xl px-12">
         <img src= {Blacklogo} alt="VayuClean Logo" className="max-w-7xl w-40 mb-8" />
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 mb-6">
        
        {/* Empty Logo Space + Quick Links below */}
        <div>
          {/* Empty div to reserve space for logo */}
          <div className="w-40"></div>

          {/* Quick Links below the empty space */}
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1 text-md text-white">
  <li className="hover:text-primary cursor-pointer">Home</li>
  <li className="hover:text-primary cursor-pointer">About Us</li>
  <li className="hover:text-primary cursor-pointer">Our Products</li>
  <li className="hover:text-primary cursor-pointer">Industries We Serve</li>
  <li className="hover:text-primary cursor-pointer">Testimonials</li>
  <li className="hover:text-primary cursor-pointer">Contact Us</li>
</ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Products</h4>
          <ul className="space-y-1 text-md text-white">
            <li className="hover:text-primary cursor-pointer">Tablet Compression Machines</li>
            <li className="hover:text-primary cursor-pointer">Capsule Filling Machines</li>
            <li className="hover:text-primary cursor-pointer">Packaging & Blistering Machines</li>
            <li className="hover:text-primary cursor-pointer">Pharmaceutical Manufacturing Solutions</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Information</h4>
          <ul className="space-y-1 text-md text-white">
            <li className="hover:text-primary cursor-pointer">Plot No. XX, Pharma Industrial Area, City, State, ZIP, Country</li>
            <li>
  <a href="tel:+1234567890" className="hover:text-primary">
    +1-234-567-890
  </a>
</li>
<li>
  <a href="mailto:info@vayuclean.com" className="hover:text-primary">
    info@vayuclean.com
  </a>
</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 text-sm text-gray-300">
        <p>© 2025 VayuClean Technologies. All rights reserved.</p>
        <div className="space-x-3 mt-2 md:mt-0">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-primary">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
