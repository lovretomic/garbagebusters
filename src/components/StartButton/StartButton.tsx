import c from "./StartButton.module.scss";
import React, {isValidElement} from "react";
import clsx from "clsx"

type StartButtonProps = {
  children?: React.ReactNode;
  text?: React.ReactNode;
  subtext?: React.ReactNode;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StartButton: React.FC<StartButtonProps> = ({
  children,
  text,
  subtext,
  className,
  icon,
  ...handlers
}) => {
  return (
    <button
      className={clsx(c.button, className)}
      {...handlers}
    >
        {icon ? (
        <span className={c.icon}>
          {typeof icon === "string" ? (
            <img src={icon} alt="" />
          ) : isValidElement(icon) ? (
            icon
          ) : null}
        </span>
      ) : null}

      <span className={c.text}>
        {text ? <span className={c.text}>{text}</span> : null}
        {subtext ? <span className={c.subtext}>{subtext}</span> : null}
        {children ? <span className={c.title}>{children}</span> : null}
      </span>
    </button>
  );
};
export default StartButton;