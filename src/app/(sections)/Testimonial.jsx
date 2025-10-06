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
      review: "Absolutely love my purchase! The quality is exceptional and the delivery was super fast. Will definitely shop again!",
      image: "/images/customer1.jpg",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      location: "Delhi",
      rating: 5,
      review: "Amazing collection and great customer service. The packaging was beautiful and the product exceeded my expectations.",
      image: "/images/customer2.jpg",
    },
    {
      id: 3,
      name: "Anjali Patel",
      location: "Ahmedabad",
      rating: 5,
      review: "Perfect gift for my anniversary! My wife loved it. The craftsmanship is outstanding and the price is very reasonable.",
      image: "/images/customer3.jpg",
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Jaipur",
      rating: 5,
      review: "Excellent quality and authentic products. The return policy gave me confidence to purchase. Highly recommended!",
      image: "/images/customer4.jpg",
    },
    {
      id: 5,
      name: "Kavita Reddy",
      location: "Bangalore",
      rating: 5,
      review: "Beautiful designs and great variety. The website is easy to navigate and the checkout process is smooth.",
      image: "/images/customer5.jpg",
    },
    {
      id: 6,
      name: "Amit Gupta",
      location: "Pune",
      rating: 5,
      review: "Outstanding service and product quality. Received my order within 2 days. Will definitely be a repeat customer!",
      image: "/images/customer6.jpg",
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
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
        aria-hidden="true"
      >
        ★
      </span>
    ));

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 py-8">
      <div className="max-w-7xl mx-auto px-4">

        {/* Decorative Top Border */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-6"></div>

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-slate-800 mb-3 tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-3 text-base font-light">
            Real experiences from our valued customers
          </p>
        </div>

        {/* Testimonial Slider */}
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="px-2 sm:px-3"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-xl
                              transition-all duration-300 cursor-pointer border border-slate-200 hover:border-slate-300
                              hover:-translate-y-1 p-6 min-h-[340px] sm:min-h-[360px] group">
                <figure className="flex flex-col items-center w-full">
                  {/* Customer Avatar */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-4 border border-slate-200">
                    <img
                      src={testimonial.image}
                      alt={`Customer: ${testimonial.name}`}
                      className="w-full h-full object-cover"
                      itemProp="image"
                    />
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-center flex-1">
                    <p
                      className="text-slate-600 text-sm sm:text-base leading-relaxed group-hover:text-slate-700 transition-colors"
                      itemProp="reviewBody"
                    >
                      "{testimonial.review}"
                    </p>
                  </blockquote>

                  {/* Customer Name & Location */}
                  <figcaption className="mt-4 text-center">
                    <div className="flex justify-center mb-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="font-semibold text-slate-800 group-hover:text-slate-900 transition-colors" itemProp="author">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-500 text-sm">{testimonial.location}</p>
                  </figcaption>
                </figure>
              </div>
            </article>
          ))}
        </Slider>

        {/* Decorative Bottom Border */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mt-8 mb-6"></div>
      </div>
    </section>
  );
};

export default Testimonial;
