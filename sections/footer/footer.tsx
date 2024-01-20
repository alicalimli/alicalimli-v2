import React from "react";
import { NewsletterCard } from "./newsletter-card";

import SocialLinks from "@/components/social-links/social-links";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <NewsletterCard />

      <div className="flex items-center mt-2">
        <p className="text-xs text-muted-foreground">
          © {currentYear} Designed and Developed by Ali Calimli.
        </p>

        <SocialLinks className="ml-auto" />
      </div>
    </footer>
  );
};

export default Footer;
