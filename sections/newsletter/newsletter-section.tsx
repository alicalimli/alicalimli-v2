import { ArrowRightIcon, BookIcon, BookOpenTextIcon } from "lucide-react";
import { NewsletterCard } from "./newsletter-card";

const recentIssues = [
  {
    title: "The Easiest Way to Build your Online Presence",
    subtitle: "I started building mine by doing this.",
    readTime: "3 min read",
  },
  {
    title: "The Easiest Way to Build your Online Presence",
    subtitle: "I started building mine by doing this.",
    readTime: "3 min read",
  },
  {
    title: "The Easiest Way to Build your Online Presence",
    subtitle: "I started building mine by doing this.",
    readTime: "3 min read",
  },
];

const NewsletterSection = () => {
  const renderIssues = recentIssues.map((issue) => (
    <li key={issue.title}>
      <button className="text-start">
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
      <NewsletterCard />

      <header className="flex">
        <h3 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Newsletter Issues
        </h3>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://alicalimli.beehiiv.com/"
          className="ml-auto flex items-center gap-2 text-sm"
        >
          View All Issues <ArrowRightIcon className="w-5" />
        </a>
      </header>
      <ul className="flex flex-col gap-4">{renderIssues}</ul>
    </>
  );
};

export default NewsletterSection;
