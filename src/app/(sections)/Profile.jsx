"use client";
import { useState } from "react";
import { Menu, X, User, Heart, History, Settings, LogOut } from "lucide-react";

export default function AccountPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf8f6] text-gray-800 flex">
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full md:h-auto w-64 bg-white shadow-md md:shadow-none z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 border-b flex items-center justify-between md:justify-center">
          <h1 className="text-lg font-semibold text-gray-800">Jewellery Wala</h1>
          <button
            className="md:hidden text-gray-600"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <button className="flex items-center gap-3 w-full text-sm font-medium bg-amber-50 text-amber-700 rounded-md px-3 py-2">
            <User size={18} /> Account Details
          </button>
          <button className="flex items-center gap-3 w-full text-sm px-3 py-2 hover:bg-gray-100 rounded-md">
            <History size={18} /> Order History
          </button>
          <button className="flex items-center gap-3 w-full text-sm px-3 py-2 hover:bg-gray-100 rounded-md">
            <Heart size={18} /> Wishlist
          </button>
          <button className="flex items-center gap-3 w-full text-sm px-3 py-2 hover:bg-gray-100 rounded-md">
            <Settings size={18} /> Preferences
          </button>

          <hr className="my-3" />

          <button className="flex items-center gap-3 w-full text-sm text-red-600 px-3 py-2 hover:bg-red-50 rounded-md">
            <LogOut size={18} /> Logout
          </button>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 ml-0 md:ml-0">
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-700 p-2"
          >
            <Menu size={24} />
          </button>
          <h2 className="text-lg font-semibold">Account Details</h2>
          <div className="w-8" /> {/* Spacer */}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Account Details</h2>

          {/* Personal Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1 text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Eleanor Vance"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-amber-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-600">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-amber-600 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="eleanor.v@example.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-amber-600 focus:outline-none"
              />
            </div>

            {/* Shipping Info */}
            <div>
              <h3 className="font-medium mb-2 mt-4">Shipping Address</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1 text-gray-600">
                    Address
                  </label>
                  <input
                    type="text"
                    defaultValue="123 Diamond Avenue"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-amber-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-600">City</label>
                  <input
                    type="text"
                    defaultValue="Crystal City"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-amber-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-600">
                    State / Province
                  </label>
                  <input
                    type="text"
                    defaultValue="CA"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-amber-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-600">
                    Zip / Postal Code
                  </label>
                  <input
                    type="text"
                    defaultValue="90210"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-amber-600 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-amber-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-amber-700 transition-all">
                Update Information
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
