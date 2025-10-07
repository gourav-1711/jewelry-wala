"use client";

const NewArrival = () => {
  const products = [
    { id: 1, img: "/images/silver1.webp", name: "Elegant Silver Ring", price: "₹2,499" },
    { id: 2, img: "/images/silver2.webp", name: "Classic Silver Chain", price: "₹4,999" },
    { id: 3, img: "/images/silver3.webp", name: "Silver Bracelet", price: "₹1,899" },
    { id: 4, img: "/images/silver4.webp", name: "Designer Earrings", price: "₹3,299" },
  ];

  return (
    <section
      aria-label="New Arrival Jewellery Collection"
      className="w-full bg-gray-50 py-8"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-serif text-gray-800 mb-2 tracking-wide">
            New Arrival
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full mb-2"></div>
          <p className="text-gray-500 text-sm font-light max-w-sm mx-auto">
            Discover our latest crafted silver designs that bring elegance to every moment.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="w-full h-44 md:h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Name & Price */}
              <div className="px-3 py-2">
                <h3 className="text-gray-700 font-medium text-sm mb-1 group-hover:text-gray-900 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-800 font-semibold text-sm">{item.price}</p>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-6">
          <button className="px-5 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-md hover:from-gray-800 hover:to-gray-900 hover:shadow-md transition-all duration-300 text-sm font-medium">
            Explore More Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
