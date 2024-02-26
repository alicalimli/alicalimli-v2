"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SocialLinks from "@/components/social-links/social-links";
import NewsletterSection from "../newsletter-section/newsletter-section";

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    window.location.href = `https://magic.beehiiv.com/v1/9732691c-dbb3-4873-b19c-1489caa9e0ba?email=${email}&redirect_to=https://alicalimli.com/`;
  };

  return (
    <header>
      <Avatar className="w-24 h-24">
        <AvatarImage src="/alicalimli.jpg" alt="Ali Calimli's Profile" />
        <AvatarFallback>AL</AvatarFallback>
      </Avatar>

      <h2 className="scroll-m-20 text-2xl sm:text-3xl font-semibold my-2 tracking-tight flex items-center gap-2">
        Ali Calimli
        <Image
          src="/verified-badge.png"
          width={25}
          height={25}
          alt="verified badge"
        />
        <SocialLinks iconSize="w-6 h-6" />
      </h2>

      <p className="text-md sm:text-xl  text-muted-foreground">
        I send 1k+ developers tips, strategies, and resources that would help
        them succeed in their web development journey.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col xs:flex-row gap-2 w-full items-center mt-4"
      >
        <Input
          className="h-11"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />
        <Button size="lg" className="w-full xs:w-40">
          Join In
        </Button>
      </form>
    </header>
  );
};

export default Profile;
