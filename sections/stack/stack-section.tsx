import Section from "@/components/section/section";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { techStack } from "@/data";

const StackSection = () => {
  const renderTechs = techStack.map(({ name, Icon, tooltip }) => (
    <li key={name}>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge className="p-4 xs:p-2 xs:px-4 xs:w-fit flex items-center gap-2 bg-card rounded-md">
              <Icon className="w-5 h-5" /> <h6 className="text-md">{name}</h6>
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  ));

  return (
    <Section title="Tech Stack">
      <ul className="grid grid-cols-2 xs:flex gap-2 flex-wrap">
        {renderTechs}
      </ul>
    </Section>
  );
};

export default StackSection;
