import { VayuLogo } from "../utils/utils";

const Header = () => {
  return (
    <nav className="bg-white shadow-md py-2 px-6 flex items-center justify-between fixed w-full top-0 z-50">
      <div className="flex items-center">
        <img src= {VayuLogo} alt="VayuClean Logo" className="h-14 mr-2" />
      </div>
      <div className="hidden md:flex gap-6 text-gray-800 font-medium">
        <a href="#home" className="hover:text-blue-500">Home</a>
        <a href="#products" className="hover:text-blue-500">Products</a>
        <a href="#contact" className="hover:text-blue-500">Contact Us</a>
        <a href="#about" className="hover:text-blue-500">About Us</a>
      </div>
      <button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold">
        Get Quote
      </button>
    </nav>
  );
};

export default Header;
