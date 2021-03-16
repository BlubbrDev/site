import React, { ReactNode } from "react";
import classNames from "classnames";

type ButtonGroupProp = {
  className?: string;
  children: ReactNode[];
};

export default function ButtonGroup(buttonGroupProps: ButtonGroupProp): JSX.Element {
  const classes = classNames("button-group", buttonGroupProps.className);
  return <div className={classes}>{buttonGroupProps.children}</div>;
}
