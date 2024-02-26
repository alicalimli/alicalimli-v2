"use client";

import Section from "@/components/section/section";
import ItemCard from "@/components/item-card/ItemCard";
import { products } from "@/data";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";

const ProductsSection = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    window.location.href = `https://magic.beehiiv.com/v1/9732691c-dbb3-4873-b19c-1489caa9e0ba?email=${email}&redirect_to=https://alicalimli.beehiiv.com/`;
  };

  return (
    <Section title="Resources">
      <ul className="grid xs:grid-cols-2 gap-6 relative">
        <li key={products[0].title}>
          <ItemCard item={products[0]} />
        </li>

        <Dialog>
          <DialogTrigger asChild>
            <li key={products[1].title}>
              <ItemCard item={products[1]} />
            </li>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Join the Waitlist</DialogTitle>
              <DialogDescription>
                You'll be subscribed to my{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:underline text-primary"
                  href="https://alicalimli.beehiiv.com"
                >
                  newsletter
                </a>{" "}
                where you'll receive coding tips and strategies that would help
                you succeed in your web dev journey.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <form onSubmit={onSubmit} className="flex gap-2 w-full">
                <Input
                  id="name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  type="email"
                  required
                />
                <Button type="submit">Join In</Button>
              </form>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ul>
    </Section>
  );
};

export default ProductsSection;
