import NewsletterSection from "../sections/newsletter/newsletter-section";
import ProductsSection from "@/sections/products/products-section";
import Profile from "@/sections/profile/Profile";
import AboutMe from "@/sections/about-me/about-me-section";
import { NewsletterCard } from "@/sections/newsletter/newsletter-card";
import ProjectsSection from "@/sections/projects/projects-section";
import StackSection from "@/sections/stack/stack-section";
import ContactSection from "@/sections/about-me/contact-form";

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
