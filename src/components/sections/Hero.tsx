import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps, DefaultSectionProps } from "utils/SectionProps";
import ButtonGroup from "components/elements/ButtonGroup";
import Button from "components/elements/Button";
import Image from "components/elements/Image";
import Modal from "components/elements/Modal";

export default function Hero(
  prop: SectionProps = DefaultSectionProps,
  ...props: any[]
) {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e: any) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e: any) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

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
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Landing template for{" "}
              <span className="text-color-primary">startups</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://cruip.com/"
                  >
                    Get started
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://github.com/cruip/open-react-template/"
                  >
                    View on Github
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="/"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/video-placeholder.jpg")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
          <Modal
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
            id="video-modal"
          />
        </div>
      </div>
    </section>
  );
}
