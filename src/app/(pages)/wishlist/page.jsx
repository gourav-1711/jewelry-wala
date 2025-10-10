import Wishlist from '@/app/(sections)/Wishlist';
import React from 'react'



export const metadata = {
    title: "wishlist",
    description:
      "wishlist Page",
  };

export default function page() {
  return (
    <div>
      <Wishlist />
    </div>
  )
}
