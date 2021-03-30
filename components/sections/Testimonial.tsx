import React from "react";
import classNames from "classnames";
import { SectionTileProps } from "utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import TestimonialTile from "./partials/TestimonialTile";

/**
 * Testimonial page with words from our customers.
 */
export default function Testimonial({
  topOuterDivider = false,
  bottomOuterDivider = false,
  topDivider = false,
  bottomDivider = false,
  hasBgColor = false,
  invertColor = false,
  className = "",
  pushLeft = false,
}: SectionTileProps): JSX.Element {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Hear it from them",
    paragraph:
      "Don't just take our word for it, hear what some of our community members have to say \
      about how Blubbr has helped them achieve alpha gains.",
  };

  const testiminials = [
    {
      name: "Soren",
      rank: "Commodore",
      message:
        "— Timing is everything. With Notifi, I can rest easy knowing that if anything happens \
        in the news I will be the first to know. Blubbr saves me time by pre-reading every \
        financial article as it is published, so I only need to read the important summaries.",
    },
    {
      name: "Justin",
      rank: "Captain",
      message:
        "— I love Blubbr! Their notification services actually send my phone an SMS \
        notification whenever something important happens related to my stocks. Its like getting a \
        text from Warren Buffet anytime there is new information about my holdings.",
    },
    {
      name: "Steven",
      rank: "Sailor",
      message:
        "— The insights behind Blubbr are huge. With massive amounts of data, the team has been \
        able to reliably predict important market signals and warn the community when it is time \
        to buy or sell.",
    },
  ];

  return (
    <section className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <TestimonialTile
              delay={200}
              from="right"
              name={testiminials[0].name}
              rank={testiminials[0].rank}
              message={testiminials[0].message}
            />
            <TestimonialTile
              from="bottom"
              name={testiminials[1].name}
              rank={testiminials[1].rank}
              message={testiminials[1].message}
            />
            <TestimonialTile
              delay={200}
              from="left"
              name={testiminials[2].name}
              rank={testiminials[2].rank}
              message={testiminials[2].message}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
