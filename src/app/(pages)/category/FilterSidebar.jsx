"use client";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import {
  toggleCategory,
  toggleColor,
  toggleMaterial,
  setPriceRange,
  resetFilters,
  setFiltersFromURL,
  selectFilters,
} from "@/redux/features/filters";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { closeSidebar } from "@/redux/features/uiSlice";

export default function FilterSidebar() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const debounceTimerRef = useRef(null);


  const isOpen = useSelector((state)=> state.ui.isSidebarOpen);
  const onClose = () => {
    dispatch(closeSidebar())
  };

  const materials = ["Gold", "Silver", "Platinum", "Diamond"];
  const colors = [
    "Gold",
    "Silver",
    "Bronze",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Black",
    "White",
  ];
  const categories = [
    "Ring",
    "Necklace",
    "Earrings",
    "Bracelet",
    "Bangles",
    "Pendant",
  ];

  // Local state for price slider
  const [localPrice, setLocalPrice] = useState({
    priceFrom: filters.priceFrom || 0,
    priceTo: filters.priceTo || 100000,
  });

  const handleCheckboxChange = (type, value) => {
    if (type === "category") {
      dispatch(toggleCategory(value));
    } else if (type === "color") {
      dispatch(toggleColor(value));
    } else if (type === "material") {
      dispatch(toggleMaterial(value));
    }
  };

  const handlePriceChange = (value) => {
    setLocalPrice({ priceFrom: value[0], priceTo: value[1] });
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      dispatch(setPriceRange(value));
    }, 500);
  };

  const applyPriceFilter = () => {
    dispatch(setPriceRange([localPrice.priceFrom, localPrice.priceTo]));
  };

  const clearFilters = () => {
    dispatch(resetFilters());
    setLocalPrice({ priceFrom: 0, priceTo: 100000 });
  };

  useEffect(() => {
    dispatch(setFiltersFromURL(searchParams));
  }, [searchParams]);

  // Close on overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: linear-gradient(to bottom, #fef3c7, #fde68a);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #d97706, #f59e0b, #fbbf24);
          border-radius: 10px;
          border: 2px solid #fef3c7;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #b45309, #d97706, #f59e0b);
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #f59e0b #fef3c7;
        }
      `}</style>

      {/* Mobile Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleOverlayClick}
      />

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-80 bg-white shadow-xl lg:shadow-none
          flex flex-col h-full
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Header */}
        <div className="border-b p-4 ">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-amber-900">Filters</h2>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-amber-100"
              onClick={onClose}
            >
              <X className="h-5 w-5 text-amber-700" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
          {/* Category Filter */}
          <div className="space-y-3">
            <Label className="text-base font-semibold text-amber-900">
              Category
            </Label>
            <div className="space-y-2">
              {categories.map((category) => (
                <Label
                  key={category}
                  className="flex items-center space-x-2 cursor-pointer hover:text-amber-600 transition-colors duration-200"
                >
                  <Input
                    type="checkbox"
                    checked={filters.category.includes(category)}
                    onChange={() => handleCheckboxChange("category", category)}
                    className="w-4 h-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-600"
                  />
                  <span className="text-sm">{category}</span>
                </Label>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className="space-y-3">
            <Label className="text-base font-semibold text-amber-900">
              Color
            </Label>
            <div className="space-y-2">
              {colors.map((color) => (
                <Label
                  key={color}
                  className="flex items-center space-x-2 cursor-pointer hover:text-amber-600 transition-colors duration-200"
                >
                  <Input
                    type="checkbox"
                    checked={filters.color.includes(color)}
                    onChange={() => handleCheckboxChange("color", color)}
                    className="w-4 h-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-600"
                  />
                  <span className="text-sm">{color}</span>
                </Label>
              ))}
            </div>
          </div>

          {/* Material Filter */}
          <div className="space-y-3">
            <Label className="text-base font-semibold text-amber-900">
              Material
            </Label>
            <div className="space-y-2">
              {materials.map((material) => (
                <Label
                  key={material}
                  className="flex items-center space-x-2 cursor-pointer hover:text-amber-600 transition-colors duration-200"
                >
                  <Input
                    type="checkbox"
                    checked={filters.material.includes(material)}
                    onChange={() => handleCheckboxChange("material", material)}
                    className="w-4 h-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500 cursor-pointer accent-amber-600"
                  />
                  <span className="text-sm">{material}</span>
                </Label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-3 pb-4">
            <Label className="text-base font-semibold text-amber-900">
              Price Range
            </Label>
            <div className="px-2">
              <Slider
                min={0}
                max={100000}
                step={1000}
                value={[localPrice.priceFrom, localPrice.priceTo]}
                onValueChange={handlePriceChange}
                className="w-full"
              />
              <div className="flex justify-between mt-3 text-sm font-medium text-amber-700">
                <span className="bg-amber-50 px-2 py-1 rounded">
                  ${localPrice.priceFrom.toLocaleString()}
                </span>
                <span className="bg-amber-50 px-2 py-1 rounded">
                  ${localPrice.priceTo.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pb-4">
            <Button
              onClick={applyPriceFilter}
              className="w-full bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              Apply Filters
            </Button>
            <Button
              onClick={clearFilters}
              variant="outline"
              className="w-full border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400 transition-all duration-200"
            >
              Clear All
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
