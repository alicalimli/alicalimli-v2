import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import Conditional from "../conditional/Conditional";
import Link from "next/link";

export interface ItemProps {
  title: string;
  description: string;
  thumbnail: string;
  isRoute?: boolean;
  role?: string;
  technologies?: string[];
  sourceCode?: string;
  link?: string;
  cta: string;
}

interface ItemCardProps {
  item: ItemProps;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <Card className="flex flex-col h-full hover:bg-border duration-300">
      <CardHeader className="p-4">
        <Link
          className="flex justify-center bg-muted aspect-video rounded-md rounded-b-none hover:brightness-75 duration-300"
          rel="noopener noreferrer"
          target={item.isRoute ? "_self" : "_blank"}
          href={item.link ?? ""}
        >
          <Image
            alt={`${item.title} thumbnail`}
            className="object-contain"
            src={item.thumbnail}
            width={300}
            height={300}
          />
        </Link>
      </CardHeader>

      <CardContent className="px-4">
        <Conditional condition={Boolean(item.role)}>
          <p className="text-xs text-muted-foreground">Design & Development</p>
        </Conditional>

        <h5 className="scroll-m-20 text-lg font-semibold tracking-tight flex items-center gap-2">
          {item.title}

          <Conditional condition={Boolean(item.sourceCode)}>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={item.sourceCode}
                    className="hover:text-primary duration:200"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Source Code</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Conditional>
        </h5>
        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
      </CardContent>

      <CardFooter className="mt-auto items-start px-4 pb-4 flex flex-col">
        <ul className="flex gap-1 flex-wrap">
          {item?.technologies?.map((tech) => (
            <li key={tech}>
              <Badge className="bg-muted text-white/80 rounded-md">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>

        <Button
          variant={item.link ? "default" : "outline"}
          className="w-full mt-4"
          asChild
        >
          <Link
            className={item.link ? "" : "pointer-events-none"}
            rel="noopener noreferrer"
            target={item.isRoute ? "_self" : "_blank"}
            href={item.link ?? ""}
          >
            {item.cta}
          </Link>
        </Button>

        <Conditional condition={Boolean(item.sourceCode)}>
          <Button variant={"secondary"} className="w-full mt-2" asChild>
            <Link
              className={item.link ? "" : "pointer-events-none"}
              rel="noopener noreferrer"
              target="_blank"
              href={item.link ?? ""}
            >
              Source Code
            </Link>
          </Button>
        </Conditional>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
