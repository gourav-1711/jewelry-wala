"use client";
import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/comman/ProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { openSidebar, toggleSidebar } from "@/redux/features/uiSlice";
import { useDispatch } from "react-redux";

export default function ProductListing({ data }) {
  const searchParams = useSearchParams();
  const [selectedSort, setSelectedSort] = useState("newest");

  // All products data
  const allProducts = [
    {
      id: 1,
      name: "Diamond Ring",
      category: "Ring",
      color: "Gold",
      material: "Diamond",
      price: 1200,
      oldPrice: 1500,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
    },
    {
      id: 2,
      name: "Gold Necklace",
      category: "Necklace",
      color: "Gold",
      material: "Gold",
      price: 850,
      oldPrice: 999,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
    },
    {
      id: 3,
      name: "Silver Earrings",
      category: "Earrings",
      color: "Silver",
      material: "Silver",
      price: 250,
      oldPrice: 349,
      image:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
    },
    {
      id: 4,
      name: "Platinum Bracelet",
      category: "Bracelet",
      color: "Platinum",
      material: "Platinum",
      price: 2500,
      oldPrice: 2800,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
    },
    {
      id: 5,
      name: "Modern Ring",
      category: "Ring",
      color: "Rose Gold",
      material: "Gold",
      price: 780,
      oldPrice: 999,
      image:
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400",
    },
    {
      id: 6,
      name: "Silver Chain",
      category: "Bracelet",
      color: "Silver",
      material: "Silver",
      price: 320,
      oldPrice: 499,
      image:
        "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400",
    },
    {
      id: 7,
      name: "White Gold Pendant",
      category: "Pendant",
      color: "White Gold",
      material: "Gold",
      price: 650,
      oldPrice: 850,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400",
    },
    {
      id: 8,
      name: "Gold Bangles",
      category: "Bangles",
      color: "Gold",
      material: "Gold",
      price: 1500,
      oldPrice: 1800,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
    },
  ];

  // Filter products based on URL params
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Category filter
    const categoryFilter = searchParams
      .get("category")
      ?.split(",")
      .filter(Boolean);
    if (categoryFilter && categoryFilter.length > 0) {
      filtered = filtered.filter((p) => categoryFilter.includes(p.category));
    }

    // Color filter
    const colorFilter = searchParams.get("color")?.split(",").filter(Boolean);
    if (colorFilter && colorFilter.length > 0) {
      filtered = filtered.filter((p) => colorFilter.includes(p.color));
    }

    // Material filter
    const materialFilter = searchParams
      .get("material")
      ?.split(",")
      .filter(Boolean);
    if (materialFilter && materialFilter.length > 0) {
      filtered = filtered.filter((p) => materialFilter.includes(p.material));
    }

    // Price range filter
    const priceFrom = parseInt(searchParams.get("priceFrom") || "0");
    const priceTo = parseInt(searchParams.get("priceTo") || "5000");
    filtered = filtered.filter(
      (p) => p.price >= priceFrom && p.price <= priceTo
    );

    // Sort products
    if (selectedSort === "low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [searchParams, selectedSort, allProducts]);

  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(openSidebar());
  };

  return (
    <div>
      {/* Top bar */}
      <div className="lg:flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-3">
        <div>
          <h1 className="text-2xl font-serif text-[#8B4513]">All Jewellery</h1>
          <p className="text-gray-500 text-sm">
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className={"block lg:hidden"}
            onClick={toggle}
          >
            Filter
          </Button>
          <Select value={selectedSort} onValueChange={setSelectedSort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Sort: Newest</SelectItem>
              <SelectItem value="low">Price: Low → High</SelectItem>
              <SelectItem value="high">Price: High → Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className=" grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-7 px-2 sm:px-0">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">
            No products found matching your filters.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Try adjusting your filter criteria.
          </p>
        </div>
      )}
    </div>
  );
}
