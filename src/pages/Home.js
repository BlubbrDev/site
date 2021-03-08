import React from "react";

import NavBar from "../components/nav-bar/NavBar";
// import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <>
      <NavBar />
      {/* <Hero /> */}
      <div>
        <p>
          Welcome to <code>blubbr.io</code>!
        </p>
      </div>
    </>
  );
}
