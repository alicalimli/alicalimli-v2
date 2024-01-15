import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  className?: string;
  viewAllText?: {
    text: string;
    link: string;
  };
}

const SectionHeader = ({
  title,
  viewAllText,
  className,
}: SectionHeaderProps) => {
  return (
    <header className={cn("flex items-center mb-3", className)}>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {title}
      </h3>

      {!viewAllText ? null : (
        <Button
          variant={"ghost"}
          asChild
          className="ml-auto flex items-center gap-2 text-sm"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://alicalimli.beehiiv.com/"
          >
            {viewAllText.text}
            <ArrowRightIcon className="w-5" />
          </a>
        </Button>
      )}
    </header>
  );
};

export default SectionHeader;
