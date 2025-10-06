"use client";
const SilverCollection = () => {
    const products = [
        { id: 1, img: "/images/silver1.webp", name: "Elegant Silver Ring", price: "₹2,499" },
        { id: 2, img: "/images/silver2.webp", name: "Classic Silver Chain", price: "₹4,999" },
        { id: 3, img: "/images/silver3.webp", name: "Silver Bracelet", price: "₹1,899" },
        { id: 4, img: "/images/silver4.webp", name: "Designer Earrings", price: "₹3,299" },
    ];

    return (
        <div className="w-full bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 py-5">
            {/* Decorative top border */}
            <div className="max-w-6xl mx-auto">
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-2"></div>

                {/* Heading Section */}
                <div className="text-center mb-4">
                    <h2 className="text-3xl font-serif text-slate-800 mb-3 tracking-wide">
                        Silver Collection
                    </h2>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full"></div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 px-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer
                         border border-slate-200 hover:border-slate-300 overflow-hidden hover:-translate-y-1"
                        >
                            <div className="p-2"> {/* Reduced padding */}
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-44 md:h-48 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="text-center">
                                    <p className="text-slate-700 font-semibold text-sm mb-1 group-hover:text-slate-900 transition-colors">
                                        {item.name}
                                    </p>
                                    <p className="text-base font-bold text-slate-900 mb-2">
                                        {item.price}
                                    </p>
                                    <div className="w-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full
                                  group-hover:w-12 transition-all duration-300"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative bottom border */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mt-5 mb-6"></div>

                {/* View More Button */}
                <div className="flex justify-center">
                    <button className="px-6 py-2.5 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg
                             hover:from-slate-800 hover:to-slate-900 hover:shadow-md hover:-translate-y-0.5
                             transition-all duration-300 font-semibold text-base tracking-wide">
                        Explore More Collection
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SilverCollection;
