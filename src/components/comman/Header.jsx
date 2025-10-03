"use client";
import { FaUser, FaShoppingBag, FaInstagram, FaFacebook, FaYoutube, FaPinterest, FaSnapchat } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* 🔹 Top Line - Hidden on Mobile and on Scroll */}
      <div className={`hidden md:flex items-center justify-between bg-pink-100 px-6 py-1 text-sm text-gray-900 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <span className="text-center mx-auto text-[15px] font-medium tracking-wider">Welcome to our store</span>
      </div>

      {/* 🔹 Bottom Line - Sticky */}
      <div className={`px-4 md:px-6 py-3 border-t border-gray-200 bg-white transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : 'relative'}`}>
        <div className="flex items-center justify-between">
          {/* Left - Logo */}
          <div className="relative group">
            <span className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent tracking-wider drop-shadow-lg transform transition-all duration-300 group-hover:scale-105 font-serif">
              Jewellery
            </span>
            <span className="text-lg md:text-2xl font-light text-gray-600 ml-2 italic tracking-wider">
              Wala
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>

          {/* Center - Navbar - Desktop Only */}
          <nav className="hidden lg:flex items-center gap-8 text-gray-700">
            <Link href="#" className="text-sm font-medium italic tracking-wide hover:text-yellow-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-[width] after:duration-300 after:origin-left hover:after:w-full">Home</Link>
            <Link href="#" className="text-sm font-medium italic tracking-wide hover:text-yellow-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-[width] after:duration-300 after:origin-left hover:after:w-full">Category</Link>
            <Link href="#" className="text-sm font-medium italic tracking-wide hover:text-yellow-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-[width] after:duration-300 after:origin-left hover:after:w-full">New Arrival</Link>
            <Link href="#" className="text-sm font-medium italic tracking-wide hover:text-yellow-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-[width] after:duration-300 after:origin-left hover:after:w-full">Personalised Jewellery</Link>
            <Link href="#" className="text-sm font-medium italic tracking-wide hover:text-yellow-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-[width] after:duration-300 after:origin-left hover:after:w-full">Bestsellers</Link>
            <Link href="#" className="text-sm font-medium italic tracking-wide hover:text-yellow-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-600 after:transition-[width] after:duration-300 after:origin-left hover:after:w-full">Track Your Order</Link>
          </nav>

          {/* Right - Search + Icons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <FaUser className="text-xl text-gray-700 cursor-pointer hover:text-yellow-600" />
            <FaShoppingBag className="text-xl text-gray-700 cursor-pointer hover:text-yellow-600" />
          </div>

          {/* Mobile - Icons + Burger Menu */}
          <div className="flex md:hidden items-center gap-4">
            <FaUser className="text-lg text-gray-700 cursor-pointer hover:text-yellow-600 transition-colors" />
            <FaShoppingBag className="text-lg text-gray-700 cursor-pointer hover:text-yellow-600 transition-colors" />

            {/* Burger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 group"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out group-hover:bg-yellow-600 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out group-hover:bg-yellow-600 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out group-hover:bg-yellow-600 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar - Below Logo */}
        <div className="md:hidden mt-3">
          <div className="w-full overflow-hidden transition-all duration-500 ease-in-out transform origin-top">
            <input
              type="text"
              placeholder="Search jewellery..."
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 hover:shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-4 space-y-1">
            <a href="#" className="block py-3 text-base font-medium italic text-gray-700 hover:text-yellow-600 hover:pl-4 transition-all duration-200 border-b border-gray-100">Home</a>

            {/* Category with Submenu */}
            <div>
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="w-full flex items-center justify-between py-3 text-base font-medium italic text-gray-700 hover:text-yellow-600 transition-colors duration-200 border-b border-gray-100"
              >
                <span className={`transition-all duration-200 ${isCategoryOpen ? 'pl-4 text-yellow-600' : ''}`}>Category</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isCategoryOpen ? 'rotate-180 text-yellow-600' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Category Submenu */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isCategoryOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-6 py-2 space-y-2 bg-gray-50">
                  <div className="py-2">
                    <h4 className="text-sm font-bold text-yellow-600 mb-2">Men's Jewellery</h4>
                    <div className="space-y-1 pl-2">
                      <a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-yellow-600 hover:pl-2 transition-all duration-200">Rings</a>
                      <a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-yellow-600 hover:pl-2 transition-all duration-200">Bracelets</a>
                      <a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-yellow-600 hover:pl-2 transition-all duration-200">Chains</a>
                      <a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-yellow-600 hover:pl-2 transition-all duration-200">Pendants</a>
                    </div>
                  </div>
                  <div className="py-2 border-t border-gray-200">
                    <h4 className="text-sm font-bold text-yellow-600 mb-2">Women's Jewellery</h4>
                    <div className="space-y-1 pl-2">
                      <a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-yellow-600 hover:pl-2 transition-all duration-200">Rings</a>
                      <a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-yellow-600 hover:pl-2 transition-all duration-200">Necklaces</a>
                      <a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-yellow-600 hover:pl-2 transition-all duration-200">Earrings</a>
                      <a href="#" className="block py-1.5 text-sm text-gray-600 hover:text-yellow-600 hover:pl-2 transition-all duration-200">Bangles</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" className="block py-3 text-base font-medium italic text-gray-700 hover:text-yellow-600 hover:pl-4 transition-all duration-200 border-b border-gray-100">New Arrival</a>
            <a href="#" className="block py-3 text-base font-medium italic text-gray-700 hover:text-yellow-600 hover:pl-4 transition-all duration-200 border-b border-gray-100">Personalised Jewellery</a>
            <a href="#" className="block py-3 text-base font-medium italic text-gray-700 hover:text-yellow-600 hover:pl-4 transition-all duration-200 border-b border-gray-100">Bestsellers</a>
            <a href="#" className="block py-3 text-base font-medium italic text-gray-700 hover:text-yellow-600 hover:pl-4 transition-all duration-200 border-b border-gray-100">Track Your Order</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
