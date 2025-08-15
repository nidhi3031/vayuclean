import Section from "./Section";

import { Blacklogo, LogoTwo, NavLinks } from "../utils/utils";
import { categories } from "../utils/products";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white rounded-t-3xl">
      <Section>
        <img
          src={Blacklogo}
          alt="VayuClean Logo"
          className="max-w-7xl w-40 mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-6">
          <div>
            <div className="w-40"></div>

            {/* Quick Links below the empty space */}
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-1 text-md text-white">
              {NavLinks.map((link, index) => (
                <li key={index} className="hover:text-primary cursor-pointer">
                  <Link to={link.path}> {link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Product Categories</h4>
            <ul className="space-y-1 text-md text-white">
              {categories.map((item, index) => (
                <li key={index} className="hover:text-primary cursor-pointer">
                  <Link to={`category/${item.slug}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Information</h4>
            <ul className="space-y-1 text-md text-white">
              <li className="hover:text-primary cursor-pointer">
                Plot No. XX, Pharma Industrial Area, City, State, ZIP, Country
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-primary">
                  +1-234-567-890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@vayuclean.com"
                  className="hover:text-primary"
                >
                  info@vayuclean.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="border-t border-[#ffffff2c] flex flex-col md:flex-row justify-between  w-full px-4 md:px-5 py-6 text-sm text-gray-300">
        <p>© 2025 VayuClean Technologies. All rights reserved.</p>
        <div className="space-x-3 mt-2 md:mt-0">
          <a href="#" className="hover:text-primary">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-primary">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
