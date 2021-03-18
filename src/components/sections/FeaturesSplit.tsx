import React from "react";
import classNames from "classnames";
import {
  SectionSplitProps,
  defaultSectionSplitProps,
} from "utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "components/elements/Image";

import figure_1 from "assets/images/features-split-image-01.png";
import figure_2 from "assets/images/features-split-image-02.png";
// import figure_3 from "assets/images/features-split-image-03.png";

export default function FeaturesSplit(
  props: SectionSplitProps = defaultSectionSplitProps
): JSX.Element {
  const outerClasses = classNames(
    "features-split section",
    props.topouterdivider && "has-top-divider",
    props.bottomouterdivider && "has-bottom-divider",
    props.hasbgcolor && "has-bg-color",
    props.invertcolor && "invert-color",
    props.className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    props.topdivider && "has-top-divider",
    props.bottomdivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    props.invertmobile && "invert-mobile",
    props.invertdesktop && "invert-desktop",
    props.aligntop && "align-top"
  );

  const sectionHeader = {
    title: "Advanced insights",
    paragraph:
      "At Blubbr, we cut the fat off of traditional financial institutions \
      because we believe the power belongs to the players.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  BOT
                </div>
                <h3 className="mt-0 mb-12">Notifi</h3>
                <p className="m-0">
                  Gets a feed from a webscraping bot that notifies a discord channel
                  when there are important updates to the SEC website. The fastest way
                  to get new information.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  props.imagefill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={figure_1}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  BOT
                </div>
                <h3 className="mt-0 mb-12">Notifi News</h3>
                <p className="m-0">
                  Be the first to know about breaking news. Notifi News reads every article
                  the second it is published and filters it for important financial information.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  props.imagefill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={figure_2}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            {/* <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div>
                <h3 className="mt-0 mb-12">Data-driven insights</h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  props.imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={figure_3}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
