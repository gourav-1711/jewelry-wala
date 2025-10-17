"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Banner({ data }) {
  return (
    <>
      <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden">
        <div className="relative w-full h-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-full w-full"
          >
            {data.map((banner, index) => (
              <SwiperSlide key={banner.id}>
                <div className="w-full h-full relative">
                  <Image
                    src={banner.image}
                    alt={banner.title || "Jewellery Banner"}
                    fill
                    loading="lazy"
                    priority={index === 0}
                    className="object-cover object-center"
                    sizes="100vw"
                    quality={90}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
