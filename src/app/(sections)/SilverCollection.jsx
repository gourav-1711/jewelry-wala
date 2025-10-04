"use client";
import Slider from "react-slick";

const SilverCollection = () => {
    const items = [
        { id: 1, img: "/images/silver1.webp", name: "Elegant Silver Ring" },
        { id: 2, img: "/images/silver2.webp", name: "Classic Silver Chain" },
        { id: 3, img: "/images/silver3.webp", name: "Silver Bracelet" },
        { id: 4, img: "/images/silver4.webp", name: "Designer Silver Earrings" },
        { id: 5, img: "/images/silver5.webp", name: "Pure Silver Pendant" },
        { id: 6, img: "/images/silver6.webp", name: "Silver Anklet" },
        { id: 7, img: "/images/silver7.webp", name: "Elegant Silver Ring" },
        { id: 8, img: "/images/silver8.webp", name: "Classic Silver Chain" },
        { id: 9, img: "/images/silver9.webp", name: "Silver Bracelet" },
        { id: 10, img: "/images/silver10.webp", name: "Designer Silver Earrings" },
        { id: 11, img: "/images/silver11.webp", name: "Pure Silver Pendant" },
        { id: 12, img: "/images/silver12.webp", name: "Silver Anklet" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            {/* Heading */}
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                Silver Collection
            </h2>

            {/* Slider */}
            <Slider {...settings}>
                {items.map((item) => (
                    <div key={item.id} className="px-3">
                        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg overflow-hidden p-4">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <p className="mt-4 text-lg font-medium text-gray-700">
                                {item.name}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* View More Button */}
            <div className="flex justify-center mt-8">
                <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition">
                    View More
                </button>
            </div>
        </div>
    );
};

export default SilverCollection;
