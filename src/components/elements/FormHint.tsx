import React, { ReactNode } from "react";
import classNames from "classnames";

interface FormHintProp {
  children?: ReactNode;
  className?: string;
  status?: string;
}

export default function FormHint(props: FormHintProp): JSX.Element {
  const classes = classNames(
    "form-hint",
    props.status && `text-color-${props.status}`,
    props.className
  );

  return <div className={classes}>{props.children}</div>;
}
