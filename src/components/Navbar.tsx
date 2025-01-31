import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-10 py-4 relative z-50">
        <div className="flex items-center gap-2">
          <img src="https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/659f6c11eb69d1510ba12158_Dashboard%20Logo.png" alt="Relume Logo" width={100} height={100} />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600">Products</a>
            <a href="#" className="hover:text-gray-600">Community</a>
            <a href="#" className="hover:text-gray-600">Pricing</a>
            <a href="#" className="hover:text-gray-600">Learn</a>
            <a href="#" className="hover:text-gray-600">Contact Sales</a>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden absolute top-0 left-0 right-0 bg-white min-h-screen p-10 flex-col gap-8`}>
          <div className="flex flex-col gap-8 mt-20 text-2xl">
            <a href="#" className="hover:text-gray-600">Products</a>
            <a href="#" className="hover:text-gray-600">Community</a>
            <a href="#" className="hover:text-gray-600">Pricing</a>
            <a href="#" className="hover:text-gray-600">Learn</a>
            <a href="#" className="hover:text-gray-600">Contact Sales</a>
          </div>
          <div className="flex flex-col gap-4 mt-auto">
            <button className="hover:text-gray-600 text-xl">Log in</button>
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 text-xl">
              Start for free
            </button>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="hover:text-gray-600">Log in</button>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            Start for free
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
