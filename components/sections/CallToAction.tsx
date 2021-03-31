import React from "react";
import classNames from "classnames";
import { CallToActionProps } from "utils/SectionProps";
// import Input from "components/elements/Input";
import Button from "components/elements/Button";

export default function CallToAction({
  topOuterDivider = false,
  bottomOuterDivider = false,
  topDivider = false,
  bottomDivider = false,
  hasBgColor = false,
  invertColor = false,
  className = "",
  split = true,
}: CallToActionProps): JSX.Element {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );

  return (
    <section className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">Welcome to the future of investing</h3>
          </div>
          <div className="cta-action">
            <Button
              tag="a"
              color="dark"
              wideMobile
              href={process.env.NEXT_PUBLIC_DISCORD_URL as string}
            >
              Join Discord
            </Button>
            {/* <Input
              id="newsletter"
              type="email"
              label="Subscribe"
              labelHidden
              hasIcon="right"
              placeholder="Your best email"
            >
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
                  fill="#376DF9"
                />
              </svg>
            </Input> */}
          </div>
        </div>
      </div>
    </section>
  );
}
