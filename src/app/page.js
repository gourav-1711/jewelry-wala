import Image from "next/image";
import Banner from "./(sections)/Banner";
import CategoryCarousel from "./(sections)/Category";
import MenWomen from "./(sections)/MenWomen";
import ShopByPrice from "./(sections)/ShopbyPrice";
import SilverCollection from "./(sections)/SilverCollection";
import NewArrival from "./(sections)/NewArrival";
import Featured from "./(sections)/Featured";
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
    </>
  );
}
