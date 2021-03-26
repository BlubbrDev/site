import React from "react";

/**
 * A default spinner animation to show while the page loads.
 * Credits to jdacosta from https://codepen.io/jdacosta/pen/dobzpM
 */
export default function LoadingSpinner(): JSX.Element {
  return (
    <div className="spinner-container">
      <svg
        className="spinner"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle className="internal-circle" cx="60" cy="60" r="30"></circle>
        <circle className="external-circle" cx="60" cy="60" r="50"></circle>
      </svg>
    </div>
  );
}
