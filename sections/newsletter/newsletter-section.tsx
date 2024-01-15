import { ArrowRightIcon, BookIcon, BookOpenTextIcon } from "lucide-react";

import SectionHeader from "@/components/section-header/section-header";

const recentIssues = [
  {
    title: "Fundamentals are enough to build something awesome",
    subtitle: "Ignore that self limiting belief that its not possible.",
    readTime: "3 min read",
  },
  {
    title: "The Easiest Way to Build your Online Presence",
    subtitle: "I started building mine by doing this.",
    readTime: "3 min read",
  },
  {
    title: "You have to code or build SOMETHING",
    subtitle: "If you want to improve as a developer, this is the way.",
    readTime: "3 min read",
  },
];

const NewsletterSection = () => {
  const renderIssues = recentIssues.map((issue) => (
    <li key={issue.title}>
      <button className="text-start duration-300 hover:opacity-70">
        <h4 className="scroll-m-20 text-lg opacity-90 tracking-tight">
          {issue.title}
        </h4>

        <p className="text-md text-muted-foreground">{issue.subtitle}</p>

        <p className="text-sm  text-muted-foreground mt-2">
          <BookOpenTextIcon className="inline w-5" /> {issue.readTime}
        </p>
      </button>
    </li>
  ));

  return (
    <>
      <SectionHeader
        title="Newsletters"
        viewAllLink="https://alicalimli.beehiiv.com/"
      />

      <ul className="flex flex-col gap-4 mt">{renderIssues}</ul>
    </>
  );
};

export default NewsletterSection;
