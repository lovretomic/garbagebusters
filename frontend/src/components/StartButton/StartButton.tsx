import c from "./StartButton.module.scss";
import React from "react";
import clsx from "clsx"

type StartButtonProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StartButton: React.FC<StartButtonProps> = ({
  title,
  subtitle,
  className,
  icon: Icon,
  ...handlers
}) => {
  return (
    <button className={clsx(c.button, className)} {...handlers}>
      <span className={c.icon}>
        <Icon />
      </span>

      <span className={c.text}>
        {title ? <span className={c.title}>{title}</span> : null}
        {subtitle ? <span className={c.subtitle}>{subtitle}</span> : null}
      </span>
    </button>
  );
};
export default StartButton;