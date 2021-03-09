import React, { ElementType } from "react";
import PropTypes, { string } from "prop-types";
import classNames from "classnames";

interface propTypes {
  className?: String;
  tag?: ElementType;
  color?: String;
  size?: String;
  loading?: boolean;
  wide?: boolean;
  wideMobile?: boolean;
  disabled?: boolean;
}

const defaultProps: propTypes = {
  tag: "button",
  color: "",
  size: "",
  loading: false,
  wide: false,
  wideMobile: false,
  disabled: false,
};

export default function Button(
  buttonProps: propTypes = defaultProps,
  ...props: any[]
) {
  const classes = classNames(
    "button",
    buttonProps.color && `button-${buttonProps.color}`,
    buttonProps.size && `button-${buttonProps.size}`,
    buttonProps.loading && "is-loading",
    buttonProps.wide && "button-block",
    buttonProps.wideMobile && "button-wide-mobile",
    buttonProps.className
  );

  const Component = buttonProps.tag;
  return (
    <Component {...props} className={classes} disabled={buttonProps.disabled} />
  );
}
