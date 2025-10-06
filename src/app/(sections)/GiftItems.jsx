"use client";
import Image from "next/image";

const GiftItems = () => {
  const products = [
    { id: 1, img: "/images/image1.jpeg", name: "Silver Gift Box", price: "₹499" },
    { id: 2, img: "/images/image2.jpeg", name: "Heart Pendant", price: "₹799" },
    { id: 3, img: "/images/image3.jpeg", name: "Couple Bracelet", price: "₹999" },
    { id: 4, img: "/images/image4.jpeg", name: "Love Ring Set", price: "₹1199" },
    { id: 5, img: "/images/image5.jpeg", name: "Designer Watch", price: "₹1499" },
    { id: 6, img: "/images/image1.jpeg", name: "Customized Keychain", price: "₹599" },
    { id: 7, img: "/images/image2.jpeg", name: "Golden Rose", price: "₹899" },
    { id: 8, img: "/images/image3.jpeg", name: "Teddy & Mug Combo", price: "₹699" },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 py-8">
      <div className="max-w-6xl mx-auto px-4">

        {/* Decorative top border */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-6"></div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-slate-800 mb-3 tracking-wide">
            Perfect Gift Collection
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-3 text-base font-light">
            Thoughtful gifts for your loved ones
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((item) => (
            <article key={item.id} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer
                                              border border-slate-200 hover:border-slate-300 overflow-hidden hover:-translate-y-1">
              <div className="p-4 flex flex-col items-center">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="w-full h-40 md:h-44 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-slate-700 font-semibold text-base mb-1 group-hover:text-slate-900 transition-colors text-center">
                  {item.name}
                </h3>
                <p className="text-lg font-bold text-slate-900 mb-2 text-center">
                  {item.price}
                </p>
                <div className="w-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full
                                group-hover:w-12 transition-all duration-300"></div>
              </div>
            </article>
          ))}
        </div>

        {/* Decorative bottom border */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mt-8 mb-6"></div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button className="px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg
                             hover:from-slate-800 hover:to-slate-900 hover:shadow-md hover:-translate-y-0.5
                             transition-all duration-300 font-semibold text-base tracking-wide">
            Explore All Gifts
          </button>
        </div>
      </div>
    </section>
  );
};

export default GiftItems;
