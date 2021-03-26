import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

import FeatureSplitRow from "./partials/SplitRow";
// import figure_3 from "assets/images/features-split-image-03.png";

export default function FeaturesSplit({
  topOuterDivider = false,
  bottomOuterDivider = false,
  topDivider = false,
  bottomDivider = false,
  hasBgColor = false,
  invertColor = false,
  className = "",
  invertMobile = false,
  invertDesktop = false,
  alignTop = false,
  imageFill = false,
}: SectionSplitProps): JSX.Element {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Advanced insights",
    paragraph:
      "At Blubbr, we cut the fat off of traditional financial institutions \
      because we believe the power belongs to the players.",
  };

  const row = [
    {
      overline: "BOT",
      title: "Notifi",
      body:
        "Gets a feed from a webscraping bot that notifies a discord channel when there are \
        important updates to the SEC website. The fastest way to get new information.",
      img: { src: "images/features-split-image-01.png", alt: "Notifi Bot" },
      from: "left",
      shouldFill: imageFill,
    },
    {
      overline: "BOT",
      title: "Notifi News",
      body:
        "Be the first to know about breaking news. Notifi News reads every article the second \
        it is published and filters it for important financial information.",
      img: { src: "images/features-split-image-02.png", alt: "Notifi News Bot" },
      from: "right",
      shouldFill: imageFill,
    },
  ];

  return (
    <section className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <FeatureSplitRow {...row[0]} />
            <FeatureSplitRow {...row[1]} />
          </div>
        </div>
      </div>
    </section>
  );
}
