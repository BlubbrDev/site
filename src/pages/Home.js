import React from "react";

import logo from "../assets/img/logo.svg";

function Home() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome to <code>blubbr.io</code>, Soren Rood!
      </p>
    </div>
  );
}

export default Home();
