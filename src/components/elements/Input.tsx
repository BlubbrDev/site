import React, { ReactNode } from "react";
import classNames from "classnames";
import FormLabel from "./FormLabel";
import FormHint from "./FormHint";

interface InputProps {
  children: ReactNode;
  label: string;
  labelHidden: boolean;
  type:
    | "textarea"
    | "text"
    | "email"
    | "tel"
    | "password"
    | "number"
    | "search"
    | "color"
    | "date"
    | "time"
    | "datetime-local";
  name?: string;
  status?: string;
  disabled?: boolean;
  value?: string;
  formGroup?: string;
  hasIcon?: string;
  size?: string;
  placeholder: string;
  rows?: number;
  hint?: string;
  id?: string;
  className?: string;
}

const defaultInputProps: InputProps = {
  children: null,
  label: "",
  labelHidden: false,
  type: "text",
  status: "",
  disabled: false,
  value: undefined,
  size: "",
  placeholder: "",
  rows: 3,
};

export default function Input(props: InputProps = defaultInputProps) {
  const wrapperClasses = classNames(
    props.formGroup &&
      props.formGroup !== "" &&
      (props.formGroup === "desktop" ? "form-group-desktop" : "form-group"),
    props.hasIcon && props.hasIcon !== "" && "has-icon-" + props.hasIcon
  );

  const classes = classNames(
    "form-input",
    props.size && `form-input-${props.size}`,
    status && `form-${status}`,
    props.className
  );

  const Component = props.type === "textarea" ? "textarea" : "input";
  return (
    <>
      {props.label && (
        <FormLabel labelHidden={props.labelHidden} id={props.id}>
          {props.label}
        </FormLabel>
      )}
      <div className={wrapperClasses}>
        <Component
          type={props.type !== "textarea" ? props.type : undefined}
          className={classes}
          name={props.name}
          disabled={props.disabled}
          value={props.value}
          placeholder={props.placeholder}
          rows={props.type === "textarea" ? props.rows : undefined}
        />
        {props.children}
      </div>
      {props.hint && <FormHint status={status}>{props.hint}</FormHint>}
    </>
  );
}
