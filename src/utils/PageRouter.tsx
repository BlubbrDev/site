import LoadingSpinner from "components/elements/Loading";
import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "pages/Home";

const Spacs = lazy(() => import("pages/Spacs"));
const PageNotFound = lazy(() => import("pages/PageNotFound"));

/** This componenet looks through all its children elements (Routes) and tries to render the
 * first route where the path of that route matches the current URL. In this case, we want
 * to serve exactly one route at a time and switching over them is a good way to do that.
 */
export default function PageRouter(): JSX.Element {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/spacs" component={Spacs} />
        <Route exact path="/discord" render={_redirectToDiscord} />
        <Route component={PageNotFound} />
      </Switch>
    </Suspense>
  );
}

/**
 * Redirects the current window location to the discord url stored as an environment variable in
 * the env dotfile (look in the root directory).
 * @returns null
 */
function _redirectToDiscord(): React.ReactNode {
  window.location.href = process.env.REACT_APP_DISCORD_URL as string;
  return null;
}
