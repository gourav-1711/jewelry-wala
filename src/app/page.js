import Banner from "./(sections)/Banner";
import CategoryCarousel from "./(sections)/Category";
import MenWomen from "./(sections)/MenWomen";
import ShopByPrice from "./(sections)/ShopbyPrice";
import SilverCollection from "./(sections)/SilverCollection";
import NewArrival from "./(sections)/NewArrival";
import Featured from "./(sections)/Featured";
import Testimonial from "./(sections)/Testimonial";
import FullVideoSection from "./(sections)/video";
import GiftItems from "./(sections)/GiftItems";
import { siteConfig } from "@/lib/utils";
import { cache } from "react";

export const metadata = {
  title: `${siteConfig.name} - Premium Jewellery Store in Jodhpur | Gold, Silver & Diamond Jewellery`,
  description: `${siteConfig.description} Shop online for rings, necklaces, earrings, bracelets, and more. Free shipping across India.`,
  keywords: siteConfig.keywords.join(", "),
  openGraph: {
    title: `${siteConfig.name} - Premium Jewellery Store in Jodhpur`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Premium Jewellery Store in Jodhpur`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

// import TraditionalJewellery from "./(sections)/Traditional";
const GetBanners = cache(async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "api/website/banner",
    {
      noCache: true,
    }
  );
  const data = await response.json();
  return data._data;
});

const GetTestimonials = cache(async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "api/website/testimonial",
    {
      noCache: true,
    }
  );
  const data = await response.json();
  return data._data;
});

export default async function Home() {
  const [banners, testimonials] = await Promise.all([
    GetBanners(),
    GetTestimonials(),
  ]);

  return (
    <>
      <Banner data={banners} />
      <CategoryCarousel />
      <MenWomen />
      {/* <TraditionalJewellery/> */}
      <ShopByPrice />
      <SilverCollection />
      <Featured />
      <NewArrival />
      <FullVideoSection />
      <GiftItems />
      <Testimonial data={testimonials} />
    </>
  );
}
