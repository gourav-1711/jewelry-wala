"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, ShoppingBag, Star } from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from "react";

// Sample wishlist data - replace with your actual data source
const wishlistItems = [
  {
    id: 1,
    name: 'Diamond Solitaire Ring',
    price: 1299.99,
    originalPrice: 1499.99,
    image: '/images/image1.jpg',
    rating: 4.8,
    inStock: true,
  },
  {
    id: 2,
    name: 'Gold Plated Necklace',
    price: 299.99,
    originalPrice: 349.99,
    image: '/images/image2.jpg',
    rating: 4.5,
    inStock: true,
  },
  {
    id: 3,
    name: 'Pearl Earrings Set',
    price: 199.99,
    originalPrice: 249.99,
    image: '/images/image3.jpg',
    rating: 4.7,
    inStock: false,
  },
];

export default function Wishlist() {
  const [items, setItems] = useState(wishlistItems);

  const removeFromWishlist = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const moveToCart = (id) => {
    // Add to cart logic here
    console.log('Moving item to cart:', id);
    // Remove from wishlist after adding to cart
    removeFromWishlist(id);
  };

  return (
    <>
      <Head>
        <title>My Wishlist - Jewellery Wala</title>
        <meta name="description" content="View and manage your favorite jewelry items in your wishlist at Jewellery Wala." />
        <meta name="keywords" content="jewelry wishlist, save jewelry, favorite items, wishlist, Jewellery Wala" />
      </Head>

      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 mb-4">
              Your Wishlist
            </h1>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              {items.length > 0 
                ? 'Your favorite jewelry pieces are waiting for you!' 
                : 'Your wishlist is currently empty. Start adding items you love!'}
            </p>
          </motion.div>

          {items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden group relative"
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Remove from wishlist"
                      >
                        <X className="w-5 h-5 text-gray-600" />
                      </button>
                      {!item.inStock && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                          Out of Stock
                        </div>
                      )}
                      <div className="absolute bottom-2 left-2 flex items-center bg-black bg-opacity-70 text-white px-2 py-1 rounded">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm">{item.rating}</span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">{item.name}</h3>
                      <div className="flex items-center mb-3">
                        <span className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</span>
                        {item.originalPrice > item.price && (
                          <span className="ml-2 text-sm text-gray-500 line-through">${item.originalPrice.toFixed(2)}</span>
                        )}
                        {item.originalPrice > item.price && (
                          <span className="ml-2 text-sm font-medium text-amber-600">
                            {Math.round((1 - item.price / item.originalPrice) * 100)}% OFF
                          </span>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => moveToCart(item.id)}
                          disabled={!item.inStock}
                          className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md ${
                            item.inStock 
                              ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          } transition-colors duration-200`}
                        >
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                        <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
                          <Heart className="w-5 h-5 text-amber-600 fill-current" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 mx-auto mb-6 text-gray-300">
                <Heart className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h3>
              <p className="text-gray-500 mb-6">Save your favorite items to your wishlist for later</p>
              <a
                href="/shop"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200"
              >
                Continue Shopping
              </a>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
