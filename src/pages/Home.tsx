import React from "react";
import Hero from "components/sections/Hero";
import LayoutDefault from "layouts/LayoutDefault";
import FeaturesTiles from "components/sections/FeaturesTiles";
import FeaturesSplit from "components/sections/FeaturesSplit";

export default function Home() {
  return (
    <LayoutDefault>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
    </LayoutDefault>
  );
}
