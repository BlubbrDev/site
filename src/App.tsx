import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import PageRouter from "utils/PageRouter";
import ScrollReveal from "utils/ScrollReveal";
import ReactGA from "react-ga";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE as string);

const trackPage = (page: string) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

export default function App() {
  const childRef = useRef<any>();
  let location = useLocation<any>();

  useEffect(() => {
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(location.pathname);
  }, [location]);
  return (
    <ScrollReveal ref={childRef}>
      <PageRouter />
    </ScrollReveal>
  );
}
