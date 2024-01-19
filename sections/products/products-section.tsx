import * as React from "react";

import Section from "@/components/section/section";
import ItemCard from "@/components/item-card/ItemCard";
import { products } from "@/data";

const ProductsSection = () => {
  const renderProducts = products.map((product) => (
    <li key={product.title}>
      <ItemCard item={product} />
    </li>
  ));

  return (
    <Section title="Resources">
      <ul className="grid xs:grid-cols-2 gap-8 relative">{renderProducts}</ul>
    </Section>
  );
};

export default ProductsSection;
