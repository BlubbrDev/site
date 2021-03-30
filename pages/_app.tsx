import "public/scss/style.scss";
import { useEffect } from "react";
import type { AppProps /*, AppContext */ } from "next/app";
import { initializeGoogleAnalytics } from "utils/GoogleAnalytics";

/**
 * This is the default part of the webapp that is shared between all pages of the site.
 */
function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initializeGoogleAnalytics();
  }, []);
  return <Component {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App;
