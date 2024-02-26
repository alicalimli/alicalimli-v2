import ProductsSection from "@/sections/products/products-section";
import AboutMe from "@/sections/about-me/about-me-section";
import ProjectsSection from "@/sections/projects/projects-section";
import StackSection from "@/sections/stack/stack-section";
import NewsletterSection from "@/sections/newsletter-section/newsletter-section";

export default function Home() {
  return (
    <>
      <NewsletterSection />

      <main className="flex flex-col gap-12 my-12">
        <ProductsSection />

        <ProjectsSection />

        <StackSection />

        <hr />

        <AboutMe />
      </main>
    </>
  );
}
