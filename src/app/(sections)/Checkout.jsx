"use client"  
import React, { useState } from 'react';
import { ShoppingBag, Search, User, Heart, Trash2 } from 'lucide-react';

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'United States',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [orderItems, setOrderItems] = useState([
    { id: 1, name: 'Elegant Diamond Necklace', price: 850, quantity: 1, image: '💎' },
    { id: 2, name: 'Classic Gold Earrings', price: 400, quantity: 2, image: '✨' },
  ]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxes = Math.round(subtotal * 0.08 * 100) / 100;
  const total = subtotal + taxes;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const formatCardNumber = (value) => {
    return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const formatExpiryDate = (value) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
    }
    return cleaned;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';

    if (paymentMethod === 'credit') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      alert('✅ Order placed successfully! Order total: $' + total.toFixed(2));
      setIsSubmitting(false);
    }, 1500);
  };

  const removeItem = (id) => {
    setOrderItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
     

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div className="text-xs sm:text-sm text-gray-600 mb-6">
          <a href="#" className="text-yellow-600 hover:underline">Shopping Bag</a>
          <span className="mx-2">/</span>
          <span className="font-semibold text-gray-900">Checkout</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Shipping Information */}
              <div className="bg-white rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-5">Shipping Information</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your address"
                      className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter your city"
                        className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="Enter postal code"
                        className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.postalCode ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.postalCode && <p className="text-xs text-red-500 mt-1">{errors.postalCode}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>India</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Payment Method</h2>

                <div className="flex gap-4 mb-5">
                  <button
                    onClick={() => setPaymentMethod('credit')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium text-sm transition ${paymentMethod === 'credit' ? 'border-yellow-500 bg-yellow-50 text-yellow-700' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                  >
                    Credit Card
                  </button>
                  <button
                    onClick={() => setPaymentMethod('wallet')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 font-medium text-sm transition ${paymentMethod === 'wallet' ? 'border-yellow-500 bg-yellow-50 text-yellow-700' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                  >
                    Digital Wallet
                  </button>
                </div>

                {paymentMethod === 'credit' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData(prev => ({ ...prev, cardNumber: formatCardNumber(e.target.value) }))}
                        placeholder="XXXX XXXX XXXX XXXX"
                        maxLength="19"
                        className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 font-mono ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.cardNumber && <p className="text-xs text-red-500 mt-1">{errors.cardNumber}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={(e) => setFormData(prev => ({ ...prev, expiryDate: formatExpiryDate(e.target.value) }))}
                          placeholder="MM/YY"
                          maxLength="5"
                          className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 font-mono ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.expiryDate && <p className="text-xs text-red-500 mt-1">{errors.expiryDate}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={(e) => setFormData(prev => ({ ...prev, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) }))}
                          placeholder="123"
                          maxLength="4"
                          className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 font-mono ${errors.cvv ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.cvv && <p className="text-xs text-red-500 mt-1">{errors.cvv}</p>}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Review */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200 sticky top-24">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-5">Order Review</h2>

              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex gap-3 pb-4 border-b border-gray-200">
                    <div className="text-3xl">{item.image}</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{item.name}</p>
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-sm font-semibold text-yellow-600 mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="space-y-3 py-4 border-t border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-gray-900">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Taxes</span>
                  <span className="font-medium text-gray-900">${taxes.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-4 mb-6">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-yellow-600">${total.toFixed(2)}</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={isSubmitting || orderItems.length === 0}
                className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 text-white font-bold py-3 rounded-lg transition text-sm sm:text-base"
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}