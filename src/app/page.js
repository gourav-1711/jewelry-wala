import Image from "next/image";
import Banner from "./(sections)/Banner";
import CategoryCarousel from "./(sections)/Category";
import MenWomen from "./(sections)/MenWomen";
import ShopByPrice from "./(sections)/ShopbyPrice";
import SilverCollection from "./(sections)/SilverCollection";
export default function Home() {
  return (
    <>
    <Banner/>
    <CategoryCarousel/>
    <MenWomen/>
    <ShopByPrice/>
    <SilverCollection/>
    </>
  );
}
