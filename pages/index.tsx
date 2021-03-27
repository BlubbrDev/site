import React from "react";
import Hero from "components/sections/Hero";
import LayoutDefault from "components/layout/LayoutDefault";
import FeaturesTiles from "components/sections/FeaturesTiles";
import FeaturesSplit from "components/sections/FeaturesSplit";
import Testimonial from "components/sections/Testimonial";
import CallToAction from "components/sections/CallToAction";
import TrackedPage from "utils/GoogleAnalytics";
import ScrollReveal from "utils/ScrollReveal";

/**
 * The landing page for the website.
 * This is the home page and will be the default page loaded when a user navigates to the
 * homepage, located at https://blubbr.io (this can be seen in the package.json file as well).
 */
export default function Home(): JSX.Element {
  return (
    <TrackedPage>
      <ScrollReveal>
        <LayoutDefault>
          <Hero className="illustration-section-01" />
          <FeaturesTiles />
          <FeaturesSplit
            invertMobile
            topDivider
            imageFill
            className="illustration-section-02"
          />
          <Testimonial topDivider />
          <CallToAction split />
        </LayoutDefault>
      </ScrollReveal>
    </TrackedPage>
  );
}
