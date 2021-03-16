/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import GoogleAnalytics from "react-ga";
import { useLocation } from "react-router-dom";

/**
 * Initializes the GoogleAnalytics tracker with the code in the root .env file.
 */
export function initializeGoogleAnalytics(): void {
  GoogleAnalytics.initialize(process.env.REACT_APP_GA_CODE as string, {
    testMode: process.env.NODE_ENV === "test", // check if we are running in a test env
  });
}

/**
 * Wraps the given page with an analytics wrapper that updates the Google Analytics engine
 * when the user navigates to a new page.
 *
 * This should wrap all page routes that we want to track.
 */
export default function TrackedPage(
  child: React.ComponentType<any>
): React.ComponentType<any> {
  const location = useLocation<any>();

  useEffect(() => {
    trackPage(location.pathname + location.search);
  }, [location]);

  const trackPage = (page: string) => {
    GoogleAnalytics.set({ page });
    GoogleAnalytics.pageview(page);
  };

  return child;
}
