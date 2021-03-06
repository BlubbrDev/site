import React from "react";

import PageRouter from "./components/PageRouter.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageRouter />
      </header>
    </div>
  );
}
