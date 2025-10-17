"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, Award, Shield, Truck, Heart } from "lucide-react";

export default function Footer() {
  const featuredProducts = [
    {
      id: 1,
      name: "Diamond Ring",
      price: "$2,499",
      image: "/images/image1.jpg",
      href: "/products/diamond-ring",
    },
    {
      id: 2,
      name: "Gold Necklace",
      price: "$1,899",
      image: "/images/image2.jpg",
      href: "/products/gold-necklace",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 text-gray-700 border-t border-gray-200">
      {/* Features Section */}
      <div className="border-b border-gray-200 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                Icon: Truck,
                title: "Free Shipping",
                desc: "On orders over $500",
              },
              { Icon: Shield, title: "Secure Payment", desc: "100% Protected" },
              {
                Icon: Award,
                title: "Certified Quality",
                desc: "Hallmarked Products",
              },
              {
                Icon: Heart,
                title: "Lifetime Support",
                desc: "24/7 Customer Care",
              },
            ].map(({ Icon, title, desc }, index) => (
              <div
                key={title}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors duration-200"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                data-aos-duration="400"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm text-gray-900 truncate">
                    {title}
                  </h4>
                  <p className="text-xs text-gray-600 truncate">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand & Newsletter - Takes 2 columns on large screens */}
          <div
            className="sm:col-span-2 lg:col-span-2"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="relative group inline-block mb-4">
              <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 bg-clip-text text-transparent tracking-wider drop-shadow-sm font-serif transition-transform duration-300 group-hover:scale-[1.03]">
                Jewellery
              </span>
              <span className="text-xl md:text-2xl font-light text-gray-800 ml-2 italic tracking-wider">
                Wala
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-6 max-w-sm">
              Discover timeless elegance with our exquisite collection of
              handcrafted jewelry. Subscribe to get exclusive offers and new
              arrivals.
            </p>

            {/* Newsletter Form */}
            <form
              className="flex max-w-sm mb-6"
              onSubmit={(e) => e.preventDefault()}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
            >
              <Input
                type="email"
                placeholder="Your email address"
                className="rounded-r-none focus-visible:ring-yellow-500 focus-visible:ring-offset-0 border-gray-300"
                aria-label="Email for newsletter"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white rounded-l-none px-6 font-semibold"
              >
                Subscribe
              </Button>
            </form>

            {/* Social Media */}
            <div
              className="flex gap-2"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="400"
            >
              {[
                { Icon: FaFacebookF, label: "Facebook", href: "#" },
                { Icon: FaInstagram, label: "Instagram", href: "#" },
                { Icon: FaTwitter, label: "Twitter", href: "#" },
                { Icon: FaYoutube, label: "Youtube", href: "#" },
              ].map(({ Icon, label, href }) => (
                <Button
                  key={label}
                  asChild
                  variant="outline"
                  size="icon"
                  className="border-gray-300 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-500 hover:text-white hover:border-transparent transition-all duration-200"
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Shop Categories */}
          <div
            className="sm:col-span-1 lg:col-span-1"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="500"
          >
            <h3 className="font-bold text-base mb-4 text-gray-900 uppercase tracking-wide border-b-2 border-yellow-400 pb-2 inline-block">
              Shop
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                "Rings",
                "Necklaces",
                "Earrings",
                "Bracelets",
                "Bangles",
                "Pendants",
                "Chains",
                "Anklets",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/products?category=${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-yellow-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div
            className="sm:col-span-1 lg:col-span-1"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            <h3 className="font-bold text-base mb-4 text-gray-900 uppercase tracking-wide border-b-2 border-yellow-400 pb-2 inline-block">
              Help
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Track Order", href: "/track-order" },
                { label: "Shipping Info", href: "/shipping" },
                { label: "Returns", href: "/returns" },
                { label: "Size Guide", href: "/size-guide" },
                { label: "Care Guide", href: "/care-guide" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact Us", href: "/contact" },
                { label: "About Us", href: "/about" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-yellow-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Info */}
          <div
            className="sm:col-span-1 lg:col-span-1"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="500"
          >
            <h3 className="font-bold text-base mb-4 text-gray-900 uppercase tracking-wide border-b-2 border-yellow-400 pb-2 inline-block">
              Policies
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Refund Policy", href: "/refund" },
                { label: "Shipping Policy", href: "/shipping-policy" },
                { label: "Cookie Policy", href: "/cookies" },
                { label: "Warranty", href: "/warranty" },
                { label: "Certifications", href: "/certifications" },
                { label: "Careers", href: "/careers" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-yellow-600 hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Featured Products */}
          <div
            className="sm:col-span-2 lg:col-span-1"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h3 className="font-bold text-base mb-4 text-gray-900 uppercase tracking-wide border-b-2 border-yellow-400 pb-2 inline-block">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 mb-6">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-600" />
                <a
                  href="tel:+916378643867"
                  className="hover:text-yellow-600 transition-colors"
                >
                  +91 63786 43867
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-600" />
                <a
                  href="mailto:support@jewellerywala.com"
                  className="hover:text-yellow-600 transition-colors break-all"
                >
                  support@jewellerywala.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-600" />
                <span className="leading-relaxed">
                  Jhalamand Circle, Jodhpur, Rajasthan
                </span>
              </li>
            </ul>

            {/* Featured Products */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-gray-900 mb-3">
                Featured Products
              </h4>
              {featuredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="flex items-center gap-3 p-2 rounded-lg border border-gray-200 hover:border-yellow-400 hover:shadow-md transition-all duration-200 group bg-white"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="500"
                >
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="font-medium text-sm text-gray-900 truncate group-hover:text-yellow-600 transition-colors">
                      {product.name}
                    </h5>
                    <p className="text-sm font-bold text-yellow-600">
                      {product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-gray-500 text-center ">
            © {new Date().getFullYear()} Jewellery Wala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
