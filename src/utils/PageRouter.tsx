import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Spacs from "pages/Spacs";
import PageNotFound from "pages/PageNotFound";
import TrackedPage from "utils/GoogleAnalytics";

// This componenet looks through all its children elements (Routes) and tries to render the
// first route where the path of that route matches the current URL. In this case, we want
// to serve exactly one route at a time and switching over them is a good way to do that.
export default function PageRouter(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={TrackedPage(Home)} />
      <Route exact path="/spacs" component={TrackedPage(Spacs)} />
      <Route exact path="/discord" render={_redirectToDiscord} />
      <Route component={TrackedPage(PageNotFound)} />
    </Switch>
  );
}

function _redirectToDiscord(): React.ReactNode {
  window.location.href = process.env.REACT_APP_DISCORD_URL as string;
  return null;
}
