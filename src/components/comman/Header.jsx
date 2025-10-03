"use client";
import { useState } from "react";
import { FaHeart, FaShoppingBag, FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = [
    "Necklace Set",
    "Earrings",
    "Bangles",
    "Chain Pendant",
    "Finger Ring",
    "Hand Bag",
    "Men's Bracelet",
    "Juda",
    "Saree Pin",
    "Hathpans",
  ];

  return (
    <>
      {/* Top Bar - Not Sticky */}
      <div className="text-center lg:text-[14px] md:text-[12px] bg-gray-600 text-white text-sm py-1">
        Free shipping on orders of 6 items or more
      </div>

      {/* Main Header - Sticky */}
      <header className="border-b bg-white shadow-sm sticky top-0 z-50">
        {/* Main Header */}
        <div className="flex items-center justify-between px-4 md:px-6 py-4">
          {/* Mobile Burger Menu */}
          <div className="md:hidden">
            <FaBars 
              size={24} 
              className="cursor-pointer hover:text-yellow-700 transition-colors"
              onClick={() => setIsOffcanvasOpen(true)}
            />
          </div>

          {/* Logo */}
          <h1
            className="text-2xl md:text-3xl font-[mono] font-bold"
            style={{ color: "#D4AF37" }}
          >
            Jewellery Wala
          </h1>

          {/* Search - Desktop */}
          <div className="flex-1 px-6 hidden md:block">
            <div className="relative w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search for products"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-3 md:space-x-5">
            <FaHeart size={20} className="hidden md:block cursor-pointer hover:text-yellow-700 transition-colors" />
            <FaShoppingBag 
              size={20} 
              className="hidden md:block cursor-pointer hover:text-yellow-700 transition-colors"
            />
            <FaSearch 
              size={20} 
              className="cursor-pointer hover:text-yellow-700 transition-colors lg:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            <FaUser size={20} className="cursor-pointer hover:text-yellow-700 transition-colors" />
          </div>
        </div>

        {/* Mobile Search Dropdown */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isSearchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 lg:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products"
                className="w-full border rounded-md px-4 py-2 my-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              <FaSearch className="absolute right-3 top-5 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Categories - Desktop */}
        <nav className="hidden md:flex justify-center space-x-6 py-2 font-medium text-sm overflow-x-auto">
          {categories.map((cat, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="relative hover:text-yellow-700 transition-colors whitespace-nowrap pb-1 group"
            >
              {cat}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-700 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </nav>
      </header>

      {/* Backdrop Overlay with Blur */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOffcanvasOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOffcanvasOpen(false)}
      />

      {/* Left Side Offcanvas */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${
          isOffcanvasOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Offcanvas Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold" style={{ color: "#D4AF37" }}>
            Menu
          </h2>
          <FaTimes
            size={24}
            className="cursor-pointer hover:text-yellow-700 transition-colors"
            onClick={() => setIsOffcanvasOpen(false)}
          />
        </div>

        {/* Categories - Mobile */}
        <nav className="p-4 overflow-y-auto h-[calc(100vh-180px)]">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Categories</h3>
          <div className="space-y-1">
            {categories.map((cat, idx) => (
              <a
                key={idx}
                href="#"
                className="block py-3 px-4 text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 rounded-md transition-all duration-200"
                onClick={() => setIsOffcanvasOpen(false)}
              >
                {cat}
              </a>
            ))}
          </div>
        </nav>

        {/* Offcanvas Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-gray-50">
          <div className="flex justify-around">
            <FaHeart size={22} className="cursor-pointer hover:text-yellow-700 transition-colors" />
            <FaShoppingBag size={22} className="cursor-pointer hover:text-yellow-700 transition-colors" />
            <FaUser size={22} className="cursor-pointer hover:text-yellow-700 transition-colors" />
          </div>
        </div>
      </div>
    </>
  );
}
