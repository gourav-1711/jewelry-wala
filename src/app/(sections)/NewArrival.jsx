"use client";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const NewArrival = () => {
  const products = [
    {
      id: 1,
      img: "/images/image1.jpg",
      category: "EARRINGS",
      name: "Elegant Silver Earrings",
      price: "₹2,499",
      oldPrice: "₹2,999",
    },
    {
      id: 2,
      img: "/images/image2.jpg",
      category: "PENDANTS",
      name: "Stylish Silver Pendant",
      price: "₹1,899",
      oldPrice: "₹2,200",
    },
    {
      id: 3,
      img: "/images/image3.jpg",
      category: "BRACELETS",
      name: "Graceful Silver Bracelet",
      price: "₹3,200",
      oldPrice: "₹3,800",
    },
    {
      id: 4,
      img: "/images/image4.jpg",
      category: "ANKLETS",
      name: "Classic Silver Anklet",
      price: "₹2,700",
      oldPrice: "₹3,100",
    },
  ];

  return (
    <section className="py-12 bg-[#f8f8f8]" id="new-arrival">
      <div className="max-w-[1300px] w-full overflow-x-hidden mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-[#8B4513] mb-3">
            New Arrivals
          </h2>
          <div className="w-20 h-1 bg-[#8B4513] mx-auto rounded-full"></div>
        </div>

        {/* Swiper Slider */}
        <div className="py-5">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={600}
            loop={true}
            observer={true}
            observeParents={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              450: {
                slidesPerView: 1.8,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="!overflow-visible"
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-[13px] uppercase text-amber-700 tracking-wide mb-1 font-medium">
                      {item.category}
                    </p>

                    <h3 className="text-gray-800 text-[16px] font-semibold mb-1">
                      {item.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#FF6F00] font-bold text-[17px]">
                        {item.price}
                      </span>
                      <span className="text-gray-400 line-through text-[14px]">
                        {item.oldPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="p-2 border border-gray-300 rounded-full hover:bg-amber-100 transition flex-shrink-0">
                        <Heart size={16} className="text-gray-600" />
                      </button>

                      <button className="flex-1 flex items-center justify-center gap-2 bg-[#8B4513] text-white py-2.5 rounded-lg text-[14px] hover:bg-[#a05d2b] transition-all duration-300">
                        <ShoppingCart size={15} /> ADD
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <button className="bg-[#8B4513] hover:bg-[#a05d2b] text-white px-8 py-3 rounded-full text-[15px] transition-all duration-300">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
