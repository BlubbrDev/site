import React, { ElementType } from "react";
import classNames from "classnames";

type ButtonProps = {
  className?: string;
  tag?: ElementType;
  color?: string;
  size?: string;
  loading?: boolean;
  wide?: boolean;
  wideMobile?: boolean;
  disabled?: boolean;
};

const defaultProps: ButtonProps = {
  tag: "button",
  color: "",
  size: "",
  loading: false,
  wide: false,
  wideMobile: false,
  disabled: false,
};

const Button = ({
  className,
  tag,
  color,
  size,
  loading,
  wide,
  wideMobile,
  disabled,
  ...props
}: ButtonProps = defaultProps) => {
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
  return <Component {...props} className={classes} disabled={disabled} />;
};

export default Button;
