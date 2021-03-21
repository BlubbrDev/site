import React from "react";
import classNames from "classnames";
import { SectionTileProps, defaultSectionTileProps } from "utils/SectionProps";
import SectionHeader from "components/sections/partials/SectionHeader";
import Image from "components/elements/Image";

import feature_1 from "assets/images/feature-tile-icon-01.svg";
import feature_2 from "assets/images/feature-tile-icon-02.svg";
import feature_3 from "assets/images/feature-tile-icon-03.svg";
import feature_4 from "assets/images/feature-tile-icon-04.svg";
import feature_5 from "assets/images/feature-tile-icon-05.svg";
import feature_6 from "assets/images/feature-tile-icon-06.svg";

export default function FeaturesTiles(
  props: SectionTileProps = defaultSectionTileProps
): JSX.Element {
  const outerClasses = classNames(
    "features-tiles section",
    props.topOuterDivider && "has-top-divider",
    props.bottomOuterDivider && "has-bottom-divider",
    props.hasBgColor && "has-bg-color",
    props.invertColor && "invert-color",
    props.className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    props.topDivider && "has-top-divider",
    props.bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    props.pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "We read the news",
    paragraph:
      "NotiFi is a trading bot that scrapes the SEC website to find new \
      filings for SPACs to notify traders when to trade before the \
      rest of the market finds out.",
  };

  return (
    <section id="features" {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={feature_1}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h3 className="h4 mt-0 mb-8">Premium Content</h3>
                  <p className="m-0 text-sm">
                    Our specialized software is optimized to find the next big
                    insight that can help you realize alpha gains.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="100"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={feature_2}
                      alt="Features tile icon 02"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h3 className="h4 mt-0 mb-8">Daily Digest</h3>
                  <p className="m-0 text-sm">
                    With our daily digest, you will get the powerful insights of
                    blubbr right in your inbox.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="50"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={feature_3}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h3 className="h4 mt-0 mb-8">Global Network</h3>
                  <p className="m-0 text-sm">
                    Our global community of financial professionals means you
                    can always talk stock.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={feature_4}
                      alt="Features tile icon 04"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h3 className="h4 mt-0 mb-8">ML Insights</h3>
                  <p className="m-0 text-sm">
                    Our machine-learning algorithms will help you better
                    understand current market dynamics.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="100"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={feature_5}
                      alt="Features tile icon 05"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h3 className="h4 mt-0 mb-8">Free Trial</h3>
                  <p className="m-0 text-sm">
                    Join the community for free and see for yourself how much
                    fat you can cut off with blubbr.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={feature_6}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h3 className="h4 mt-0 mb-8">Deep Dives</h3>
                  <p className="m-0 text-sm">
                    As a member, you get access to hand-crafted research from
                    our deticated members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
