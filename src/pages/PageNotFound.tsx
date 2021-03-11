import React from "react";
import { useRef, useEffect } from "react";
import { RiveAnimation } from "rive-js";
import LayoutDefault from "layouts/LayoutDefault";

export default function PageNotFound() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = new RiveAnimation({
      src: "./page_not_found.riv",
      canvas: canvas.current,
      autoplay: true,
    });

    resize();
    window.addEventListener("resize", resize);
    return () => {
      animation.current?.stop();
      window.removeEventListener("resize", resize);
    };
  }, []);

  const resize = () => {
    if (container.current && canvas.current) {
      const { width, height } = container.current.getBoundingClientRect();
      canvas.current.width = width;
      canvas.current.height = height;
    }
  };

  return (
    <LayoutDefault>
      <div
        ref={container}
        className="OuterContainer"
        style={{ height: "calc(100vh - 286px)", marginTop: "80px" }}
      >
        <div className="InnerContainer">
          <canvas ref={canvas} />
        </div>
      </div>
    </LayoutDefault>
  );
}
