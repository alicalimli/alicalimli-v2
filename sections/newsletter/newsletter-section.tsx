import { ArrowRightIcon, BookIcon, BookOpenTextIcon } from "lucide-react";

import SectionHeader from "@/components/section-header/section-header";
import Link from "next/link";

const recentIssues = [
  {
    title: "Fundamentals are enough to build something awesome",
    subtitle: "Ignore that self limiting belief that its not possible.",
    readTime: "3 min read",
    link: "https://alicalimli.beehiiv.com/p/fundamentals-are-enough-to-build-something-awesome",
  },
  {
    title: "The Easiest Way to Build your Online Presence",
    subtitle: "I started building mine by doing this.",
    readTime: "3 min read",
    link: "https://alicalimli.beehiiv.com/p/easiest-way-build-online-presence",
  },
  {
    title: "You have to code or build SOMETHING",
    subtitle: "If you want to improve as a developer, this is the way.",
    readTime: "3 min read",
    link: "https://alicalimli.beehiiv.com/p/code-build-something",
  },
];

const NewsletterSection = () => {
  const renderIssues = recentIssues.map((issue) => (
    <li key={issue.title}>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href={issue.link}
        className="text-start duration-300 hover:opacity-70"
      >
        <h4 className="scroll-m-20 text-lg tracking-tight opacity-95">
          {issue.title}
        </h4>

        <p className="text-md text-muted-foreground">{issue.subtitle}</p>
      </Link>
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
