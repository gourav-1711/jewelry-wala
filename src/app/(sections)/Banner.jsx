'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const banners = [
    {
      id: 1,
      image: '/images/image1.jpeg',
      alt: 'Jewellery Collection 1'
    },
    {
      id: 2,
      image: '/images/image2.jpeg',
      alt: 'Jewellery Collection 2'
    },
    {
      id: 3,
      image: '/images/image3.jpeg',
      alt: 'Jewellery Collection 3'
    },
    {
      id: 4,
      image: '/images/image4.jpeg',
      alt: 'Jewellery Collection 4'
    },
    {
      id: 5,
      image: '/images/image5.jpeg',
      alt: 'Jewellery Collection 5'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [banners.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <>
      <div className='w-full h-auto relative overflow-hidden group'>
        <div className='relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[550px]'>
          {/* Slider Container */}
          <div
            className='flex transition-transform duration-500 ease-in-out h-full'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {banners.map((banner, index) => (
              <div key={banner.id} className='min-w-full h-full relative'>
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                  quality={90}
                />
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className='absolute left-2 sm:left-4  top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 lg:block hidden rounded-full shadow-lg transition-all duration-300'
            aria-label="Previous slide"
          >
            <FaChevronLeft className='text-gray-800 text-base hidden lg:block ' />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className='absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 lg:block hidden rounded-full shadow-lg transition-all duration-300'
            aria-label="Next slide"
          >
            <FaChevronRight className='text-gray-800 text-base hidden lg:block ' />
          </button>

          {/* Navigation Dots */}
          {/* <div className='absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10'>
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-white w-6 sm:w-8'
                    : 'bg-white/60 hover:bg-white/80 w-1.5 sm:w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </>
  )
}
