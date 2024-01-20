import NewsletterSection from "../sections/newsletter/newsletter-section";
import ProductsSection from "@/sections/products/products-section";
import AboutMe from "@/sections/about-me/about-me-section";
import ProjectsSection from "@/sections/projects/projects-section";
import StackSection from "@/sections/stack/stack-section";

export default function Home() {
  return (
    <>
      <NewsletterSection />

      <ProductsSection />

      <ProjectsSection />

      <StackSection />

      <hr />

      <AboutMe />
    </>
  );
}
