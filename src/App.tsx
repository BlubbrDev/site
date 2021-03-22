import React, { useEffect } from "react";
import PageRouter from "utils/PageRouter";
import { initializeGoogleAnalytics } from "utils/GoogleAnalytics";

export default function App(): JSX.Element {
  useEffect(() => {
    initializeGoogleAnalytics();
  }, []);

  return <PageRouter />;
}
