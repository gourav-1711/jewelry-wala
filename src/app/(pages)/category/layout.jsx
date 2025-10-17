// src/app/(pages)/product-layout/layout.jsx
"use client";

import FilterSidebar from "./FilterSidebar";
import { useState } from "react";
export default function ProductLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  gap-8 py-8">
          <div className="">
            <FilterSidebar isOpen={isOpen} onClose={onClose} />
          </div>
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
