import React, { ReactNode } from "react";
import classNames from "classnames";

interface FormLabel {
  className?: String;
  children?: ReactNode;
  labelHidden: boolean;
  id?: string;
}

export default function FormLabel(props: FormLabel) {
  const classes = classNames(
    "form-label",
    props.labelHidden && "screen-reader",
    props.className
  );

  return (
    <label className={classes} htmlFor={props.id}>
      {props.children}
    </label>
  );
}
