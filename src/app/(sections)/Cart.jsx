'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, Plus, Minus, X, ChevronRight } from 'lucide-react';

const initialCartItems = [
  {
    id: '1',
    name: 'Classic Diamond Ring',
    price: 1250,
    quantity: 1,
    image: '/images/image1.jpg',
  },
  {
    id: '2',
    name: 'Elegant Pearl Necklace',
    price: 850,
    quantity: 1,
    image: '/images/image2.jpg',
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [couponInput, setCouponInput] = useState('');
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponInput.toUpperCase() === 'SAVE20') {
      setDiscount(0.2);
      setAppliedCoupon('SAVE20');
      setCouponInput('');
    } else {
      alert('Invalid coupon code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * discount;
  const finalSubtotal = subtotal - discountAmount;
  const shipping = finalSubtotal > 100 ? 0 : 15;
  const estimatedTotal = finalSubtotal + shipping;

  return (
    <>
      <main className="bg-gray-50 py-10 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <a href="#" className="text-amber-600 hover:underline">
              Shopping Bag
            </a>
            <ChevronRight size={14} />
            <span className="text-gray-900">Checkout</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Shopping Bag <span className="text-amber-600">({cartItems.length})</span>
          </h1>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg p-4 sm:p-5 shadow-sm border border-gray-100 hover:shadow-md transition"
                  >
                    <div className="flex gap-4 sm:gap-6 items-center">
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden border border-gray-200">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={112}
                          height={112}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                              {item.name}
                            </h3>
                            <p className="text-lg sm:text-xl font-bold text-amber-600">
                              ${item.price}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-500 hover:text-red-500"
                          >
                            <X size={18} />
                          </button>
                        </div>

                        {/* Quantity */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-gray-100 rounded"
                          >
                            <Minus size={16} className="text-gray-600" />
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, parseInt(e.target.value))
                            }
                            className="w-12 text-center border border-gray-300 rounded text-sm"
                            min="1"
                          />
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-gray-100 rounded"
                          >
                            <Plus size={16} className="text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 sticky top-24">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

                  {/* Coupon */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Coupon Code
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-amber-600"
                      />
                      <button
                        onClick={applyCoupon}
                        className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition text-sm font-medium"
                      >
                        Apply
                      </button>
                    </div>
                    {appliedCoupon && (
                      <p className="text-green-600 text-sm mt-2">✓ {appliedCoupon} applied</p>
                    )}
                    <p className="text-xs text-gray-500 mt-2">Try: SAVE20</p>
                  </div>

                  {/* Price Summary */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount ({(discount * 100).toFixed(0)}%)</span>
                        <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold text-gray-900">
                        {shipping === 0 ? (
                          <span className="text-green-600">Free</span>
                        ) : (
                          `$${shipping.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between items-center text-base">
                      <span className="font-bold text-gray-900">Estimated Total</span>
                      <span className="text-xl font-bold text-amber-600">
                        ${estimatedTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 space-y-3">
                    <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition">
                      Proceed to Checkout
                    </button>
                    <button className="w-full bg-white border border-gray-300 text-gray-700 hover:border-amber-500 font-medium py-3 rounded-lg transition">
                      Continue Shopping
                    </button>
                  </div>

                  <div className="mt-6 border-t border-gray-200 pt-4 text-xs text-gray-600 space-y-1">
                    <p>✓ Free shipping on orders over $100</p>
                    <p>✓ 30-day return policy</p>
                    <p>✓ Secure checkout with SSL encryption</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-12 text-center shadow-md">
              <ShoppingCart size={56} className="mx-auto text-gray-300 mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-6 text-sm">Start shopping to add items to your cart</p>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2.5 px-6 rounded-lg transition">
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
