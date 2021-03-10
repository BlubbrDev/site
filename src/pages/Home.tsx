import React from "react";
import Hero from "components/sections/Hero";
import LayoutDefault from "layouts/LayoutDefault";
import FeaturesTiles from "components/sections/FeaturesTiles";

export default function Home() {
  return (
    <LayoutDefault>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
    </LayoutDefault>
  );
}
