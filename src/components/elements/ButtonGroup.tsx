import React from "react";
import classNames from "classnames";

type ButtonGroupProp = {
  className?: String;
  children: Element[];
  props?: any[];
};

export default function ButtonGroup({ className, ...props }: ButtonGroupProp) {
  const classes = classNames("button-group", className);
  return <div {...props} className={classes} />;
}
