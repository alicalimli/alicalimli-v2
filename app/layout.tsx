import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Profile from "@/sections/profile/Profile";
import { NewsletterCard } from "@/sections/newsletter/newsletter-card";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ali Calimli - Front-end Developer",
  description:
    "Focused on building high-quality websites that are also visually appealing and easy to use.",
  keywords:
    "ali, ali calimli, calimli, ac, Ali, Calimli, Ali Calimli, alicalimli, alicalimli_dev, web development, frontend dev, learn, level up, visuals, simplified visuals, web developer, Front-end development, HTML, CSS, JavaScript, React, visuals, webdevvisuals, web development visuals",
  openGraph: {
    title: "Ali Calimli - Front-end Developer",
    description:
      "Focused on building high-quality websites that are also visually appealing and easy to use.",
    url: "https://alicalimli.com/",
    siteName: "Ali Calimli",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto p-4 py-24 flex flex-col gap-12",
          inter.variable
        )}
      >
        <Profile />

        {children}

        <NewsletterCard />

        <Toaster richColors closeButton />
      </body>
    </html>
  );
}
