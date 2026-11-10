import c from "./Button.module.scss";
import React from "react";
import clsx from "clsx";

type ButtonProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  variant?: "primary" | "secondary" | "ternary";
  iconPosition?: "right" | "left";
  iconOnly?: boolean;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  title,
  subtitle,
  variant = "primary",
  iconPosition = "right",
  iconOnly = false,
  className,
  icon: Icon,
  ...handlers
}) => {
  return (
    <button
      className={clsx(c.button, className, c[variant], iconOnly && c.iconOnly)}
      {...handlers}
    >
      {iconPosition == "right" && (
        <>
          {!iconOnly && (
            <span className={c.text}>
              {title ? <span className={c.title}>{title}</span> : null}
              {subtitle ? <span className={c.subtitle}>{subtitle}</span> : null}
            </span>
          )}
          <span className={c.icon}>
            <Icon />
          </span>
        </>
      )}
      {iconPosition == "left" && (
        <>
          <span className={c.icon}>
            <Icon />
          </span>
          {!iconOnly && (
            <span className={c.text}>
              {title ? <span className={c.title}>{title}</span> : null}
              {subtitle ? <span className={c.subtitle}>{subtitle}</span> : null}
            </span>
          )}
        </>
      )}
    </button>
  );
};
export default Button;
