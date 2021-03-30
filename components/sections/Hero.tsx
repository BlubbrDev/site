import React from "react";
import classNames from "classnames";
import { SectionProps } from "utils/SectionProps";
import ButtonGroup from "components/elements/ButtonGroup";
import Button from "components/elements/Button";
import HeroAnimation from "./partials/HeroAnimation";

export default function Hero({
  topOuterDivider = false,
  bottomOuterDivider = false,
  topDivider = false,
  bottomDivider = false,
  hasBgColor = false,
  invertColor = false,
  className = "",
}: SectionProps): JSX.Element {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="25"
            >
              The future of{" "}
              <span className="text-color-primary">investing</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="75"
              >
                Blubbr is a financial analytics company that specializes in a
                set of automated tools to help you stay informed and up-to-date
                on any ticker in the index.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="300">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href={process.env.REACT_APP_DISCORD_URL as string}
                  >
                    Join Discord
                  </Button>
                  <Button tag="a" color="dark" wideMobile href="#bots">
                    Meet the Bots
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            id="bots"
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="200"
          >
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
