import ProductListing from "@/app/(sections)/ProductListing";
import React from "react";
import { siteConfig } from "@/lib/utils";
import FilterSidebar from "../FilterSidebar";

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
  return (
    <div className="bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8">
        <div className="flex  lg:gap-8 py-8">
          <div className="">
            <FilterSidebar />
          </div>
          <main className="flex-1">
            <ProductListing />
          </main>
        </div>
      </div>
    </div>
  );
}
