"use client";
import { useState } from "react";
import { SlidersHorizontal, X, Heart, ShoppingCart } from "lucide-react";

export const metadata = {
  title: "Jewellery Collection | Jewellery Walla",
  description: "Explore elegant rings, necklaces, earrings, and bracelets at Jewellery Walla.",
};

export default function ProductListing() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("newest");

  const products = [
    {
      id: 1,
      name: "Diamond Ring",
      category: "Ring",
      material: "Gold",
      price: 1200,
      oldPrice: 1500,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
    },
    {
      id: 2,
      name: "Gold Necklace",
      category: "Necklace",
      material: "Gold",
      price: 850,
      oldPrice: 999,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
    },
    {
      id: 3,
      name: "Silver Earrings",
      category: "Earrings",
      material: "Silver",
      price: 250,
      oldPrice: 349,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
    },
    {
      id: 4,
      name: "Platinum Bracelet",
      category: "Bracelet",
      material: "Platinum",
      price: 2500,
      oldPrice: 2800,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
    },
    {
      id: 5,
      name: "Modern Ring",
      category: "Ring",
      material: "Gold",
      price: 780,
      oldPrice: 999,
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400",
    },
    {
      id: 6,
      name: "Silver Chain",
      category: "Bracelet",
      material: "Silver",
      price: 320,
      oldPrice: 499,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400",
    },
  ];

  return (
    <div className="bg-[#f8f8f8] min-h-screen py-10 px-4">
      <div className="max-w-[1300px] mx-auto flex gap-8">
        {/* Sidebar (Desktop) */}
        <aside className="hidden lg:block w-64 bg-white rounded-2xl p-6 shadow-md h-fit sticky top-24">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">
            Filters
          </h2>

          <div className="space-y-6 text-[15px]">
            <div>
              <h3 className="font-semibold mb-3 text-gray-800">Type</h3>
              {["Rings", "Necklaces", "Earrings", "Bracelets"].map((type) => (
                <label
                  key={type}
                  className="flex items-center space-x-2 mb-2 cursor-pointer hover:text-amber-600 transition"
                >
                  <input type="checkbox" className="accent-amber-600" />
                  <span>{type}</span>
                </label>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-gray-800">Material</h3>
              {["Gold", "Silver", "Platinum"].map((mat) => (
                <label
                  key={mat}
                  className="flex items-center space-x-2 mb-2 cursor-pointer hover:text-amber-600 transition"
                >
                  <input type="checkbox" className="accent-amber-600" />
                  <span>{mat}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Section */}
        <main className="flex-1">
          {/* Top bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-3">
            <div>
              <h1 className="text-2xl font-serif text-[#8B4513]">All Jewellery</h1>
              <p className="text-gray-500 text-sm">{products.length} products</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-100 transition text-sm"
              >
                <SlidersHorizontal size={16} /> Filters
              </button>

              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
              >
                <option value="newest">Sort: Newest</option>
                <option value="low">Price: Low → High</option>
                <option value="high">Price: High → Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-7 px-2 sm:px-0">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-40 sm:h-56 md:h-60 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-amber-100 transition">
                    <Heart size={18} className="text-gray-700" />
                  </button>
                </div>

                <div className="p-4 text-left">
                  <h3 className="text-gray-800 font-semibold text-[14px] sm:text-[16px] mb-1 group-hover:text-[#8B4513] transition line-clamp-2 h-10 sm:h-auto">
                    {p.name}
                  </h3>
                  <p className="text-gray-500 text-[12px] sm:text-[14px] mb-1 sm:mb-2">{p.category}</p>
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                    <span className="text-[#FF6F00] font-semibold text-[14px] sm:text-[16px]">
                      ₹{p.price}
                    </span>
                    <span className="text-gray-400 line-through text-[11px] sm:text-[14px]">
                      ₹{p.oldPrice}
                    </span>
                  </div>

                  <button className="flex items-center justify-center gap-1 sm:gap-2 bg-[#8B4513] hover:bg-[#a05d2b] text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[12px] sm:text-[14px] w-full transition">
                    <ShoppingCart size={12} className="sm:size-[15px]" /> <span className="whitespace-nowrap">ADD</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${isFilterOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsFilterOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 p-6 transform transition-transform duration-300 ${isFilterOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between mb-4 border-b pb-3">
          <h2 className="text-xl font-bold text-gray-800">Filters</h2>
          <button
            onClick={() => setIsFilterOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={18} className="text-gray-600" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Type</h3>
            {["Rings", "Necklaces", "Earrings", "Bracelets"].map((type) => (
              <label
                key={type}
                className="flex items-center space-x-2 mb-2 cursor-pointer hover:text-amber-600"
              >
                <input type="checkbox" className="accent-amber-600" />
                <span>{type}</span>
              </label>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-3">Material</h3>
            {["Gold", "Silver", "Platinum"].map((mat) => (
              <label
                key={mat}
                className="flex items-center space-x-2 mb-2 cursor-pointer hover:text-amber-600"
              >
                <input type="checkbox" className="accent-amber-600" />
                <span>{mat}</span>
              </label>
            ))}
          </div>

          <button
            onClick={() => setIsFilterOpen(false)}
            className="w-full mt-6 bg-gradient-to-r from-amber-600 to-yellow-500 text-white py-3 rounded-md hover:from-amber-700 hover:to-yellow-600 transition"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
