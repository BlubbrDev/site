import React, { ReactNode } from "react";
import classNames from "classnames";

type SectionHeaderProps = {
  className?: string;
  children?: ReactNode;
  data: {
    title: string;
    paragraph: string;
  };
  tag?: "h1" | "h2" | "h3";
};

const SectionHeader = ({
  className = undefined,
  children = null,
  data,
  tag = "h2",
  ...props
}: SectionHeaderProps): JSX.Element => {
  const classes = classNames("section-header", className);

  const Component = tag;

  return (
    <>
      {(data.title || data.paragraph) && (
        <div {...props} className={classes}>
          <div className="container-xs">
            {children}
            {data.title && (
              <Component
                className={classNames(
                  "mt-0",
                  data.paragraph ? "mb-16" : "mb-0"
                )}
              >
                {data.title}
              </Component>
            )}
            {data.paragraph && <p className="m-0">{data.paragraph}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default SectionHeader;
