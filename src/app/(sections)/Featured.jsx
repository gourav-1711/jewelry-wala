"use client";
import { FaGem, FaShippingFast, FaShieldAlt, FaHeadset } from "react-icons/fa";

const OurFeatured = () => {
    const features = [
        {
            id: 1,
            icon: <FaGem size={40} className="text-slate-700" />,
            title: "Premium Quality",
            desc: "Finest craftsmanship with 100% genuine materials.",
        },
        {
            id: 2,
            icon: <FaShippingFast size={40} className="text-slate-700" />,
            title: "Fast Delivery",
            desc: "Quick & reliable shipping on all orders.",
        },
        {
            id: 3,
            icon: <FaShieldAlt size={40} className="text-slate-700" />,
            title: "Secure Payment",
            desc: "Your transactions are safe and encrypted.",
        },
        {
            id: 4,
            icon: <FaHeadset size={40} className="text-slate-700" />,
            title: "24/7 Support",
            desc: "We're here anytime you need help.",
        },
    ];

    return (
        <div className="w-full bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 py-10">
            <div className="max-w-7xl mx-auto">
                {/* Top Border */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8"></div>

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-serif text-slate-800 mb-3 tracking-wide">
                        Why Choose Us
                    </h2>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full"></div>
                    <p className="text-slate-600 mt-3 text-base font-light max-w-xl mx-auto">
                        Experience excellence in every aspect of your jewellery shopping
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2">
                    {features.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col items-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl
                                       transition-all duration-300 cursor-pointer border border-slate-200 hover:border-slate-300
                                       hover:-translate-y-1 min-h-[180px]"
                        >
                            <div className="mb-4 text-slate-700 group-hover:text-slate-900 transition-all duration-300
                                           group-hover:scale-110 transform">
                                {item.icon}
                            </div>
                            <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors duration-300 text-center">
                                {item.title}
                            </h3>
                            <p className="text-sm text-slate-600 text-center leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                                {item.desc}
                            </p>
                            <div className="mt-3 w-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full
                                       group-hover:w-12 transition-all duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom Border */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mt-10"></div>
            </div>
        </div>
    );
};

export default OurFeatured;
