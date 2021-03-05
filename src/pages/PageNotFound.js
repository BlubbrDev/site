/* eslint-disable no-undef */
import React, { useEffect } from "react";

export default function PageNotFound() {
  useEffect(() => _loadRiveAnimation());

  return (
    <>
      <canvas id="canvas" width="600" height="500">
        <script src={_loadRiveAnimation}></script>
      </canvas>
      <code>page not found</code>
    </>
  );
}

function _loadRiveAnimation() {
  // autoplays the first animation in the default artboard
  new RiveAnimation({
    src: "https://cdn.rive.app/animations/tv_color.riv",
    canvas: document.getElementById("canvas"),
    autoplay: true,
    alignment: new CanvasAlignment({
      fit: "fitWidth",
      alignment: "center",
    }),
  });
}