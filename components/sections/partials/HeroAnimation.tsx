import React from "react";
import Animation from "components/elements/Animation";

export default function HeroAnimation(): JSX.Element {
  return (
    <Animation
      src="/reading_bot.riv"
      style={{ height: "calc(100vh - 286px)" }}
    />
  );
}
