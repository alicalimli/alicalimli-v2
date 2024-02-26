import ScrollToTop from "@/components/scroll-top/scroll-to-top";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface indexProps {}

const index = ({}: indexProps) => {
  return (
    <main className="my-6">
      <ScrollToTop />

      <header>
        <Link
          href="/"
          className="hover:underline underline-offset-2 scroll-m-20 text-md opacity-95 flex items-center "
        >
          <ChevronLeft className="w-5" />
          Go Back
        </Link>

        <h2 className="scroll-m-20 text-2xl mt-2 font-semibold tracking-tight first:mt-0">
          You have to code or build SOMETHING
        </h2>

        <p className="text-xl text-muted-foreground">
          If you want to improve as a developer, this is the way.
        </p>
      </header>

      <main className="leading-7 flex flex-col gap-4 mt-4 text-white/85">
        <p>
          The most common questions I get is how do I get better at something
          whether its JavaScript, React or any other tools out there.
        </p>

        <p>The answer would always be the same.</p>

        <p>Code something.</p>

        <p>Build your own projects or contribute to Open Source projects.</p>

        <p>
          You have to use the knowledge from the crash courses you’ve watched in
          order for you to actually learn it and deepen your knowledge about
          that specific tool you are currently learning.
        </p>

        <p>
          Watching alone is just not enough if you want to really learn
          something and become good with it.
        </p>

        <p>
          So yeah go out there, build something or start contributing to cool
          projects!
        </p>

        <p>
          Just code something, its challenging at first but that’s how we grow
          as developers.
        </p>

        <p>
          Before doing that make sure you already grasp the basics of the tool
          you are currently trying to get better at.
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
