'use client';
import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

export default function SilverCollection() {
    const [wishlist, setWishlist] = useState({});
    const [activeTab, setActiveTab] = useState('silver');

    const toggleWishlist = (id) =>
        setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));

    const products = {
        silver: [
            { id: 1, category: 'Study Tables', name: 'Caroline Study Tables', originalPrice: '3,000', currentPrice: '2,500', image: 'https://i.pinimg.com/736x/e5/92/0b/e5920b357d1d2d0dd69e204df1cedd68.jpg' },
            { id: 2, category: 'Coffee Tables', name: 'Evan Coffee Table', originalPrice: '2,600', currentPrice: '2,300', image: 'https://i.pinimg.com/1200x/89/66/75/896675055bc102e0c732c3d7b97b7e8d.jpg' },
            { id: 3, category: 'Shoe Racks', name: 'Gloria Shoe Racks', originalPrice: '3,400', currentPrice: '2,900', image: 'https://i.pinimg.com/736x/93/01/ba/9301bab85834d09e8e5a363563fd15d4.jpg' },
            { id: 4, category: 'Bookshelves', name: 'Erica Bookshelfs', originalPrice: '36,000', currentPrice: '30,000', image: 'https://i.pinimg.com/736x/3e/ae/17/3eae172a862a6bed8a9483cd6b2323f8.jpg' },
        ],
        gold: [
            { id: 5, category: 'Wooden Sofa', name: 'Sapien Sofa Cum Bed', originalPrice: '64,000', currentPrice: '54,000', image: 'https://img.fantaskycdn.com/cc5378752e941575f773c918699a0b96_2056x.png' },
            { id: 6, category: '2 Seater Sofa', name: 'Canthur Sheesham Wood Sofa Set', originalPrice: '8,000', currentPrice: '7,600', image: 'https://i.pinimg.com/736x/0a/fe/7a/0afe7a42534114dd96986159e7a56a8b.jpg' },
            { id: 7, category: 'Wooden Jhula', name: 'Calina Swing Jhula', originalPrice: '65,000', currentPrice: '58,000', image: 'https://i.pinimg.com/1200x/c1/fa/26/c1fa26041d1d01cf61a60223f25585cb.jpg' },
            { id: 8, category: 'Beds', name: 'Premium Wooden Bed', originalPrice: '75,000', currentPrice: '62,000', image: 'https://i.pinimg.com/736x/4d/4e/da/4d4edac642c7b081ed5a3a4883ac334d.jpg' },
        ],
        gift: [
            { id: 9, category: 'Decor Items', name: 'Artistic Wall Mirror Set', originalPrice: '4,500', currentPrice: '3,200', image: 'https://i.pinimg.com/1200x/7c/2c/c2/7c2cc2d46f49b1b536c69b7b42c69539.jpg' },
            { id: 10, category: 'Throw Pillows', name: 'Velvet Throw Pillow Collection', originalPrice: '2,800', currentPrice: '1,999', image: 'https://biobeautify.com/cdn/shop/files/xpkr1537409111394-15952e6b-904b-41f0-979b-4d87d3ce7fb6.jpg?v=1735845776&width=990' },
            { id: 11, category: 'Lamp Stands', name: 'Decorative Brass Lamp Stand', originalPrice: '3,200', currentPrice: '2,450', image: 'https://i.pinimg.com/1200x/ce/3d/62/ce3d622dbda57dd81f26061a4bbf8d54.jpg' },
            { id: 12, category: 'Wall Art', name: 'Modern Canvas Wall Art', originalPrice: '5,000', currentPrice: '3,800', image: 'https://i.pinimg.com/736x/df/3e/dc/df3edc2c7793f7737685b80ccb7d026e.jpg' },
        ],
    };

    const tabs = [
        { label: 'Silver', value: 'silver' },
        { label: 'Gold', value: 'gold' },
        { label: 'Gift', value: 'gift' },
    ];

    const ProductCard = ({ id, category, name, originalPrice, currentPrice, image }) => (
        <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <img src={image} alt={name} loading="lazy" className="w-full h-56 object-cover bg-amber-50" />
            <div className="p-4">
                <p className="text-[11px] uppercase tracking-wide text-amber-700 font-medium mb-1">{category}</p>
                <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">{name}</h3>
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gray-400 line-through">₹{originalPrice}</span>
                    <span className="text-lg font-bold text-amber-600">₹{currentPrice}</span>
                </div>
                <div className="flex gap-2 items-center">
                    <button
                        onClick={() => toggleWishlist(id)}
                        aria-label="Add to wishlist"
                        className="w-9 h-9 rounded-full border border-gray-300 hover:border-amber-500 hover:text-amber-500 flex items-center justify-center transition-all"
                    >
                        <Heart size={16} fill={wishlist[id] ? 'currentColor' : 'none'} className={wishlist[id] ? 'text-amber-500' : ''} />
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-amber-800 to-amber-700 text-white py-2 rounded text-xs font-semibold uppercase hover:scale-105 transition-all flex items-center justify-center gap-1.5">
                        <ShoppingCart size={14} /> Add
                    </button>
                </div>
            </div>
        </article>
    );

    return (
        <section className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 pb-10">
                {/* Tabs */}
                <div className="flex justify-center gap-4 sm:gap-8 mb-8 border-b border-gray-200 pb-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            className={`px-4 sm:px-6 py-2 font-semibold text-sm sm:text-base uppercase relative transition-all ${activeTab === tab.value ? 'text-amber-800' : 'text-gray-600 hover:text-amber-700'
                                }`}
                        >
                            {tab.label}
                            {activeTab === tab.value && (
                                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700 rounded-full"></span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-800 text-center mb-6 capitalize">
                    {activeTab} Collection
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {products[activeTab].map((p) => (
                        <ProductCard key={p.id} {...p} />
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 px-10 py-3 rounded-full font-semibold text-sm uppercase hover:shadow-lg hover:scale-105 transition-all">
                        View More
                    </button>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
        </section>
    );
}
