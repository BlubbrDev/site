/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, ReactNodeArray, useEffect } from "react";
import GoogleAnalytics from "react-ga";
import { useRouter } from "next/router";
import Head from "next/head";

/**
 * Initializes the GoogleAnalytics tracker with the code in the root .env file.
 */
export function initializeGoogleAnalytics(): void {
  GoogleAnalytics.initialize(
    process.env.NEXT_PUBLIC_GA_CODE
    //, {
    //testMode: process.env.NODE_ENV === "test", // check if we are running in a test env
    //}
  );
}

/**
 * Event - Add custom tracking event.
 * @param {string} category
 * @param {string} action
 * @param {string} label
 */
export const logEvent = (category: string, action: string, label: string) => {
  GoogleAnalytics.event({
    category: category,
    action: action,
    label: label,
  });
};

/**
 * Defines the interface of props used by the tracked page component.
 */
interface TrackedPageProps {
  title: string;
  children: ReactNode | ReactNodeArray;
}

/**
 * Wraps the given page with an analytics wrapper that updates the Google Analytics engine
 * when the user navigates to a new page.
 *
 * This should wrap all page routes that we want to track.
 */
export default function TrackedPage({
  title,
  children,
}: TrackedPageProps): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    initializeGoogleAnalytics();
    return () => trackPage(router.pathname);
  }, [router]);

  const trackPage = (page: string) => {
    GoogleAnalytics.set({ page });
    GoogleAnalytics.pageview(page);
  };
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="Blubbr" />
        <meta
          property="og:description"
          content="Blubbr is the global leader in real-time automated notifications for key events in the lifecycle of every SPAC."
        />
        <meta property="og:image" content="/assets/images/base_whale_512.png" />
        <meta name="twitter:card" content="/assets/images/base_whale_512.png" />
        <meta name="twitter:title" content="Blubbr" />
        <meta
          name="twitter:description"
          content="Blubbr is the global leader in real-time automated notifications for key events in the lifecycle of every SPAC."
        />
        <meta
          name="twitter:image"
          content="/assets/images/base_whale_128.png"
        />
      </Head>
      {children}
    </>
  );
}
