"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const links = [
  {
    tooltip: "X (formerly Twitter)",
    Icon: FaSquareXTwitter,
    link: "https://twitter.com/alicalimli_dev",
  },
  {
    Icon: FaLinkedin,
    tooltip: "LinkedIn",
    link: "https://www.linkedin.com/in/alicalimli/",
  },
  {
    Icon: FaGithub,
    tooltip: "Github",
    link: "https://github.com/alicalimli",
  },
  {
    Icon: IoIosMail,
    tooltip: "Email",
    width: "w-7",
    link: "mailto:@alicalimli76@gmail.com",
  },
];

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    window.location.href = `https://magic.beehiiv.com/v1/9732691c-dbb3-4873-b19c-1489caa9e0ba?email=${email}&redirect_to=https://alicalimli.com/`;
  };

  const renderLinks = links.map(({ link, Icon, tooltip, width = "" }) => (
    <TooltipProvider delayDuration={0} key={link}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={link}
            className="hover:text-primary duration:200"
          >
            <Icon className={cn("w-5", width)} />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ));

  return (
    <header>
      <Avatar className="w-24 h-24">
        <AvatarImage src="/alicalimli.jpg" alt="Ali Calimli's Profile" />
        <AvatarFallback>AL</AvatarFallback>
      </Avatar>

      <h2 className="scroll-m-20 text-3xl font-semibold my-2 tracking-tight flex items-center gap-2">
        Ali Calimli
        <Image
          src="/verified-badge.png"
          width={25}
          height={25}
          alt="verified badge"
        />
        {renderLinks}
      </h2>

      <p className="text-xl text-muted-foreground">
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
