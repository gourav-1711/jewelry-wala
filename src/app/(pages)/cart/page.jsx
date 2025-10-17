import Cart from "@/app/(sections)/Cart";
import React from "react";
import { siteConfig } from "@/lib/utils";

export const metadata = {
  title: `Shopping Cart - ${siteConfig.name}`,
  description: "Review your selected jewellery items and proceed to checkout.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function page() {
  return <Cart />;
}
