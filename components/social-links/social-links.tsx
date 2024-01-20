import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { socialLinks } from "@/data";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: string; // height and width
}

const SocialLinks = ({ className, iconSize }: SocialLinksProps) => {
  const renderLinks = socialLinks.map(({ link, Icon, tooltip, width = "" }) => (
    <li key={link}>
      <TooltipProvider delayDuration={0} key={link}>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={link}
              className="hover:text-primary duration:200"
            >
              <Icon className={cn("w-5 h-5", iconSize, width)} />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  ));

  return (
    <ul className={cn("gap-2 items-center flex", className)}>{renderLinks}</ul>
  );
};

export default SocialLinks;
