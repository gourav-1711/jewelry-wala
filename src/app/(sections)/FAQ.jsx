'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Orders',
      answer:
        'Once your order is placed, you will receive an email confirmation with your order details. You can track your order status through the link provided in the email or by logging into your account on our website. Please allow 1–2 business days for processing before your order ships.',
    },
    {
      question: 'Shipping',
      answer:
        'We offer nationwide shipping with trusted partners. Orders are usually delivered within 3–7 business days depending on your location. You will receive real-time tracking updates once your order is dispatched.',
    },
    {
      question: 'Returns & Exchanges',
      answer:
        'If you are not satisfied with your purchase, you can request a return or exchange within 7 days of delivery. Please ensure that the product is unused, undamaged, and in its original packaging.',
    },
    {
      question: 'Product Care',
      answer:
        'To maintain the shine of your jewellery, store it in a dry place away from moisture and chemicals. Avoid contact with perfumes or lotions. Clean gently with a soft cloth after each use.',
    },
    {
      question: 'General Inquiries',
      answer:
        'For any general questions or assistance, please contact our support team via email at support@jewellerywala.com or visit our contact page.',
    },
  ];

  return (
    <section className="bg-white text-gray-800 px-6 md:px-20 py-16 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-2xl font-sans mx-auto text-base md:text-md">
          Find answers to common questions about our products, orders, shipping, returns, and more.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <button
              className="w-full flex justify-between items-center text-left p-5 bg-gray-50 hover:bg-yellow-50 transition-colors duration-300"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-md font-sans text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-yellow-600 w-5 h-5" />
              ) : (
                <ChevronDown className="text-yellow-600 w-5 h-5" />
              )}
            </button>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100 p-5 bg-white' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-700 text-base md:text-md leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="text-center mt-16">
        <p className="text-gray-600 text-base md:text-md mb-2">Still have questions?</p>
        <a
          href="mailto:support@jewellerywala.com"
          className="text-yellow-700 font-semibold hover:underline hover:text-yellow-800 transition-colors"
        >
          Contact us at jewellerywalaonline@gmail.com
        </a>
      </div>
    </section>
  );
}
