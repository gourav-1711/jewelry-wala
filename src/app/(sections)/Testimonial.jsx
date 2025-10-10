"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      review:
        "Absolutely love my purchase! The quality is exceptional and delivery was super fast. Will definitely shop again!",
      image: "/images/me.jpg",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      location: "Delhi",
      rating: 5,
      review:
        "Amazing collection and great customer service. The packaging was beautiful and exceeded my expectations.",
      image: "/images/me.jpg",
    },
    {
      id: 3,
      name: "Anjali Patel",
      location: "Ahmedabad",
      rating: 5,
      review:
        "Perfect gift for my anniversary! My wife loved it. The craftsmanship is outstanding and price very reasonable.",
      image: "/images/me.jpg",
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Jaipur",
      rating: 5,
      review:
        "Excellent quality and authentic products. The return policy gave me confidence to purchase. Highly recommended!",
      image: "/images/me.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-base sm:text-lg ${
          index < rating ? "text-amber-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));

  return (
    <section
      className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 py-10"
      itemScope
      itemType="https://schema.org/Review"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-800 mb-2">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Real experiences from our valued customers
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.id} className="px-2 sm:px-3">
              <article
                className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg 
                           transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col items-center text-center"
                itemScope
                itemType="https://schema.org/Review"
              >
                {/* Avatar */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-4 border border-gray-200">
                  <img
                    src={t.image}
                    alt={`Customer ${t.name}`}
                    className="w-full h-full object-cover"
                    itemProp="image"
                  />
                </div>

                {/* Review Text */}
                <blockquote className="flex-1">
                  <p
                    className="text-gray-600 text-sm sm:text-base leading-relaxed"
                    itemProp="reviewBody"
                  >
                    "{t.review}"
                  </p>
                </blockquote>

                {/* Stars */}
                <div className="flex justify-center mt-4">{renderStars(t.rating)}</div>

                {/* Name & Location */}
                <figcaption className="mt-2">
                  <p
                    className="font-semibold text-gray-800 text-sm sm:text-base"
                    itemProp="author"
                  >
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">{t.location}</p>
                </figcaption>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
