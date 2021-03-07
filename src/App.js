import React from "react";
import "./App.scss";
import PageRouter from "./components/PageRouter.js";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageRouter />
      </header>
    </div>
  );
}
