"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GiftItems = () => {
    const products = [
        { id: 1, img: "/images/image1.jpeg", name: "Silver Gift Box", price: "₹499" },
        { id: 2, img: "/images/image2.jpeg", name: "Heart Pendant", price: "₹799" },
        { id: 3, img: "/images/image3.jpeg", name: "Couple Bracelet", price: "₹999" },
        { id: 4, img: "/images/image4.jpeg", name: "Love Ring Set", price: "₹1199" },
        { id: 5, img: "/images/image5.jpeg", name: "Designer Watch", price: "₹1499" },
        { id: 6, img: "/images/image1.jpeg", name: "Customized Keychain", price: "₹599" },
        { id: 7, img: "/images/image2.jpeg", name: "Golden Rose", price: "₹899" },
        { id: 8, img: "/images/image3.jpeg", name: "Teddy & Mug Combo", price: "₹699" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="w-full bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 py-3 lg:py-5">
            {/* Decorative top border */}
            <div className="max-w-7xl mx-auto">
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-4 sm:mb-6 lg:mb-8"></div>

                {/* Heading Section */}
                <div className="text-center mb-6 sm:mb-8 lg:mb-7">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-slate-800 mb-2 sm:mb-3 tracking-wide">
                        Perfect Gift Collection
                    </h2>
                    <div className="w-16 sm:w-20 lg:w-24 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full"></div>
                    <p className="text-slate-600 mt-2 sm:mt-3 text-sm sm:text-base font-light">
                        Thoughtful gifts for your loved ones
                    </p>
                </div>

                {/* Slider */}
                <Slider {...settings}>
                    {products.map((item) => (
                        <div key={item.id} className="px-2 sm:px-3">
                            <div className="flex flex-col items-center bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer
                                         border border-slate-200 hover:border-slate-300 hover:-translate-y-1 min-h-[280px] sm:min-h-[320px] lg:min-h-[260px] group">
                                <div className="p-3 sm:p-4 flex flex-col">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-32 sm:h-36 lg:h-40 object-cover rounded-md mb-3 group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="flex flex-col justify-between flex-1 text-center">
                                        <p className="text-slate-700 font-medium text-sm sm:text-base mb-1 sm:mb-2 group-hover:text-slate-900 transition-colors leading-tight">
                                            {item.name}
                                        </p>
                                        <p className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                                            {item.price}
                                        </p>
                                        <div className="w-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 mx-auto rounded-full
                                                      group-hover:w-12 transition-all duration-300"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Decorative bottom border */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mt-6 sm:mt-8 lg:mt-7 mb-4 sm:mb-6 lg:mb-7"></div>

                {/* View More Button */}
                <div className="flex justify-center pb-2 sm:pb-3 lg:pb-4">
                    <button className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-md
                                     hover:from-slate-800 hover:to-slate-900 hover:shadow-md hover:-translate-y-0.5
                                     transition-all duration-300 font-medium text-sm sm:text-base">
                        Explore All Gifts
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GiftItems;
