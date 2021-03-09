import React, { ElementType, ReactNode, ReactNodeArray } from "react";
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
  children?: ReactNode | ReactNodeArray;
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
}: ButtonProps) {
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
  return <Component href={href} className={classes} disabled={disabled} />;
}
