import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";

export default function ProductCard({
  id,
  category,
  name,
  originalPrice,
  currentPrice,
  price,
  oldPrice,
  image,
}) {
    const toggleWishlist = (id) => {
        setWishlist((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    const [wishlist, setWishlist] = useState({});
  return (
    <article
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      itemScope
      itemType="https://schema.org/Product"
    >
      <Link href={`/product-details/${id}`}>
      <img
        src={image}
        alt={name}
        
        loading="lazy"
        className="w-full cursor-pointer h-56 object-cover bg-amber-50 transition-transform duration-500 hover:scale-105"
        itemProp="image"
      />
      </Link>
      <div className="p-4">
        <p
          className="text-[11px] uppercase tracking-wide text-amber-700 font-medium mb-1"
          itemProp="category"
        >
          {category}
        </p>
        <h3
          className="text-base font-semibold text-gray-900 mb-2 line-clamp-2"
          itemProp="name"
        >
          {name}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-gray-400 line-through" itemProp="price">
            ₹{originalPrice || oldPrice}
          </span>
          <span className="text-lg font-bold text-amber-600" itemProp="discount price">
            ₹{currentPrice || price}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            onClick={() => toggleWishlist(id)}
            aria-label="Add to wishlist"
            className="w-9 h-9 rounded-full border border-gray-300 hover:border-amber-500 hover:text-amber-500 flex items-center justify-center transition-all"
          >
            <Heart
              size={16}
              fill={wishlist[id] ? "currentColor" : "none"}
              className={wishlist[id] ? "text-amber-500" : ""}
            />
          </Button>
          <Button className="flex-1 bg-gradient-to-r from-amber-800 to-amber-700 text-white py-2 rounded text-xs font-semibold uppercase hover:scale-105 transition-all flex items-center justify-center gap-1.5">
            <ShoppingCart size={14} /> Add
          </Button>
        </div>
      </div>
    </article>
  );
}
