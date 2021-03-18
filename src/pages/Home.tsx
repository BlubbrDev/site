import React from "react";
import Hero from "components/sections/Hero";
import LayoutDefault from "layouts/LayoutDefault";
import FeaturesTiles from "components/sections/FeaturesTiles";
import FeaturesSplit from "components/sections/FeaturesSplit";
import Testimonial from "components/sections/Testimonial";
import CallToAction from "components/sections/CallToAction";

export default function Home(): JSX.Element {
  return (
    <LayoutDefault>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit
        invertmobile
        topdivider
        imagefill
        className="illustration-section-02"
      />
      <Testimonial topdivider />
      <CallToAction split="true" />
    </LayoutDefault>
  );
}
