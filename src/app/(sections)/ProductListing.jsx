"use client";
import { useState } from "react";
import { SlidersHorizontal, X, Heart } from "lucide-react";

export const metadata = {
  title: "Jewellery Collection | Jewellery Walla",
  description: "Explore elegant rings, necklaces, earrings, and bracelets at Jewellery Walla.",
};

export default function ProductListing() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("newest");
  const [priceRange, setPriceRange] = useState([100, 1000]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);

  const products = [
    { id: 1, name: "Diamond Ring", price: 1200, category: "Ring", material: "Gold", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400" },
    { id: 2, name: "Gold Necklace", price: 850, category: "Necklace", material: "Gold", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400" },
    { id: 3, name: "Silver Earrings", price: 250, category: "Earrings", material: "Silver", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400" },
    { id: 4, name: "Platinum Bracelet", price: 2500, category: "Bracelet", material: "Platinum", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400" },
    { id: 5, name: "Modern Ring", price: 780, category: "Ring", material: "Gold", image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400" },
    { id: 6, name: "Silver Chain", price: 320, category: "Bracelet", material: "Silver", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400" },
  ];

  const typeFilters = ["Rings", "Necklaces", "Earrings", "Bracelets"];
  const materialFilters = ["Gold", "Silver", "Platinum"];

  const toggleType = (type) =>
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );

  const toggleMaterial = (mat) =>
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Type Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Type</h3>
        {typeFilters.map((t) => (
          <label
            key={t}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={selectedTypes.includes(t)}
              onChange={() => toggleType(t)}
              className="accent-amber-600 w-4 h-4"
            />
            <span className="text-gray-700 group-hover:text-amber-700 transition">
              {t}
            </span>
          </label>
        ))}
      </div>

      {/* Material Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Material</h3>
        {materialFilters.map((m) => (
          <label
            key={m}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={selectedMaterials.includes(m)}
              onChange={() => toggleMaterial(m)}
              className="accent-amber-600 w-4 h-4"
            />
            <span className="text-gray-700 group-hover:text-amber-700 transition">
              {m}
            </span>
          </label>
        ))}
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Price</h3>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            min="0"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
            className="w-20 border rounded px-2 py-1"
          />
          <span>-</span>
          <input
            type="number"
            min="0"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
            className="w-20 border rounded px-2 py-1"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 md:py-10">
      <div className="max-w-7xl mx-auto flex gap-6">
        {/* Sidebar (Desktop) */}
        <aside className="hidden lg:block w-64 bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Filters</h2>
          <FilterPanel />
        </aside>

        {/* Main Section */}
        <main className="flex-1">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-sm md:text-3xl font-bold text-gray-800">
                All Jewellery
              </h1>
              <p className="text-gray-600 text-sm">{products.length} products</p>
            </div>

            {/* Sort + Filter Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-100 transition"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="newest">Sort: Newest</option>
                <option value="low">Price: Low → High</option>
                <option value="high">Price: High → Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition duration-300"
              >
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-amber-50 transition">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-amber-600 transition">
                    {p.name}
                  </h3>
                  <p className="text-gray-500">{p.category}</p>
                  <p className="text-amber-700 font-bold mt-1">${p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Mobile Filter Offcanvas */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isFilterOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsFilterOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 p-6 transform transition-transform duration-300 ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-4 border-b pb-3">
          <h2 className="text-xl font-bold text-gray-800">Filters</h2>
          <button
            onClick={() => setIsFilterOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <FilterPanel />
        <button
          onClick={() => setIsFilterOpen(false)}
          className="w-full mt-6 bg-gradient-to-r from-amber-600 to-yellow-500 text-white py-3 rounded-md hover:from-amber-700 hover:to-yellow-600 transition"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
