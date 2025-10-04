"use client";
import { FaGem, FaShippingFast, FaShieldAlt, FaSyncAlt, FaHeadset } from "react-icons/fa";

const OurFeatured = () => {
    const features = [
        {
            id: 1,
            icon: <FaGem size={35} className="text-gray-800" />,
            title: "Premium Quality",
            desc: "Finest craftsmanship with 100% genuine materials.",
        },
        {
            id: 2,
            icon: <FaShippingFast size={35} className="text-gray-800" />,
            title: "Fast Delivery",
            desc: "Quick & reliable shipping on all orders.",
        },
        {
            id: 3,
            icon: <FaShieldAlt size={35} className="text-gray-800" />,
            title: "Secure Payment",
            desc: "Your transactions are safe and encrypted.",
        },
        {
            id: 4,
            icon: <FaSyncAlt size={35} className="text-gray-800" />,
            title: "Easy Returns",
            desc: "Hassle-free 7-day return policy.",
        },
        {
            id: 5,
            icon: <FaHeadset size={35} className="text-gray-800" />,
            title: "24/7 Support",
            desc: "We’re here anytime you need help.",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-14 bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-sm">
            {/* Heading */}
            <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
                Our Featured
            </h2>

            {/* Icons Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
                {features.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                    >
                        <div className="mb-4 text-gray-700">{item.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurFeatured;
