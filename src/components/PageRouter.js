import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home.js";
import Spacs from "../pages/Spacs.js";

// This componenet looks through all its children elements (Routes) and tries to render the
// first route where the path of that route matches the current URL. In this case, we want
// to serve exactly one route at a time and switching over them is a good way to do that.
export default function PageRouter() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/spacs" component={Spacs} />
        <Route exact path="/discord" render={_goToDiscord} />
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

function _goToDiscord() {
  window.location = "https://discord.gg/ZtAWMP2DDd";
}
