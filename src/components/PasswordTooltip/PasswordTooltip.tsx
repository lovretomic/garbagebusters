import React from "react";
import clsx from "clsx";
import c from "./PasswordTooltip.module.scss";
import { passwordRules } from "./PasswordTooltipCheck";

type PasswordTooltipProps = {
  password: string;
  title?: string;
  className?: string;
};

const PasswordTooltip: React.FC<PasswordTooltipProps> = ({
  password,
  title="Lozinka mora sadržavati:",
  className,
}) => (
  <div className={clsx(c.tooltip, className)}>
	<span>{title}</span>
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
