import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import ContactSection from "./contact-form";

interface AboutMeProps {}

const AboutMe = ({}: AboutMeProps) => {
  return (
    <section className="flex flex-col gap-4 leading-7 text-muted-foreground text-lg">
      <Avatar className="w-20 h-20">
        <AvatarImage src="/alicalimli.jpg" alt="Ali Calimli's Profile" />
        <AvatarFallback>AL</AvatarFallback>
      </Avatar>

      <p className="text-white/85 font-semibold">
        Hey I'm Ali. 👋
        <br />
        I'm a Front-end Developer and I Create Web Development Content.
      </p>

      <p>
        I help aspiring developers succeed in their web development journey by
        providing valuable knowledge that I have learned throughout my own web
        dev journey.
      </p>

      <p>
        I'm focused on building high-quality websites that is also visually
        appealing and easy to use.
      </p>

      <p className="mb-2">
        Feel free to reach out through the form below or message me on my
        socials"
      </p>

      <footer className="relative">
        <ContactSection />
      </footer>
    </section>
  );
};

export default AboutMe;
