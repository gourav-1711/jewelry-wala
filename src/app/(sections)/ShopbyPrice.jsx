"use client";
import { FaRupeeSign, FaStar, FaGift, FaHeart } from 'react-icons/fa';

const ShopByPrice = () => {
  const priceCategories = [
    { icon: <FaRupeeSign size={30} />, label: 'Under ₹599' },
    { icon: <FaStar size={30} />, label: '₹600 - ₹999' },
    { icon: <FaGift size={30} />, label: '₹1000 - ₹1999' },
    { icon: <FaHeart size={30} />, label: '₹2000 & Above' },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-serif text-slate-800 mb-3 tracking-wide">
            Shop by Price
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full"></div>
        </div>

        {/* Price Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2">
          {priceCategories.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer
                         border border-slate-200 hover:border-slate-300 overflow-hidden hover:-translate-y-1 p-4 flex flex-col items-center justify-center min-h-[140px]"
            >
              <div className="text-slate-700 mb-2 group-hover:text-slate-900 transition-all duration-300">
                {item.icon}
              </div>
              <p className="text-base font-semibold text-slate-800 group-hover:text-slate-900 text-center">
                {item.label}
              </p>
              <div className="mt-2 w-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full
                            group-hover:w-12 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Decorative bottom border */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mt-6"></div>
      </div>
    </div>
  );
};

export default ShopByPrice;
