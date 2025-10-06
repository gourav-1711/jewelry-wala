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
            image: "/images/customer1.jpg"
        },
        {
            id: 2,
            name: "Rahul Kumar",
            location: "Delhi",
            rating: 5,
            review: "Amazing collection and great customer service. The packaging was beautiful and the product exceeded my expectations.",
            image: "/images/customer2.jpg"
        },
        {
            id: 3,
            name: "Anjali Patel",
            location: "Ahmedabad",
            rating: 5,
            review: "Perfect gift for my anniversary! My wife loved it. The craftsmanship is outstanding and the price is very reasonable.",
            image: "/images/customer3.jpg"
        },
        {
            id: 4,
            name: "Vikram Singh",
            location: "Jaipur",
            rating: 5,
            review: "Excellent quality and authentic products. The return policy gave me confidence to purchase. Highly recommended!",
            image: "/images/customer4.jpg"
        },
        {
            id: 5,
            name: "Kavita Reddy",
            location: "Bangalore",
            rating: 5,
            review: "Beautiful designs and great variety. The website is easy to navigate and the checkout process is smooth.",
            image: "/images/customer5.jpg"
        },
        {
            id: 6,
            name: "Amit Gupta",
            location: "Pune",
            rating: 5,
            review: "Outstanding service and product quality. Received my order within 2 days. Will definitely be a repeat customer!",
            image: "/images/customer6.jpg"
        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 425,
                settings: { slidesToShow: 1 },
            }
        ],
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                ★
            </span>
        ));
    };

    return (
        <div className="w-full bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 py-1 lg:py-3">
            {/* Decorative top border */}
            <div className="max-w-7xl mx-auto">
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-4 sm:mb-6 lg:mb-6"></div>

                {/* Heading Section */}
                <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-slate-800 mb-2 sm:mb-3 tracking-wide">
                        What Our Customers Say
                    </h2>
                    <div className="w-16 sm:w-20 lg:w-24 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full"></div>
                    <p className="text-slate-600 mt-2 sm:mt-3 text-sm sm:text-base font-light">
                        Real experiences from our valued customers
                    </p>
                </div>

                {/* Testimonial Slider */}
                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="px-2 sm:px-3">
                            <div className="flex flex-col items-center bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer
                                         border border-slate-200 hover:border-slate-300 hover:-translate-y-1 min-h-[320px] sm:min-h-[360px] lg:min-h-[250px] group p-4 sm:p-6">
                                <div className="flex flex-col h-6">
                                    {/* Customer Info */}
                                    <div className="flex items-center mb-3 sm:mb-4">
                                        <div className="w-12 h-6 sm:w-14 sm:h-14 rounded-full bg-slate-200 flex items-center justify-center mr-3 sm:mr-4">
                                            <span className="text-slate-600 font-bold text-lg sm:text-xl">
                                                {testimonial.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-800 text-sm sm:text-base group-hover:text-slate-900 transition-colors">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-slate-500 text-xs sm:text-sm">{testimonial.location}</p>
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center mb-3 sm:mb-4">
                                        {renderStars(testimonial.rating)}
                                    </div>

                                    {/* Review */}
                                    <div className="flex-1">
                                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed group-hover:text-slate-700 transition-colors">
                                            "{testimonial.review}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Decorative bottom border */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mt-6 sm:mt-8 lg:mt-10 mb-4 sm:mb-6 lg:mb-8"></div>

            </div>
        </div>
    );
};

export default Testimonial;