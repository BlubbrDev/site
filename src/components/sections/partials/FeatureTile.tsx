import React from "react";
import Image from "components/elements/Image";

/**
 * Defines the shape of the FeatureTile prop.
 */
interface FeatureTileProp {
  delay: number;
  title: string;
  body: string;
  img: { src: string; alt: string };
}

/**
 * A single feature that is shown as a simple tile.
 */
export default function FeatureTile({
  delay,
  title,
  body,
  img,
}: FeatureTileProp): JSX.Element {
  return (
    <div className="tiles-item reveal-from-bottom" data-reveal-delay={delay}>
      <div className="tiles-item-inner">
        <div className="features-tiles-item-header">
          <div className="features-tiles-item-image mb-16">
            <Image src={img.src} alt={img.alt} width={64} height={64} />
          </div>
        </div>
        <div className="features-tiles-item-content">
          <h3 className="h4 mt-0 mb-8">{title}</h3>
          <p className="m-0 text-sm">{body}</p>
        </div>
      </div>
    </div>
  );
}
