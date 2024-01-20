import Section from "@/components/section/section";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface indexProps {}

const index = ({}: indexProps) => {
  return (
    <main>
      <header>
        <Link
          href="/"
          className="hover:underline underline-offset-2 scroll-m-20 text-md opacity-95 flex items-center "
        >
          <ChevronLeft className="w-5" />
          Go Back
        </Link>

        <h2 className="scroll-m-20 text-2xl mt-2 font-semibold tracking-tight first:mt-0">
          Easiest way to build an online presence
        </h2>

        <p className="text-xl text-muted-foreground">
          I started mine by doing this.
        </p>
      </header>

      <main className="leading-7 flex flex-col gap-4 mt-4 text-white/85">
        <p>As a developer,</p>

        <p>
          Having an Online Presence is super beneficial, especially in the long
          term.
        </p>

        <p>
          And the easiest way to start building yours is to share your learning
          progress.
        </p>

        <p>
          Developers always have something that they have been learning, right?
        </p>

        <p>
          Just by sharing it, you can easily build your online presence, little
          by little.
        </p>

        <p>Here’s an example of me on my first day:</p>

        <Image
          src="/newsletter/first-day.png"
          className="rounded-lg"
          width={500}
          height={500}
          alt="my first day tweet"
        />

        <p>
          Same thing you can do with the project you have been building to
          practice.
        </p>

        <p>Share its progress.</p>

        <p>Here’s an example:</p>

        <Image
          src="/newsletter/build-in-public.png"
          className="rounded-lg"
          width={500}
          height={500}
          alt="my first day tweet"
        />

        <p>The great thing about this?</p>

        <p>You are going to receive feedback from other developers.</p>

        <p>And this feedback would help a lot in your journey.</p>

        <p>At the beginning, no one might engage with your posts,</p>

        <p>But don’t get discouraged, that’s normal.</p>

        <p>Once you start engaging in the community and make friends,</p>

        <p>People would start engaging with you, especially your friends.</p>

        <p>Whenever you are ready,</p>

        <p>
          I’d love to see you make your first post about this, so feel free to
          mention me when you can :)
        </p>

        <p>
          By the way, I would recommend you to start #100DaysOfCode Challenge on
          Twitter/X where you would start documenting your journey for 100 days
          straight. (Break days are fine)
        </p>

        <p>That’s it for now.</p>

        <p>
          Thanks for reading, <br /> Ali
        </p>
      </main>
    </main>
  );
};

export default index;
