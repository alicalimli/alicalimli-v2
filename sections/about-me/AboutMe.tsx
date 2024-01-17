import SectionHeader from "@/components/section-header/section-header";
import React from "react";

interface AboutMeProps {}

const AboutMe = ({}: AboutMeProps) => {
  return (
    <>
      {" "}
      <SectionHeader title="About Me" />
      <main className="flex flex-col gap-4 leading-7 text-white/90">
        <p className="text-white font-medium">
          Hey I'm Ali. 👋
          <br />
          I'm a Front-end Developer and I Create Content for Front-end
          Developers.
        </p>

        <p>
          I help people succeed in their web development journey by providing
          valuable knowledge that I have learned throughout my own web dev
          journey.
        </p>

        <p>
          I am also focused on building awesome and high-quality websites that
          are also visually appealing and easy to use.
        </p>

        <p>
          You can contact me by sending me a message in any of my socials and I
          will get back to you as soon as i can.
        </p>
      </main>
    </>
  );
};

export default AboutMe;
