import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import SectionHeader from "@/components/section-header/section-header";

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
    <li key={product.name}>
      <Card className="flex flex-col h-full hover:bg-border/30 duration-200">
        <CardHeader className="p-4">
          <div className="flex justify-center bg-[#111] aspect-video rounded-md rounded-b-none">
            <Image
              alt={`${product.name} product image`}
              className="object-contain"
              src="/products/webdevvisuals.png"
              width={300}
              height={300}
            />
          </div>
        </CardHeader>

        <CardContent className="px-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {product.name}
          </h4>
          <p className="text-sm text-muted-foreground mt-1">
            {product.description}
          </p>
        </CardContent>

        <CardFooter className="mt-auto px-4 pb-4">
          <Button
            variant={product.link ? "default" : "outline"}
            className="w-full mt-auto mt-4"
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
        </CardFooter>
      </Card>
    </li>
  ));

  return (
    <>
      <SectionHeader
        title="Resources"
        viewAllLink="https://alicalimli.beehiiv.com/"
      />

      <main>
        <ul className="grid xs:grid-cols-2 gap-8 relative">{renderProducts}</ul>
      </main>
    </>
  );
};

export default ProductsSection;
