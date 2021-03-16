import React from "react";
import classNames from "classnames";
import { defaultSectionTileProps, SectionTileProps } from "utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

export default function Testimonial(
  props: SectionTileProps = defaultSectionTileProps
): JSX.Element {
  const outerClasses = classNames(
    "testimonial section",
    props.topOuterDivider && "has-top-divider",
    props.bottomOuterDivider && "has-bottom-divider",
    props.hasBgColor && "has-bg-color",
    props.invertColor && "invert-color",
    props.className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    props.topDivider && "has-top-divider",
    props.bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", props.pushLeft && "push-left");

  const sectionHeader = {
    title: "Hear it from them",
    paragraph:
      "Don't just take our word for it, hear what some of our community members have to say \
      about how Blubbr has helped them achieve alpha gains.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Timing is everything. With Notifi, I can rest easy knowing
                    that if anything happens in the news I will be the first to
                    know. Blubbr saves me time by pre-reading every financial
                    article as it is published, so I only need to read the
                    important summaries.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Soren
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="/">Commodore</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — I love Blubbr! Their notification services actually send
                    my phone an SMS notification whenever something important
                    happens related to my stocks. Its like getting a text from
                    Warren Buffet anytime there is new information about my
                    holdings.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Justin
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="/">Captain</a>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — The insights behind Blubbr are huge. With massive amounts
                    of data, the team has been able to reliably predict
                    important market signals and warn the community when it is
                    time to buy or sell.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Steven
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="/">Sailor</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
