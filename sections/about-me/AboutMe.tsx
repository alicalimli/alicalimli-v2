import Section from "@/components/section/section";
import React from "react";

interface AboutMeProps {}

const AboutMe = ({}: AboutMeProps) => {
  return (
    <Section
      mainClassName="flex flex-col gap-4 leading-7 text-muted-foreground text-lg"
      title="About Me"
    >
      <p className="text-white/85 font-semibold">
        Hey I'm Ali. 👋
        <br />
        I'm a Front-end Developer and I Create Content for Front-end Developers.
      </p>

      <p>
        I help aspiring developers succeed in their web development journey by
        providing valuable knowledge that I have learned throughout my own web
        dev journey.
      </p>

      <p>
        I am also focused on building awesome and high-quality websites that are
        also visually appealing and easy to use.
      </p>

      <p>
        You can contact me by sending me a message in any of my socials and I
        will get back to you as soon as i can.
      </p>
    </Section>
  );
};

export default AboutMe;
