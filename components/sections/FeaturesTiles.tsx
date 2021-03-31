import React from "react";
import classNames from "classnames";
import { SectionTileProps } from "utils/SectionProps";
import SectionHeader from "components/sections/partials/SectionHeader";

import FeatureTile from "./partials/FeatureTile";

export default function FeaturesTiles({
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
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "We read the news",
    paragraph:
      "NotiFi is a trading bot that scrapes the SEC website to find new \
      filings for SPACs to notify traders when to trade before the \
      rest of the market finds out.",
  };

  const features = [
    {
      delay: 0,
      title: "Premium Content",
      body:
        "Our specialized software is optimized to find the next big insight that can help you \
        realize alpha gains.",
      img: { src: "/images/feature-tile-icon-01.svg", alt: "Premium Content" },
    },
    {
      delay: 100,
      title: "Daily Digest",
      body:
        "With our daily digest, you will get the powerful insights of blubbr right in your \
        inbox.",
      img: { src: "/images/feature-tile-icon-02.svg", alt: "Daily Digest" },
    },
    {
      delay: 50,
      title: "Global Network",
      body:
        "Our global community of financial professionals means you can always talk stock.",
      img: { src: "/images/feature-tile-icon-03.svg", alt: "Global Network" },
    },
    {
      delay: 0,
      title: "ML Insights",
      body:
        "Our machine-learning algorithms will help you better understand current market \
        dynamics.",
      img: { src: "/images/feature-tile-icon-04.svg", alt: "ML Insights" },
    },
    {
      delay: 100,
      title: "Free Trial",
      body:
        "Join the community for free and see for yourself how much fat you can cut off with \
        blubbr.",
      img: { src: "/images/feature-tile-icon-05.svg", alt: "Free Trial" },
    },
    {
      delay: 200,
      title: "Deep Dives",
      body:
        "As a member, you get access to hand-crafted research from our deticated members.",
      img: { src: "/images/feature-tile-icon-06.svg", alt: "Deep Dives" },
    },
  ];

  return (
    <section id="features" className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <FeatureTile {...features[0]} />
            <FeatureTile {...features[1]} />
            <FeatureTile {...features[2]} />
            <FeatureTile {...features[3]} />
            <FeatureTile {...features[4]} />
            <FeatureTile {...features[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}
