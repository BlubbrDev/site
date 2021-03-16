import React, { ElementType, ReactNode } from "react";
import classNames from "classnames";
import { JsxAttribute, JsxAttributes } from "typescript";

type ButtonProps = {
  className?: string;
  tag: ElementType;
  color?: string;
  size?: string;
  href: string;
  loading?: boolean;
  wide?: boolean;
  wideMobile?: boolean;
  disabled?: boolean;
  children: ReactNode[] | ReactNode;
  props?: JsxAttribute | JsxAttributes[];
};

export default function Button({
  tag = "button",
  href = "/",
  color = "",
  className = "",
  size = "",
  loading = false,
  wide = false,
  wideMobile = false,
  disabled = false,
  children = undefined,
}: ButtonProps): JSX.Element {
  const classes = classNames(
    "button",
    color && `button-${color}`,
    size && `button-${size}`,
    loading && "is-loading",
    wide && "button-block",
    wideMobile && "button-wide-mobile",
    className
  );

  const Component = tag;
  return (
    <Component href={href} className={classes} disabled={disabled}>
      {children}
    </Component>
  );
}
