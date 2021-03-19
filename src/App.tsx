import React, { useEffect, useRef } from "react";
import PageRouter from "utils/PageRouter";
import ScrollReveal from "utils/ScrollReveal";

export default function App(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childRef = useRef<any>();

  useEffect(() => {
    document.body.classList.add("is-loaded");
    childRef.current.init();
  }, []);

  return (
    <ScrollReveal ref={childRef}>
      <PageRouter />
    </ScrollReveal>
  );
}
