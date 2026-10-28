import React from "react";
import c from "./Input.module.scss";
import clsx from "clsx";

type InputProps = {
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...handlers }, ref) => (
    <input ref={ref} className={clsx(c.input, className)} {...handlers} />
  )
);

export default Input;