import type { FC, HTMLAttributes } from "react";
import c from "./ActionCard.module.scss";
import CalendarIcon from "../../assets/icons/calendar_icon.svg?react";

type ActionCardProps = {
  name?: string;
  landfill: string;
  county: string;
  date: string;
  numberOfRegistrations: number;
} & HTMLAttributes<HTMLDivElement>;

const dateFormat = new Intl.DateTimeFormat("hr-HR", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
});
const weekdayFormat = new Intl.DateTimeFormat("hr-HR", { weekday: "long" });

const ActionCard: FC<ActionCardProps> = ({
  name="Volontersko čišćenje",
  landfill,
  county,
  date,
  numberOfRegistrations,
}) => {
  const parsedDate = new Date(date);

  return (
    <div className={c.card}>
      <CalendarIcon />
      <h3 className={c.name}>{name}</h3>
      <p className={c.location}>
        {landfill}
        <br />
        {county}
      </p>
      <div className={c.infosDiv}>
        <div className={c.info}>
          <span>{dateFormat.format(parsedDate)}</span>
          <strong>{weekdayFormat.format(parsedDate)}</strong>
        </div>
        <div className={c.info}>
          <span>Broj prijava</span>
          <span className={c.dot} /> {numberOfRegistrations}
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
