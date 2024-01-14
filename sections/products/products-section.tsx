import { ArrowRightIcon, BookIcon, BookOpenTextIcon } from "lucide-react";
import { ProductCard } from "./product-card";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const products = [
  {
    name: "WebDevVisuals",
    description:
      "A platform to learn tips & tricks that would take your web dev skills to the next level all in one place.",
    price: 19.99,
    link: "https://example.com/product1",
  },
  {
    name: "Product 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nobis omnis minus doloribus ratione incidunt.",
    price: 29.99,
    link: "https://example.com/product2",
  },
];

const ProductsSection = () => {
  const renderProducts = products.map((product) => (
    <li key={product.name}>
      <Card className="h-full flex flex-col">
        <CardHeader>
          <div className="flex justify-center bg-muted rounded-md">
            <Image src="/products/webdevvisuals.png" width={300} height={300} />
          </div>
          <CardTitle className="text-xl">{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between gap-2 mt-auto">
          <Button className="w-full">Buy Now</Button>
        </CardFooter>
      </Card>
    </li>
  ));

  return (
    <>
      <header className="flex">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Products
        </h3>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://alicalimli.beehiiv.com/"
          className="ml-auto flex items-center gap-2 text-sm"
        >
          View All Products <ArrowRightIcon className="w-5" />
        </a>
      </header>

      <main>
        <ul className="grid grid-cols-2 gap-4 relative">{renderProducts}</ul>
      </main>
    </>
  );
};

export default ProductsSection;
