import React from "react";
import clsx from "clsx";
import c from "./PasswordTooltip.module.scss";
import { passwordRules } from "./PasswordTooltipCheck";

type PasswordTooltipProps = {
  password: string;
  passed?: boolean;
  title?: string;
  className?: string;
};

const PasswordTooltip: React.FC<PasswordTooltipProps> = ({
  password,
  title = "Lozinka mora sadržavati:",
  passed = false,
  className,
}) => (
  <div className={clsx(c.tooltip, className, passed && c.met)}>
    <span className={clsx(passed && c.met)}>{title}</span>
    <ul className={c.list}>
      {passwordRules.map((rule) => (
        <li
          key={rule.id}
          className={clsx(c.rule, rule.test(password) && c.met)}
        >
          <div className={clsx(c.dot, rule.test(password) && c.dotMet)}></div>
          {rule.label}
        </li>
      ))}
    </ul>
  </div>
);

export default PasswordTooltip;
