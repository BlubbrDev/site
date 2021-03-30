import React from "react";

/**
 * Defines the shape of the TestimonialTile props.
 */
interface TestimonialTileProps {
  from: "bottom" | "right" | "left";
  delay?: number;
  name: string;
  rank: string;
  message: string;
}

/**
 * A single testimonial tile.
 */
export default function TestimonialTile({
  delay = 0,
  name,
  rank,
  from = "bottom",
  message,
}: TestimonialTileProps): JSX.Element {
  return (
    <div className={"tiles-item reveal-from-" + from} data-reveal-delay={delay}>
      <div className="tiles-item-inner">
        <div className="testimonial-item-content">
          <p className="text-sm mb-0">{message}</p>
        </div>
        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
          <span className="testimonial-item-name text-color-high">{name}</span>
          <span className="text-color-low"> / </span>
          <span className="testimonial-item-link">
            <a href="/">{rank}</a>
          </span>
        </div>
      </div>
    </div>
  );
}
