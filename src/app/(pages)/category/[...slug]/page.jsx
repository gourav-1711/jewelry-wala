import ProductListing from "@/app/(sections)/ProductListing";
import React from "react";
import { siteConfig } from "@/lib/utils";

export const metadata = {
  title: `Shop Jewellery Online - ${siteConfig.name} | Gold, Silver & Diamond Collection`,
  description: `Browse our extensive collection of premium jewellery in Jodhpur. Shop rings, necklaces, earrings, bracelets, bangles, and more. Gold, silver, and diamond jewellery with traditional Rajasthani craftsmanship.`,
  keywords: `buy jewellery online jodhpur, gold jewellery collection, silver jewellery shop, diamond jewellery store, bridal jewellery, traditional jewellery, ${siteConfig.categories.join(
    ", "
  )}`,
  openGraph: {
    title: `Shop Premium Jewellery - ${siteConfig.name}`,
    description:
      "Explore our curated collection of exquisite jewellery pieces. From traditional to contemporary designs.",
    url: `${siteConfig.url}/category`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/category`,
  },
};

export default function page() {
  return <ProductListing />;
}
