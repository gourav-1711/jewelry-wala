import ProductListing from '@/app/(sections)/ProductListing';
import React from 'react'



export const metadata = {
    title: "Product Listing",
    description:
      "Product Listing Page",
  };

export default function page() {
  return (
    <div>
        <ProductListing />
    </div>
  )
}
