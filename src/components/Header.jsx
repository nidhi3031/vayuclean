import { Menu } from "lucide-react"; // or any icon library
import { useState } from "react";
import { Link } from "react-router-dom";
import VayuLogo from "../assets/vayulogo.svg"; // adjust path as needed

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-2 px-6 flex items-center justify-between fixed w-full top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={VayuLogo} alt="VayuClean Logo" className="h-14 mr-2" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-gray-800 font-medium">
        <Link to="/" className="hover:text-blue-500">Home</Link>
<Link to="/about" className="hover:text-blue-500">About Us</Link>
<Link to="/products" className="hover:text-blue-500">Products</Link>
<Link to="/contact" className="hover:text-blue-500">Contact Us</Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Get Quote Button */}
      <div className="hidden md:block">
        <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold">
          Get Quote
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 gap-4 text-gray-800 font-medium md:hidden z-40">
          <Link to="/" className="hover:text-blue-500">Home</Link>
<Link to="/about" className="hover:text-blue-500">About Us</Link>
<Link to="/products" className="hover:text-blue-500">Products</Link>
<Link to="/contact" className="hover:text-blue-500">Contact Us</Link>
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold w-[40%]">
            Get Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
