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
        Hey, Ali Here! 👋
        <br />
        I'm a Front-end Developer and I Create Web Development Content.
      </p>

      <p>
        I help aspiring developers succeed in their web dev journey by sharing
        useful stuffs and lessons from my own experience.
      </p>

      <p>
        I'm specialized in creating high quality websites and webapps that are
        not just visually appealing but also gives an awesome user experience.
      </p>

      <p className="mb-2">
        Let's chat! Hit me up on the form below or in any of my socials.
      </p>

      <footer className="relative">
        <ContactSection />
      </footer>
    </section>
  );
};

export default AboutMe;
