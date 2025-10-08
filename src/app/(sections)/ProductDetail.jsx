'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FaShoppingCart } from 'react-icons/fa';
import { IoMdArrowDropright } from "react-icons/io";



const productData = {
  id: '1',
  name: 'Traditional Bangle',
  price: 1250,
  description:
    'A delicate pendant featuring a starburst design with a central diamond, crafted in 18k white gold. Perfect for adding a touch of sparkle to any outfit.',
  material: '18k White Gold',
  dimensions: '1.5cm diameter',
  weight: '2.5g',
  stone: 'Diamond (0.15ct)',
  images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
  rating: 4.8,
  reviews: 23,
};

const reviews = [
  {
    id: '1',
    author: 'Sophia Bennett',
    rating: 5,
    date: '1 month ago',
    comment:
      'Absolutely stunning pendant! The craftsmanship is impeccable, and it looks even more beautiful in person.',
    avatar: '/images/image1.jpg',
  },
  {
    id: '2',
    author: 'Olivia Carter',
    rating: 4,
    date: '2 months ago',
    comment:
      'Lovely pendant, perfect for everyday wear. The diamond sparkles beautifully, though I wish it came with a longer chain.',
    avatar: '/images/image2.jpg',
  },
];

const relatedProducts = [
  { id: '2', name: 'Diamond Solitaire Ring', price: 950, image: '/images/image1.jpg' },
  { id: '3', name: 'Gold Bangle Bracelet', price: 750, image: '/images/image2.jpg' },
  { id: '4', name: 'Stud Earrings', price: 450, image: '/images/image3.jpg' },
  { id: '5', name: 'Pearl Necklace', price: 1100, image: '/images/image4.jpg' },
];

export default function ProductPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const [cartNotification, setCartNotification] = useState(false);

  const handleAddToCart = () => {
    setCartNotification(true);
    setTimeout(() => setCartNotification(false), 2000);
  };

  const handleWishlist = () => setWishlist(!wishlist);

  const router = useRouter();

  const handleBuyNow = () => {
    // Yahan tu apna checkout ya product page ka route de sakta hai
    router.push("/checkout");
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));

  return (
    <main className="bg-gray-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-6">
          <a href="#" className="text-amber-600 hover:underline">Jewelry</a>
          <ChevronRight size={14} />
          <a href="#" className="text-amber-600 hover:underline">Necklaces</a>
          <ChevronRight size={14} />
          <span className="text-gray-900">{productData.name}</span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">

          {/* Gallery */}
          <div className="space-y-3">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden h-80 sm:h-[460px]">
              <Image
                src={productData.images[currentImage]}
                alt={productData.name}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {productData.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition ${currentImage === idx
                    ? 'border-amber-600'
                    : 'border-gray-300 hover:border-amber-500'
                    }`}
                >
                  <Image
                    src={image}
                    alt={`View ${idx + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {productData.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl sm:text-3xl font-semibold text-amber-600">
                ₹{productData.price}
              </span>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">{renderStars(productData.rating)}</div>
                <span className="text-xs sm:text-sm text-gray-600">
                  {productData.rating} ({productData.reviews} reviews)
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              {productData.description}
            </p>

            {/* Details */}
            <div className="bg-white rounded-lg p-5 mb-6 border border-gray-200">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 mb-3">
                Details
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 font-medium">Material</p>
                  <p className="text-gray-900 font-semibold">{productData.material}</p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium">Dimensions</p>
                  <p className="text-gray-900 font-semibold">{productData.dimensions}</p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium">Weight</p>
                  <p className="text-gray-900 font-semibold">{productData.weight}</p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium">Stone</p>
                  <p className="text-gray-900 font-semibold">{productData.stone}</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full sm:w-auto">
              {/* Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out w-full sm:w-auto"
              >
                <FaShoppingCart className="w-5 h-5" />
                Buy Now
              </button>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300 ease-in-out w-full sm:w-auto"
              >
                Add to Cart
              </button>
            </div>

            {cartNotification && (
              <div className="bg-green-50 border border-green-500 text-green-700 text-sm px-3 py-2 rounded-md mb-4">
                ✓ Item added to cart successfully!
              </div>
            )}

            {/* Features */}
            <div className="space-y-2 border-t pt-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-lg"><IoMdArrowDropright /></span>
                <p><strong>Free Shipping</strong> on orders over $100</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg"><IoMdArrowDropright /></span>
                <p><strong>Easy Returns</strong> within 30 days</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg"><IoMdArrowDropright /></span>
                <p><strong>Authentic & Certified</strong> Jewellery guaranteed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Summary */}
          <div className="bg-white rounded-lg p-5 border border-gray-200 h-fit">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Reviews</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold text-gray-900">{productData.rating}</span>
              <div className="flex gap-1">{renderStars(productData.rating)}</div>
            </div>
            <p className="text-xs text-gray-600 mb-4">
              Based on {productData.reviews} reviews
            </p>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars, i) => (
                <div key={stars} className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="w-6">{stars}★</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full"
                      style={{ width: `${[70, 20, 5, 3, 2][i]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Reviews */}
          <div className="lg:col-span-2 space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg p-5 border border-gray-200">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={review.avatar}
                      alt={review.author}
                      width={36}
                      height={36}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{review.author}</p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">{renderStars(review.rating)}</div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-5">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden border hover:shadow-md transition"
              >
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-base font-semibold text-amber-600">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
