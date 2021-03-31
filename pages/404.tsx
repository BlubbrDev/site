import React from "react";
import LayoutDefault from "components/layout/LayoutDefault";
import Animation from "components/elements/Animation";
import TrackedPage from "utils/GoogleAnalytics";
import ScrollReveal from "utils/ScrollReveal";
import PageMetadata from "utils/PageMetadata";

/**
 * The 404 error page for the website.
 * This page is shown whenever the user tries to navigate to a URL that does not have a matching
 * file in the /pages directory.
 */
export default function PageNotFound(): JSX.Element {
  return (
    <>
      <PageMetadata title="Page not found" />
      <TrackedPage>
        <ScrollReveal>
          <LayoutDefault>
            <Animation
              src="./page_not_found.riv"
              style={{ height: "calc(100vh - 286px)", marginTop: "80px" }}
            ></Animation>
          </LayoutDefault>
        </ScrollReveal>
      </TrackedPage>
    </>
  );
}
