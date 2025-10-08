"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const metadata = {
  title: "Our Policies | Jewellery Walla",
  description:
    "Read Jewellery Walla's Privacy, Refund, Terms of Usage and Shipping policies to understand how we protect your trust and ensure a seamless shopping experience.",
};

export default function PoliciesPage() {
  const [active, setActive] = useState("privacy");

  const policies = [
    {
      id: "privacy",
      title: "Privacy Policy",
      content: `We value your privacy and ensure that your personal information is securely protected. Your data will only be used to improve your shopping experience and will never be shared with third parties.`,
    },
    {
      id: "refund",
      title: "Refund Policy",
      content: `If you are not satisfied with your purchase, you can request a refund within 7 days of delivery. The product must be unused, in its original packaging, and accompanied by proof of purchase.`,
    },
    {
      id: "terms",
      title: "Terms of Usage",
      content: `By using our website, you agree to abide by our terms and conditions. All images, content, and designs are the intellectual property of Jewellery Walla and cannot be copied or reused without permission.`,
    },
    {
      id: "shipping",
      title: "Shipping Policy",
      content: `We provide fast and reliable shipping across India. Orders are usually processed within 24 hours and delivered within 3–7 business days depending on your location.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-white py-12 px-4 sm:px-8 md:px-16">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold text-center text-amber-700 mb-12 tracking-wide"
      >
        Our <span className="text-yellow-500">Policies</span>
      </motion.h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {policies.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 
            ${
              active === p.id
                ? "bg-gradient-to-r from-amber-600 to-yellow-500 text-white shadow-md scale-105"
                : "bg-white text-amber-600 border border-amber-300 hover:bg-amber-50"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          {policies
            .filter((p) => p.id === active)
            .map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg border border-amber-100 p-8 sm:p-10"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-700 mb-4">
                  {p.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {p.content}
                </p>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Decorative animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-10 right-10 w-10 h-10 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-md opacity-50 hidden md:block"
      />
    </div>
  );
}
