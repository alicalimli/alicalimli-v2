import {
  SiFirebase,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { ItemProps } from "./components/item-card/ItemCard";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export const socialLinks = [
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
    link: "mailto:@alicalimli76@gmail.com",
  },
];

export const projects: ItemProps[] = [
  {
    title: "ACMessenger",
    thumbnail: "/projects/acmessenger.png",
    description:
      "A Fullstack Chatapp that I've built to learn more about React and its popular libraries like redux, and also learn to use Firebase.",
    cta: "Visit Website",
    role: "Design & Development",
    link: "https://ac-messenger-p.web.app/",
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
    title: "MovieMatrix",
    thumbnail: "/projects/moviematrix.png",
    sourceCode: "https://github.com/alicalimli/movie-matrix-app/",
    description:
      "A Vanilla JS Project that I have built to deepen my knowledge about HTML, CSS and JavaScript and practice consuming API’s as well.",
    cta: "Visit Website",
    role: "Design & Development",
    link: "https://moviematrix.netlify.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const recentIssues: ItemProps[] = [
  {
    title: "The Easiest Way to Build your Online Presence",
    thumbnail: "/newsletter-banner.png",
    description: "I started building mine by doing this.",
    link: "/easiest-way-build-an-online-presence",
    isRoute: true,
    cta: "Read",
  },
  {
    title: "You have to code or build SOMETHING",
    description: "If you want to improve as a developer, this is the way.",
    link: "/you-have-to-code-or-build-something",
    isRoute: true,
    thumbnail: "/newsletter-banner.png",
    cta: "Read",
  },
];

export const products: ItemProps[] = [
  {
    title: "WebDevVisuals",
    description:
      "A platform to learn tips & tricks that would take your web dev skills to the next level all in one place.",
    cta: "Learn more",
    link: "https://www.webdevvisuals.com/",
    thumbnail: "/products/webdevvisuals.png",
  },
  {
    title: "Essential Tips & Tricks (Free)",
    description:
      "Essential tips and tricks that would level up sssyour website and your visitor's user experience.",
    cta: "Join The Wailist",
    link: "https://alicalimli.beehiiv.com/subscribe",
    thumbnail: "/products/webdevvisuals.png",
  },
];

export const techStack = [
  {
    name: "NextJS",
    Icon: SiNextdotjs,
    tooltip: "JavaScript Framework",
  },
  {
    name: "Redux Toolkit",
    Icon: SiRedux,
    tooltip: "State Management",
  },
  {
    name: "TailwindCSS",
    Icon: SiTailwindcss,
    tooltip: "CSS Framework",
  },
  {
    name: "Typescript",
    Icon: SiTypescript,
    tooltip: "JavaScript Extension",
  },
  {
    name: "Firebase",
    Icon: SiFirebase,
    tooltip: "Application Backend",
  },
  {
    name: "Framer Motion",
    Icon: TbBrandFramerMotion,
    tooltip: "Complex Animations & Transitions",
  },
];
