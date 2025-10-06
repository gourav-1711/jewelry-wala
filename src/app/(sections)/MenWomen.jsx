"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function GenderCategorySection() {
  const [active, setActive] = useState("men");

  const products = {
    men: [
      { id: 1, name: "Men’s T-Shirt", image: "/images/men1.jpg" },
      { id: 2, name: "Formal Shirt", image: "/images/men2.jpg" },
      { id: 3, name: "Leather Jacket", image: "/images/men3.jpg" },
      { id: 4, name: "Sneakers", image: "/images/men4.jpg" },
    ],
    women: [
      { id: 1, name: "Women’s Dress", image: "/images/women1.jpg" },
      { id: 2, name: "Heels", image: "/images/women2.jpg" },
      { id: 3, name: "Handbag", image: "/images/women3.jpg" },
      { id: 4, name: "Earrings", image: "/images/women4.jpg" },
    ],
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <div className="w-full bg-gray-50 py-12">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-6xl mx-auto px-6">
        {/* Men */}
        <div
          onClick={() => setActive("men")}
          className={`relative w-full md:w-1/2 h-[350px] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 ${
            active === "men" ? "ring-4 ring-[rgb(192,149,120)]" : ""
          }`}
        >
          <Image
            src="/images/men-banner.jpg"
            alt="Men"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl font-bold tracking-wide">MEN</h2>
            <p className="mt-2 text-sm uppercase">Shop the Collection</p>
          </div>
        </div>

        {/* Women */}
        <div
          onClick={() => setActive("women")}
          className={`relative w-full md:w-1/2 h-[350px] rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 ${
            active === "women" ? "ring-4 ring-[rgb(192,149,120)]" : ""
          }`}
        >
          <Image
            src="/images/women-banner.jpg"
            alt="Women"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex flex-col justify-center items-center text-white">
            <h2 className="text-4xl font-bold tracking-wide">WOMEN</h2>
            <p className="mt-2 text-sm uppercase">Discover the Trend</p>
          </div>
        </div>
      </div>

    </div>
  );
}
