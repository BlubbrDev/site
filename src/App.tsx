import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import PageRouter from "utils/PageRouter";
import ScrollReveal from "utils/ScrollReveal";
import { initializeGoogleAnalytics } from "utils/GoogleAnalytics";

initializeGoogleAnalytics();

export default function App() {
  const childRef = useRef<any>();
  let location = useLocation<any>();

  useEffect(() => {
    document.body.classList.add("is-loaded");
    childRef.current.init();
  }, [location]);

  return (
    <ScrollReveal ref={childRef}>
      <PageRouter />
    </ScrollReveal>
  );
}
