import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import SectionHeader from "@/components/section-header/section-header";
import { FaGithub } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "ACMessenger",
    thumbnail: "/projects/acmessenger.png",
    description:
      "A Fullstack Chatapp that I've built to learn more about React and its popular libraries like redux, and also learn to use Firebase.",
    cta: "Visit",
    link: "https://alicalimli.beehiiv.com/subscribe",
    sourceCode: "https://github.com/alicalimli/ac-messenger",
    technologies: [
      "ReactJS",
      "Typescript",
      "Firebase",
      "TailwindCSS",
      "Redux Toolkit",
    ],
  },
  {
    name: "MovieMatrix",
    thumbnail: "/projects/moviematrix.png",
    sourceCode: "https://github.com/alicalimli/movie-matrix-app/",
    description:
      "A Vanilla JS Project that I have built to deepen my knowledge about HTML, CSS and JavaScript and practice consuming API’s as well.",
    cta: "Visit",
    link: "https://www.webdevvisuals.com/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectsSection = () => {
  const renderProjects = projects.map((project) => (
    <li key={project.name}>
      <Card className="flex flex-col h-full hover:bg-border hover:-translate-y-2 duration-300">
        <CardHeader className="p-4">
          <div className="flex justify-center bg-[#111] aspect-video rounded-md rounded-b-none">
            <Image
              alt={`${project.name} project image`}
              className="object-contain"
              src={project.thumbnail}
              width={300}
              height={300}
            />
          </div>
        </CardHeader>

        <CardContent className="px-4">
          <h5 className="scroll-m-20 text-lg font-semibold tracking-tight flex items-center gap-2">
            {project.name}
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={project.sourceCode}
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
          </h5>
          <p className="text-sm text-muted-foreground mt-1">
            {project.description}
          </p>
        </CardContent>

        <CardFooter className="mt-auto items-start px-4 pb-4 flex flex-col">
          <ul className="flex gap-1 flex-wrap">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <Badge className="bg-muted text-white/80 rounded-md">
                  {tech}
                </Badge>
              </li>
            ))}
          </ul>

          <Button
            variant={project.link ? "default" : "outline"}
            className="w-full mt-4"
            asChild
          >
            <a
              className={project.link ? "" : "pointer-events-none"}
              rel="noopener noreferrer"
              target="_blank"
              href={project.link}
            >
              {project.cta}
            </a>
          </Button>
        </CardFooter>
      </Card>
    </li>
  ));

  return (
    <>
      <SectionHeader title="Projects" />

      <main>
        <ul className="grid xs:grid-cols-2 gap-8 relative">{renderProjects}</ul>
      </main>
    </>
  );
};

export default ProjectsSection;
