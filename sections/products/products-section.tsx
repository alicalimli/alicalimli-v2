import { ArrowRightIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const products = [
  {
    name: "WebDevVisuals",
    description:
      "A platform to learn tips & tricks that would take your web dev skills to the next level all in one place.",
    cta: "Learn more",
    link: "https://www.webdevvisuals.com/",
  },
  {
    name: "Essential Tips & Tricks",
    description:
      "Essential tips and tricks that would level up your website and your visitors user experience.",
    cta: "Build In Progress",
    link: "",
  },
];

const ProductsSection = () => {
  const renderProducts = products.map((product) => (
    <li key={product.name} className="h-full flex flex-col">
      <div className="flex justify-center bg-[#111] rounded-xl aspect-video">
        <Image
          className="object-contain"
          src="/products/webdevvisuals.png"
          width={300}
          height={300}
        />
      </div>

      <CardTitle className="text-xl mt-4">{product.name}</CardTitle>
      <CardDescription className="mb-8 mt-1 leading-6">
        {product.description}
      </CardDescription>

      <Button
        variant={product.link ? "default" : "outline"}
        className="w-full mt-auto"
        asChild
      >
        <a
          className={product.link ? "" : "pointer-events-none"}
          rel="noopener noreferrer"
          target="_blank"
          href={product.link}
        >
          {product.cta}
        </a>
      </Button>
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
        <ul className="grid grid-cols-2 gap-8 relative">{renderProducts}</ul>
      </main>
    </>
  );
};

export default ProductsSection;
