import React from "react";
import classNames from "classnames";
import {
  CallToActionProps,
  defaultCallToActionProps,
} from "utils/SectionProps";
// import Input from "components/elements/Input";
import Button from "components/elements/Button";

export default function CallToAction(
  props: CallToActionProps = defaultCallToActionProps
) {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    props.topOuterDivider && "has-top-divider",
    props.bottomOuterDivider && "has-bottom-divider",
    props.hasBgColor && "has-bg-color",
    props.invertColor && "invert-color",
    props.className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    props.topDivider && "has-top-divider",
    props.bottomDivider && "has-bottom-divider",
    props.split && "cta-split"
  );

  return (
    <section {...props} className={outerClasses}>
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
              href="https://discord.gg/ZtAWMP2DDd"
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
