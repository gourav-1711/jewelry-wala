import Image from "next/image";
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
export default function Home() {
  return (
    <>
    <Banner/>
    <CategoryCarousel/>
    <MenWomen/>
    <ShopByPrice/>
    <SilverCollection/>
    <Featured/>
    <NewArrival/>
    <FullVideoSection/>
    <GiftItems/>
    <Testimonial/>
    </>
  );
}
