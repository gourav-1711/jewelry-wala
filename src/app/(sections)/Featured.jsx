"use client";
import { FaGem, FaShippingFast, FaShieldAlt, FaSyncAlt, FaHeadset } from "react-icons/fa";

const OurFeatured = () => {
    const features = [
        {
            id: 1,
            icon: <FaGem size={35} className="text-slate-700" />,
            title: "Premium Quality",
            desc: "Finest craftsmanship with 100% genuine materials.",
        },
        {
            id: 2,
            icon: <FaShippingFast size={35} className="text-slate-700" />,
            title: "Fast Delivery",
            desc: "Quick & reliable shipping on all orders.",
        },
        {
            id: 3,
            icon: <FaShieldAlt size={35} className="text-slate-700" />,
            title: "Secure Payment",
            desc: "Your transactions are safe and encrypted.",
        },
        {
            id: 5,
            icon: <FaHeadset size={35} className="text-slate-700" />,
            title: "24/7 Support",
            desc: "We're here anytime you need help.",
        },
    ];

    return (
        <div className="w-full bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 py-8">
            {/* Decorative top border */}
            <div className="max-w-7xl mx-auto">
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-6"></div>

                {/* Heading Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-serif text-slate-800 mb-3 tracking-wide">
                        Why Choose Us
                    </h2>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full"></div>
                    <p className="text-slate-600 mt-3 text-base font-light">
                        Experience excellence in every aspect of your jewellery shopping
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 px-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {features.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col items-center bg-white rounded-xl p-4 shadow-lg hover:shadow-xl
                                     transition-all duration-300 cursor-pointer border border-slate-200 hover:border-slate-300
                                     hover:-translate-y-1 min-h-[160px]"
                        >
                            <div className="mb-3 text-slate-600 group-hover:text-slate-800 transition-all duration-300
                                          group-hover:scale-110 transform">
                                {item.icon}
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-slate-800 transition-colors duration-300 text-center">
                                {item.title}
                            </h3>
                            <p className="text-xs text-slate-600 text-center leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                                {item.desc}
                            </p>
                            <div className="mt-2 w-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full
                                          group-hover:w-full transition-all duration-500 ease-out"></div>
                        </div>
                    ))}
                </div>

                {/* Decorative bottom border */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mt-6 mb-6"></div>
            </div>
        </div>
    );
};

export default OurFeatured;
