import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NewsletterSection from "../sections/newsletter/newsletter-section";
import ProductsSection from "@/sections/products/products-section";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto min-h-screen p-4 py-24">
      <header className="">
        <Avatar className="w-24 h-24">
          <AvatarImage src="/alicalimli.jpg" alt="Ali Calimli's Profile" />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>

        <h2 className="scroll-m-20 text-3xl font-semibold mt-2 tracking-tight">
          Ali Calimli
        </h2>
        <p className="text-xl text-white/80">
          Front-end Developer & Content Creator
        </p>

        <p className="text-xl text-muted-foreground mt-3">
          Focused on building awesome and high-quality websites that are also
          visually appealing and easy to use.
        </p>
      </header>

      <section className="mt-8 flex flex-col gap-4">
        <NewsletterSection />
      </section>

      <section className="mt-8 flex flex-col gap-4">
        <ProductsSection />
      </section>
    </main>
  );
}
