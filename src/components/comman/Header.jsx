"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaHeart,
  FaShoppingBag,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

export default function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 250);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOffcanvasOpen ? "hidden" : "auto";
  }, [isOffcanvasOpen]);

  const categories = [
    { name: "Home", href: "/" },
    { name: "Shop By Category", href: "#" },
    { name: "New Arrivals", href: "/product-listing" },
    { name: "Gift Items", href: "/gift-items" },
    { name: "Track Your Order", href: "/order-track" },
    { name: "Sale", href: "/sale" },
    { name: "Contact Us", href: "/contact" },
  ];

  const megaCategories = [
    {
      title: "Necklaces",
      items: ["Gold", "Diamond", "Silver", "Pearl", "Choker", "Pendant"],
    },
    {
      title: "Earrings",
      items: ["Stud", "Hoops", "Jhumka", "Drop", "Danglers"],
    },
    {
      title: "Rings",
      items: ["Gold Rings", "Silver Rings", "Diamond Rings", "Engagement"],
    },
    {
      title: "Bracelets",
      items: ["Bangles", "Kada", "Chain", "Cuff"],
    },
    {
      title: "Bridal",
      items: ["Sets", "Maang Tikka", "Nath", "Payal"],
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div
        className={`text-center bg-gray-600 text-white text-sm py-1 transition-all duration-300 ${isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
          }`}
      >
        Free Shipping above ₹2000 | Welcome to Jewellery Wala
      </div>

      {/* Header */}
      <header className="border-b bg-white shadow-sm sticky top-0 z-50">
        <div
          className={`flex items-center justify-between px-4 md:px-6 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"
            }`}
        >
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <FaBars
              size={24}
              className="cursor-pointer hover:text-yellow-700"
              onClick={() => setIsOffcanvasOpen(true)}
            />
          </div>

          {/* Logo */}
          <Link href="/">
            <h1
              className={`font-[cursive] font-bold transition-all duration-300 cursor-pointer ${isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
                }`}
              style={{ color: "#D4AF37" }}
            >
              Jewellery Wala
            </h1>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:block flex-1 px-6">
            <div className="relative w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search for products"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3 md:space-x-5">
            <FaHeart size={20} className="hidden md:block cursor-pointer hover:text-yellow-700" />
            <Link href={"/cart"}><FaShoppingBag size={20} className="hidden md:block cursor-pointer hover:text-yellow-700" /></Link>
            <FaSearch
              size={20}
              className="cursor-pointer hover:text-yellow-700 lg:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
            <Link href="/login">
              <FaUser size={20} className="cursor-pointer hover:text-yellow-700" />
            </Link>
          </div>
        </div>

        {/* Mobile Search */}
        <div
          className={`overflow-hidden transition-all duration-300 ${isSearchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-4 pb-4 lg:hidden">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Desktop Categories */}
        <nav
          className={`hidden md:flex justify-center font-medium space-x-6 text-sm transition-all duration-300 ${isScrolled ? "opacity-0 h-0" : "opacity-100 py-2"
            }`}
        >
          {categories.map((cat, idx) => (
            <div key={idx} className="relative group">
              {cat.name === "Shop By Category" ? (
                <button
                  onMouseEnter={() => setShowMegaMenu(true)}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowMegaMenu((prev) => !prev);
                  }}
                  className={`relative hover:text-yellow-700 transition-colors text-[15px] font-serif whitespace-nowrap pb-1 ${cat.name === "Shop By Category" ? "text-gray-700" : "text-gray-600"
                    }`}
                >
                  {cat.name}
                  <FaChevronDown className="inline ml-1 text-xs" />
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-700 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
                </button>
              ) : (
                <Link
                  href={cat.href}
                  className="relative hover:text-yellow-700 transition-colors text-[15px] font-serif whitespace-nowrap pb-1 text-gray-600"
                >
                  {cat.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-700 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
                </Link>
              )}

              {/* Mega Menu */}
              {cat.name === "Shop By Category" && showMegaMenu && (
                <div
                  onMouseEnter={() => setShowMegaMenu(true)}
                  onMouseLeave={() => setShowMegaMenu(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-full w-[900px] bg-white shadow-2xl rounded-lg p-6 mt-4 grid grid-cols-5 gap-6 backdrop-blur-sm border border-gray-100 animate-fadeIn"
                >
                  {megaCategories.map((menu, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-gray-800 mb-2 border-b pb-1">{menu.title}</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        {menu.items.map((item, j) => (
                          <li
                            key={j}
                            className="hover:text-yellow-700 cursor-pointer transition-colors"
                          >
                            <Link href={`/category/${item.toLowerCase().replace(/\s+/g, "-")}`}>
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </header>

      {/* Backdrop Blur when mega menu open */}
      {showMegaMenu && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setShowMegaMenu(false)}
        ></div>
      )}

      {/* Mobile Offcanvas */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOffcanvasOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsOffcanvasOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ${isOffcanvasOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold" style={{ color: "#D4AF37" }}>
            Menu
          </h2>
          <FaTimes
            size={22}
            className="cursor-pointer hover:text-yellow-700"
            onClick={() => setIsOffcanvasOpen(false)}
          />
        </div>

        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-100px)]">
          {categories.map((cat, idx) => (
            <div key={idx}>
              {cat.name === "Shop By Category" ? (
                <>
                  <button
                    className="w-full flex justify-between items-center py-2 px-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 rounded-md"
                    onClick={() => setMobileDropdownOpen((prev) => !prev)}
                  >
                    {cat.name}
                    <FaChevronDown
                      className={`transition-transform ${mobileDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen ? "max-h-80" : "max-h-0"
                      }`}
                  >
                    <ul className="pl-6 py-2 space-y-1 text-sm text-gray-600">
                      {megaCategories.map((menu) => (
                        <li key={menu.title} className="font-semibold">
                          {menu.title}
                          <ul className="pl-4 text-gray-500 text-[13px]">
                            {menu.items.map((sub) => (
                              <li key={sub} className="py-1 hover:text-yellow-700 cursor-pointer">
                                <Link
                                  href={`/category/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                                  onClick={() => setIsOffcanvasOpen(false)}
                                >
                                  {sub}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  href={cat.href}
                  className="block py-2 px-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 rounded-md"
                  onClick={() => setIsOffcanvasOpen(false)}
                >
                  {cat.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
