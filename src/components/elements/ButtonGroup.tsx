import React, { ReactNode, ReactNodeArray } from "react";
import classNames from "classnames";

type ButtonGroupProp = {
  className?: String;
  children: ReactNode | ReactNodeArray;
};

export default function ButtonGroup(buttonGroupProps: ButtonGroupProp) {
  const classes = classNames("button-group", buttonGroupProps.className);
  return <div className={classes} />;
}
