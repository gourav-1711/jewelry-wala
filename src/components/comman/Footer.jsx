"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F1F3F5] text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + Newsletter */}
        <div>
          <div className="relative group">
            <span className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent tracking-wider drop-shadow-lg transform transition-all duration-300 group-hover:scale-105 font-serif">
              Jewellery
            </span>
            <span className="text-lg md:text-2xl font-light text-gray-600 ml-2 italic tracking-wider">
              Wala
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
          <p className="mt-4 text-sm">
            Don’t miss any updates or promotions by signing up to our newsletter.
          </p>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-l-md p-2 text-sm focus:outline-none"
            />
            <button className="bg-yellow-700 text-white px-4 rounded-r-md">
              →
            </button>
          </div>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-semibold mb-3">Our Policies</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Terms of Usage</li>
            <li>Shipping Policy</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href={"/about"}> About Us</Link></li>
            <li> <Link href={"/contact"}> Contact Us</Link></li>
            <li><Link href={"/faq"}>FAQ</Link></li>
          </ul>
          <h3 className="font-semibold mt-5 mb-2">Keep In Touch</h3>
          <div className="flex gap-3 text-xl">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="font-semibold mb-3">Contact Details</h3>
          <ul className="space-y-3 text-sm">
            <li>📞 +91 6378643867</li>
            <li>✉ support@jewellerywala.com</li>
            <li>
              📍 Jhalamand Circle Jodhpur
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-yellow-200 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center">
          <p className="text-sm text-center">© Jewellery Wala | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
