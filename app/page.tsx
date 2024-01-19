import NewsletterSection from "../sections/newsletter/newsletter-section";
import ProductsSection from "@/sections/products/products-section";
import Profile from "@/sections/profile/Profile";
import AboutMe from "@/sections/about-me/AboutMe";
import { NewsletterCard } from "@/sections/newsletter/newsletter-card";
import ProjectsSection from "@/sections/projects/projects-section";
import StackSection from "@/sections/stack/stack-section";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto min-h-screen p-4 py-24 flex flex-col gap-12">
      <Profile />

      <NewsletterSection />

      <ProductsSection />

      <ProjectsSection />

      <StackSection />

      <AboutMe />

      <NewsletterCard />
    </main>
  );
}
