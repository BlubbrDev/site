import classNames from "classnames";
import Image from "components/elements/Image";
import React from "react";

/**
 * Defines the shape of the props for FeatureSplitRow.
 */
interface FeatureSplitRowProps {
  overline: string;
  title: string;
  body: string;
  shouldFill: boolean;
  from: string;
  img: {
    src: string;
    alt: string;
  };
}

/**
 * A single row that is part of the FeatureSplit section.
 */
export default function FeatureSplitRow({
  overline,
  title,
  body,
  img,
  from,
  shouldFill,
}: FeatureSplitRowProps): JSX.Element {
  const defaultClassName = "split-item-content center-content-mobile";
  const imgClassName = defaultClassName + " reveal-from-bottom";
  return (
    <div className="split-item">
      <div
        className={defaultClassName + " reveal-from-" + from}
        data-reveal-container=".split-item"
      >
        <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
          {overline}
        </div>
        <h3 className="mt-0 mb-12">{title}</h3>
        <p className="m-0">{body}</p>
      </div>
      <div
        className={classNames(
          imgClassName,
          shouldFill && "split-item-image-fill"
        )}
        data-reveal-container=".split-item"
      >
        <Image src={img.src} alt={img.alt} width={528} height={396} />
      </div>
    </div>
  );
}
