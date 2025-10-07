"use client";
import Image from "next/image";

const SilverCollection = () => {
    const products = [
        { id: 1, img: "/images/silver1.webp", name: "Elegant Silver Ring", price: "₹2,499" },
        { id: 2, img: "/images/silver2.webp", name: "Classic Silver Chain", price: "₹4,999" },
        { id: 3, img: "/images/silver3.webp", name: "Silver Bracelet", price: "₹1,899" },
        { id: 4, img: "/images/silver4.webp", name: "Designer Earrings", price: "₹3,299" },
    ];

    return (
        <section
            className="w-full bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 py-7"
            aria-labelledby="silver-collection-heading"
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* Top border */}
                <div className="h-px bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50
        mb-6"></div>

                {/* Heading */}
                <div className="text-center mb-8">
                    <h2
                        id="silver-collection-heading"
                        className="text-3xl md:text-4xl font-serif text-gray-800 mb-3 tracking-wide"
                    >
                        Silver Collection
                    </h2>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full"></div>
                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                        Discover our finest handcrafted silver jewellery pieces.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                    {products.map((item) => (
                        <article
                            key={item.id}
                            className="group bg-white rounded-2xl shadow-md hover:shadow-xl 
                         border border-gray-200 hover:border-gray-300 overflow-hidden 
                         transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Product Image */}
                            <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={`${item.name} - Silver Jewellery`}
                                    fill
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    priority={item.id === 1}
                                />
                            </div>

                            {/* Product Details */}
                            <div className="p-3 text-center">
                                <h3 className="text-gray-800 font-semibold text-sm md:text-base mb-1 group-hover:text-gray-900 transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-lg font-bold text-gray-900 mb-2">{item.price}</p>

                                {/* Decorative line */}
                                <div className="w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full group-hover:w-12 transition-all duration-500"></div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom border */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-10 mb-6"></div>

                {/* View More Button */}
                <div className="flex justify-center">
                    <button
                        type="button"
                        className="px-6 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg
                       hover:from-gray-900 hover:to-black hover:shadow-lg hover:-translate-y-0.5
                       transition-all duration-300 font-semibold text-sm md:text-base tracking-wide"
                        aria-label="Explore more silver jewellery collection"
                    >
                        Explore More Collection
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SilverCollection;
