import { Menu } from "lucide-react"; // or any icon library
import { useState } from "react";
import { Link } from "react-router-dom";
import VayuLogo from "../assets/vayulogo.svg"; // adjust path as needed
import { LogoTwo, NavLinks } from "../utils/utils";
import PrimaryButton from "./PrimaryButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-2 px-6 flex items-center justify-between fixed w-full top-0 z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={VayuLogo} alt="VayuClean Logo" className="h-14 mr-2" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-gray-800 font-medium">
        {NavLinks.map((link, index) => (
          <Link to={link.path} key={index} className="hover:text-primary">
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Get Quote Button */}
      <div className="hidden md:block">
        <PrimaryButton to="/contact">Get Quote</PrimaryButton>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 gap-4 text-gray-800 font-medium md:hidden z-40">
          {NavLinks.map((link, index) => (
            <Link
              to={link.path}
              key={index}
              onClick={() => setIsOpen(false)}
              className="hover:text-primary"
            >
              {link.name}
            </Link>
          ))}

          <PrimaryButton to="/conatct">Get Quote</PrimaryButton>
        </div>
      )}
    </nav>
  );
};

export default Header;
