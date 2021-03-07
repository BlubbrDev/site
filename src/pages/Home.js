import React from "react";

// import logo from "../assets/img/logo.svg";
import BlubbrNav from "../components/BlubbrNav";

export default function Home() {
  return (
    <>
      <BlubbrNav />
      <div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Welcome to <code>blubbr.io</code>!
        </p>
      </div>
    </>
  );
}
