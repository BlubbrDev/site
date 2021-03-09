import React from "react";
import classNames from "classnames";

export default function ButtonGroup(className?: String, ...props: any[]) {
  const classes = classNames("button-group", className);
  return <div {...props} className={classes} />;
}
