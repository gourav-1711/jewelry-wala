"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/comman/ProductCard";
import { Button } from "@/components/ui/button";

export default function SilverCollection() {
  const products = {
    silver: [
      {
        id: 1,
        category: "Study Tables",
        name: "Caroline Study Tables",
        originalPrice: "3,000",
        currentPrice: "2,500",
        image:
          "https://i.pinimg.com/736x/e5/92/0b/e5920b357d1d2d0dd69e204df1cedd68.jpg",
      },
      {
        id: 2,
        category: "Coffee Tables",
        name: "Evan Coffee Table",
        originalPrice: "2,600",
        currentPrice: "2,300",
        image:
          "https://i.pinimg.com/1200x/89/66/75/896675055bc102e0c732c3d7b97b7e8d.jpg",
      },
      {
        id: 3,
        category: "Shoe Racks",
        name: "Gloria Shoe Racks",
        originalPrice: "3,400",
        currentPrice: "2,900",
        image:
          "https://i.pinimg.com/736x/93/01/ba/9301bab85834d09e8e5a363563fd15d4.jpg",
      },
      {
        id: 4,
        category: "Bookshelves",
        name: "Erica Bookshelfs",
        originalPrice: "36,000",
        currentPrice: "30,000",
        image:
          "https://i.pinimg.com/736x/3e/ae/17/3eae172a862a6bed8a9483cd6b2323f8.jpg",
      },
    ],
    gold: [
      {
        id: 5,
        category: "Wooden Sofa",
        name: "Sapien Sofa Cum Bed",
        originalPrice: "64,000",
        currentPrice: "54,000",
        image:
          "https://img.fantaskycdn.com/cc5378752e941575f773c918699a0b96_2056x.png",
      },
      {
        id: 6,
        category: "2 Seater Sofa",
        name: "Canthur Sheesham Wood Sofa Set",
        originalPrice: "8,000",
        currentPrice: "7,600",
        image:
          "https://i.pinimg.com/736x/0a/fe/7a/0afe7a42534114dd96986159e7a56a8b.jpg",
      },
      {
        id: 7,
        category: "Wooden Jhula",
        name: "Calina Swing Jhula",
        originalPrice: "65,000",
        currentPrice: "58,000",
        image:
          "https://i.pinimg.com/1200x/c1/fa/26/c1fa26041d1d01cf61a60223f25585cb.jpg",
      },
      {
        id: 8,
        category: "Beds",
        name: "Premium Wooden Bed",
        originalPrice: "75,000",
        currentPrice: "62,000",
        image:
          "https://i.pinimg.com/736x/4d/4e/da/4d4edac642c7b081ed5a3a4883ac334d.jpg",
      },
    ],
    gift: [
      {
        id: 9,
        category: "Decor Items",
        name: "Artistic Wall Mirror Set",
        originalPrice: "4,500",
        currentPrice: "3,200",
        image:
          "https://i.pinimg.com/1200x/7c/2c/c2/7c2cc2d46f49b1b536c69b7b42c69539.jpg",
      },
      {
        id: 10,
        category: "Throw Pillows",
        name: "Velvet Throw Pillow Collection",
        originalPrice: "2,800",
        currentPrice: "1,999",
        image:
          "https://biobeautify.com/cdn/shop/files/xpkr1537409111394-15952e6b-904b-41f0-979b-4d87d3ce7fb6.jpg?v=1735845776&width=990",
      },
      {
        id: 11,
        category: "Lamp Stands",
        name: "Decorative Brass Lamp Stand",
        originalPrice: "3,200",
        currentPrice: "2,450",
        image:
          "https://i.pinimg.com/1200x/ce/3d/62/ce3d622dbda57dd81f26061a4bbf8d54.jpg",
      },
      {
        id: 12,
        category: "Wall Art",
        name: "Modern Canvas Wall Art",
        originalPrice: "5,000",
        currentPrice: "3,800",
        image:
          "https://i.pinimg.com/736x/df/3e/dc/df3edc2c7793f7737685b80ccb7d026e.jpg",
      },
    ],
  };

  return (
    <section className="bg-gray-50 min-h-screen" id="silver-collection">
      <div className="max-w-7xl mx-auto px-4 lg:pb-10">
        <Tabs defaultValue="silver" className="w-full">
          <TabsList className="grid w-fit grid-cols-3 bg-transparent border-b border-gray-200 h-auto p-0 rounded-none gap-0 mx-auto">
            <TabsTrigger value="silver" className={Css()}>
              Silver
            </TabsTrigger>
            <TabsTrigger value="gold" className={Css()}>
              Gold
            </TabsTrigger>
            <TabsTrigger value="gift" className={Css()}>
              Gift
            </TabsTrigger>
          </TabsList>

          <h2 className="text-3xl font-bold text-amber-800 text-center mb-8 mt-6 capitalize">
            <TabsContent value="silver" className="m-0">
              Silver Collection
            </TabsContent>
            <TabsContent value="gold" className="m-0">
              Gold Collection
            </TabsContent>
            <TabsContent value="gift" className="m-0">
              Gift Collection
            </TabsContent>
          </h2>

          <TabsContent value="silver" className="m-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {products.silver.map((p, i) => (
                <div key={p.id}>
                  <ProductCard key={p.id} {...p} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gold" className="m-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {products.gold.map((p, i) => (
                <div key={p.id}>
                  <ProductCard key={p.id} {...p} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gift" className="m-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {products.gift.map((p, i) => (
                <div key={p.id}>
                  <ProductCard key={p.id} {...p} />
                </div>
              ))}
            </div>
          </TabsContent>

          <div className="flex justify-center mt-10 ">
            <Button
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 px-10 py-3 rounded-full font-semibold text-sm uppercase hover:shadow-lg hover:scale-105 transition-all"
            >
              View More
            </Button>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

const Css = () => {
  return "px-6 pt-3 pb-[14px] font-bold text-base uppercase rounded-none border-transparent text-gray-500 hover:text-gray-700 transition-all bg-transparent data-[state=active]:text-amber-800 data-[state=active]:bg-clip-padding data-[state=active]:pb-3 data-[state=active]:shadow-none data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-700 data-[state=active]:via-orange-400 data-[state=active]:to-amber-700 data-[state=active]:[background-size:100%_3px] data-[state=active]:[background-repeat:no-repeat] [background-position:bottom] data-[state=active]:animate-in";
};
