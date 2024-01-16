import NewsletterSection from "../sections/newsletter/newsletter-section";
import ProductsSection from "@/sections/products/products-section";
import { useState } from "react";
import Profile from "@/sections/profile/Profile";
import AboutMe from "@/sections/about-me/AboutMe";
import { NewsletterCard } from "@/sections/newsletter/newsletter-card";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto min-h-screen p-4 py-24 flex flex-col gap-8">
      <header>
        <Profile />
      </header>

      <section>
        <NewsletterSection />
      </section>

      <section>
        <ProductsSection />
      </section>

      <section>
        <AboutMe />
      </section>

      <section>
        <NewsletterCard />
      </section>
    </main>
  );
}
