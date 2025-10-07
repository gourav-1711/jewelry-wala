"use client";
import { useState } from "react";
import Image from "next/image";

export default function OrderTracking() {
    const [orderNumber, setOrderNumber] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("inTransit"); // Example status

    const handleTrackOrder = (e) => {
        e.preventDefault();
        // Fetch order status API call can go here
        alert(`Tracking order ${orderNumber} for ${email}`);
    };

    const statusSteps = [
        { id: 1, title: "Order Placed", date: "July 15, 2024" },
        { id: 2, title: "In Transit", date: "July 17, 2024" },
        { id: 3, title: "Out for Delivery", date: "July 20, 2024" },
        { id: 4, title: "Delivered", date: "July 20, 2024" },
    ];

    const progressPercentage = {
        orderPlaced: 25,
        inTransit: 50,
        outForDelivery: 75,
        delivered: 100,
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-10">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Track Your Order
                </h1>
                <p className="text-gray-600 mb-6">
                    Enter your order details to see its current status.
                </p>

                {/* Form */}
                <form
                    onSubmit={handleTrackOrder}
                    className="bg-white rounded-xl shadow-md p-6 mb-10"
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Order Number
                        </label>
                        <input
                            type="text"
                            placeholder="e.g., LJ123456789"
                            value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg transition"
                    >
                        Track Order
                    </button>
                </form>

                {/* Order Status */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                        Order Status
                    </h2>

                    {/* Progress Bar */}
                    <div className="mb-6">
                        <div className="flex justify-between mb-1">
                            <span className="font-medium text-gray-700">
                                {statusSteps.find((s) => s.id === 2)?.title}
                            </span>
                            <span className="text-gray-500 text-sm">Est. Delivery: July 20, 2024</span>
                        </div>
                        <div className="w-full bg-gray-200 h-3 rounded-full">
                            <div
                                className="bg-yellow-500 h-3 rounded-full transition-all duration-500"
                                style={{ width: `${progressPercentage[status]}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="mb-6 rounded-lg overflow-hidden shadow">
                        <Image
                            src="/images/map-placeholder.png" // Replace with real map or embed map
                            alt="Map"
                            width={800}
                            height={400}
                            className="w-full object-cover"
                        />
                    </div>

                    {/* Timeline */}
                    <div className="space-y-6">
                        {statusSteps.map((step, index) => (
                            <div key={step.id} className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div
                                        className={`w-6 h-6 rounded-full border-2 border-yellow-500 flex items-center justify-center ${index + 1 <= Object.keys(progressPercentage).indexOf(status) + 1
                                                ? "bg-yellow-500 text-white"
                                                : "bg-white text-gray-400"
                                            }`}
                                    >
                                        {index + 1 <= Object.keys(progressPercentage).indexOf(status) + 1 && (
                                            <svg
                                                className="w-3 h-3"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <p className="font-medium text-gray-900">{step.title}</p>
                                    <p className="text-gray-500 text-sm">{step.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
