import Wishlist from "@/app/(sections)/Wishlist";
import React from "react";
import { siteConfig } from "@/lib/utils";

export const metadata = {
  title: `My Wishlist - ${siteConfig.name}`,
  description:
    "Save your favorite jewellery pieces to your wishlist for easy access later.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function page() {
  return (
    <div>
      <Wishlist />
    </div>
  );
}
