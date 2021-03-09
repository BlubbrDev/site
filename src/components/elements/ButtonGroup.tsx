import React, { ReactNode, ReactNodeArray } from "react";
import classNames from "classnames";

type ButtonGroupProp = {
  className?: String;
  children: ReactNode | ReactNodeArray;
};

export default function ButtonGroup(buttonGroupProps: ButtonGroupProp, ...props: any) {
  const classes = classNames("button-group", buttonGroupProps.className);
  return <div {...props} className={classes} />;
}
