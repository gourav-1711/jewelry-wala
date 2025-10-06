"use client";
import { FaRupeeSign, FaStar, FaGift, FaHeart } from 'react-icons/fa';

const ShopByPrice = () => {
  const priceCategories = [
    { icon: <FaRupeeSign size={40} />, label: 'Under ₹599' },
    { icon: <FaStar size={40} />, label: '₹600 - ₹999' },
    { icon: <FaGift size={40} />, label: '₹1000 - ₹1999' },
    { icon: <FaHeart size={40} />, label: '₹2000 & Above' },
  ];

  return (
    <div className="w-full px-4 py-8 bg-gradient-to-br from-pink-50 via-pink-25 to-purple-50  shadow-lg">
      <h2 className="text-3xl font-serif mb-8 text-center text-purple-800 relative">
        Shop by Price
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 text-center max-w-6xl mx-auto">
        {priceCategories.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-2xl
                       hover:shadow-2xl hover:-translate-y-2 hover:scale-105
                       transition-all duration-300 ease-in-out cursor-pointer
                       border-2 border-transparent hover:border-purple-200
                       hover:bg-gradient-to-br hover:from-purple-50 hover:to-white min-h-[160px]"
          >
            <div className="text-purple-600 mb-3 group-hover:text-purple-700
                          group-hover:scale-110 group-hover:rotate-3 transform transition-all duration-300">
              {item.icon}
            </div>
            <p className="text-lg font-semibold text-gray-800 group-hover:text-purple-900 transition-colors duration-300 leading-tight">
              {item.label}
            </p>
            <div className="mt-2 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full
                          group-hover:w-full transition-all duration-500 ease-out"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByPrice;
