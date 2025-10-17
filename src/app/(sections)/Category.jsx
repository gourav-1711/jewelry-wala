"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

export default function RoundCategorySlider() {
  const categories = [
    { id: 1, title: "Necklace Set", image: "/images/cat1.jpeg" },
    { id: 2, title: "Earrings", image: "/images/cat2.jpeg" },
    { id: 3, title: "Chain Pendant", image: "/images/cat3.jpeg" },
    { id: 4, title: "Bangles", image: "/images/cat4.jpeg" },
    { id: 5, title: "Finger Ring", image: "/images/cat5.jpeg" },
    { id: 6, title: "MangalSutra", image: "/images/cat6.jpeg" },
    { id: 7, title: "Men's Bracelet", image: "/images/cat7.jpeg" },
    { id: 8, title: "Women's Bracelet", image: "/images/cat8.jpeg" },
    { id: 9, title: "Juda", image: "/images/cat9.jpeg" },
    { id: 10, title: "Saree Pin", image: "/images/cat10.jpeg" },
  ];

  return (
    <section className="w-full py-6">
      {/* Heading */}
      <div className="text-center mb-5 font-serif">
        <h2 className="text-2xl sm:text-3xl text-gray-800 relative inline-block">
          Discover Our Collection
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[70%] h-[3px] bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-full shadow-lg"></span>
          <span className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-[50%] h-[2px] bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></span>
        </h2>
      </div>

      {/* Slider */}
      <div className="max-w-[1200px] mx-auto py-2">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          speed={2000}
          breakpoints={{
            320: {
              slidesPerView: 2.5,
              spaceBetween: 5,
            },
            480: {
              slidesPerView: 3.1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 6.5,
              spaceBetween: 10,
            },
          }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <article
                className="flex flex-col items-center px-2 sm:px-3 group cursor-pointer"
                itemScope
                itemType="https://schema.org/Thing"
              >
                <div
                  className="
                     rounded-full overflow-hidden border-2 border-[rgb(192,149,120)]
                    flex items-center justify-center mx-auto transition-all duration-300
                        group-hover:translate-y-[10px]  
                         group-hover:border-yellow-400     
                           group-hover:scale-[1.03] 
                                    group-hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)]    
                                  "
                >
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={150}
                    height={150}
                    className="object-cover w-full h-full transition-transform duration-300  group-hover:scale-110 group-hover:shadow-2xl group-hover:border-yellow-400"
                    itemProp="image"
                  />
                </div>
                <p
                  className="mt-2 text-sm sm:text-base font-medium text-gray-700 text-center leading-tight whitespace-nowrap
                             transition-all duration-300 group-hover:text-yellow-600 group-hover:scale-105"
                  itemProp="name"
                >
                  {cat.title}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
