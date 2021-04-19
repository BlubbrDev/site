import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import { initializeGoogleAnalytics } from "util/GoogleAnalytics";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initializeGoogleAnalytics();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
