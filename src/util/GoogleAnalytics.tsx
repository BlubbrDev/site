/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, ReactNodeArray, useEffect } from "react";
import GoogleAnalytics from "react-ga";
import { useRouter } from "next/router";

/**
 * Initializes the GoogleAnalytics tracker with the code in the root .env file.
 */
export function initializeGoogleAnalytics(): void {
  GoogleAnalytics.initialize(process.env.NEXT_PUBLIC_GA_CODE, {
    testMode: process.env.NODE_ENV === "test", // check if we are running in a test env
  });
}

/**
 * Defines the interface of props used by the tracked page component.
 */
interface TrackedPageProps {
  children: ReactNode | ReactNodeArray;
}

/**
 * Wraps the given page with an analytics wrapper that updates the Google Analytics engine
 * when the user navigates to a new page.
 *
 * This should wrap all page routes that we want to track.
 */
export default function TrackedPage({
  children,
}: TrackedPageProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    return () => trackPage(router.pathname);
  }, [router]);

  const trackPage = (page: string) => {
    GoogleAnalytics.set({ page });
    GoogleAnalytics.pageview(page);
  };
  return <>{children}</>;
}
