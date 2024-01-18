import Section from "@/components/section/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

const recentIssues = [
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
      <Card className="flex flex-col h-full hover:bg-border hover:-translate-y-2 duration-300">
        <CardHeader className="p-4">
          <div className="flex justify-center bg-[#222] aspect-video rounded-md rounded-b-none">
            <Image
              alt={`${issue.title} issue image`}
              className="object-contain"
              src="/newsletter-banner.png"
              width={300}
              height={300}
            />
          </div>
        </CardHeader>

        <CardContent className="px-4">
          <h5 className="scroll-m-20 text-lg font-semibold tracking-tight">
            {issue.title}
          </h5>
          <p className="text-sm text-muted-foreground mt-1">{issue.subtitle}</p>
        </CardContent>

        <CardFooter className="mt-auto px-4 pb-4">
          <Button
            variant={issue.link ? "default" : "outline"}
            className="w-full mt-4"
            asChild
          >
            <a
              className={issue.link ? "" : "pointer-events-none"}
              rel="noopener noreferrer"
              target="_blank"
              href={issue.link}
            >
              Read
            </a>
          </Button>
        </CardFooter>
      </Card>
    </li>
  ));

  return (
    <Section title="Newsletters" viewAllLink="https://alicalimli.beehiiv.com/">
      <ul className="grid xs:grid-cols-2 gap-8 relative">{renderIssues}</ul>
    </Section>
  );
};

export default NewsletterSection;
