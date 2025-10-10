"use client";
import { FaGem, FaShippingFast, FaShieldAlt, FaHeadset } from "react-icons/fa";

const OurFeatured = () => {
  const features = [
    {
      id: 1,
      icon: (
        <FaGem
          size={32}
          className="transition-transform duration-500 group-hover:scale-110 group-hover:text-amber-500"
        />
      ),
      title: "Premium Quality",
      desc: "Finest craftsmanship with 100% genuine materials.",
      color: "from-amber-100 via-yellow-50 to-white",
    },
    {
      id: 2,
      icon: (
        <FaShippingFast
          size={32}
          className="transition-transform duration-500 group-hover:scale-110 group-hover:text-sky-500"
        />
      ),
      title: "Fast Delivery",
      desc: "Quick & reliable shipping on all orders.",
      color: "from-sky-100 via-blue-50 to-white",
    },
    {
      id: 3,
      icon: (
        <FaShieldAlt
          size={32}
          className="transition-transform duration-500 group-hover:scale-110 group-hover:text-emerald-500"
        />
      ),
      title: "Secure Payment",
      desc: "Your transactions are safe and encrypted.",
      color: "from-emerald-100 via-green-50 to-white",
    },
    {
      id: 4,
      icon: (
        <FaHeadset
          size={32}
          className="transition-transform duration-500 group-hover:scale-110 group-hover:text-pink-500"
        />
      ),
      title: "24/7 Support",
      desc: "We're here anytime you need help.",
      color: "from-pink-100 via-rose-50 to-white",
    },
  ];

  return (
    <section
      className="w-full bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 "
      aria-labelledby="why-choose-us"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Border */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-6"></div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2
            id="why-choose-us"
            className="text-2xl md:text-3xl font-serif text-slate-800 mb-2 tracking-wide"
          >
            Why Choose Us
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-2 text-xs sm:text-sm md:text-base font-light max-w-md mx-auto">
            Experience excellence in every aspect of your jewellery shopping
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {features.map((item) => (
            <article
              key={item.id}
              className={`group relative flex flex-col items-center bg-gradient-to-br ${item.color} 
                          rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-500
                          border border-slate-200 hover:border-transparent cursor-pointer
                          overflow-hidden hover:-translate-y-1`}
            >
              {/* Decorative shimmer overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-white/40 via-transparent to-transparent animate-pulse"></div>

              {/* Icon */}
              <div className="mb-3 text-slate-700 transition-all duration-500">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-semibold text-slate-900 mb-1 text-center">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 text-center leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom Line */}
              <div className="mt-2 w-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full group-hover:w-10 transition-all duration-500"></div>
            </article>
          ))}
        </div>

        {/* Bottom Border */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mt-8"></div>
      </div>
    </section>
  );
};

export default OurFeatured;
