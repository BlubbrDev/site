import React from "react";
import { useRef, useEffect } from "react";
import { Rive } from "rive-js";

/**
 * Defines the shape of the props passed into the animation component as a parameter.
 */
interface AnimationProp {
  src: string;
  style: React.CSSProperties;
}

/**
 * Renders a new Rive Animation at the given src path and with the given style
 * attributes.
 * @param src the path to the riv file to use for the animation. This file should
 * be located in the root directory of the public folder.
 * @returns An animation component.
 */
export default function Animation({ src, style }: AnimationProp): JSX.Element {
  const canvas = useRef<HTMLCanvasElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = new Rive({
      src: src,
      canvas: canvas.current,
      autoplay: true,
    });
    resize();
    window.addEventListener("resize", resize);
    return () => {
      animation.current?.stop();
      window.removeEventListener("resize", resize);
    };
  }, [canvas, container]);

  const resize = () => {
    if (container.current && canvas.current) {
      const { width, height } = container.current.getBoundingClientRect();
      canvas.current.width = width;
      canvas.current.height = height;
    }
  };

  return (
    <div ref={container} style={style}>
      <canvas ref={canvas} />
    </div>
  );
}
