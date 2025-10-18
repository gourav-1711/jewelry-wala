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
      <div className="w-full h-[30vh] md:h-[50vh] lg:h-[70vh]  overflow-hidden">
        <div className=" w-full h-full">
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
                <div className="w-full h-full">
                  <Image
                    src={banner.image}
                    alt={banner.title || "Jewellery Banner"}
                    priority={true}
                    width={1920}
                    height={1080}
                    className=" w-full h-full"
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
