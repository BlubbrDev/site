import React from "react";
import classNames from "classnames";
import { SectionProps, defaultSectionProps } from "utils/SectionProps";
import ButtonGroup from "components/elements/ButtonGroup";
import Button from "components/elements/Button";
import HeroAnimation from "./partials/HeroAnimation";

export default function Hero(prop: SectionProps = defaultSectionProps) {
  const outerClasses = classNames(
    "hero section center-content",
    prop.topOuterDivider && "has-top-divider",
    prop.bottomOuterDivider && "has-bottom-divider",
    prop.hasBgColor && "has-bg-color",
    prop.invertColor && "invert-color",
    prop.className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    prop.topDivider && "has-top-divider",
    prop.bottomDivider && "has-bottom-divider"
  );

  return (
    <section className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="100"
            >
              The future of{" "}
              <span className="text-color-primary">investing</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="200"
              >
                NotiFi is a trading bot that scrapes the SEC website to find new
                filings for SPACs to notify traders when to trade before the
                rest of the market finds out.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="300">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href={process.env.DISCORD_URL as string}
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
            data-reveal-delay="400"
          >
            <HeroAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
