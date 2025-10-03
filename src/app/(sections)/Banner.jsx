import React from 'react'
import Image from 'next/image'

export default function Banner() {
  return (
    <>
      <div className='w-full h-auto relative'>
        <div className='relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px]'>
          <Image
            src="/images/banner.jpg"
            alt="Jewellery Wala Banner"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
        </div>
      </div>
    </>
  )
}
