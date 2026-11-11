import c from "./ReportCard.module.scss";
import React from "react";
import clsx from "clsx";
import GearIcon from "../../assets/icons/gear_icon.svg?react";
import DefaultImage from "../../assets/images/default_image.png";
import PersonCheckedIcon from "../../assets/icons/person_check_icon.svg?react";
import FlagIcon from "../../assets/icons/flag_icon.svg?react";

export type ReportStatus = "marked" | "checked" | "in_progress";

const STATUS = {
  in_progress: {
    Icon: GearIcon,
    label: "Sanacija u tijeku",
    className: c.statusInProgress,
  },
  marked: {
    Icon: FlagIcon,
    label: "Teren pregledan",
    className: c.statusMarked,
  },
  checked: {
    Icon: PersonCheckedIcon,
    label: "Zabilježeno",
    className: c.statusChecked,
  },
};

type ReportCardProps = {
  name?: React.ReactNode;
  area?: React.ReactNode;
  imageUrl?: string;
  status?: ReportStatus;
} & React.HTMLAttributes<HTMLDivElement>;

const ReportCard: React.FC<ReportCardProps> = ({
  name,
  area,
  imageUrl,
  status = "checked",
  className,
  ...handlers
}) => {
  const resolvedImageUrl = imageUrl || DefaultImage;
  const badge = status ? STATUS[status] : null;
  return (
    <div className={clsx(c.cardDiv, className)} {...handlers}>
      <div className={c.imageWrap}>
        <img src={resolvedImageUrl} alt="" className={c.backgroundImage} />
        <div className={c.gradientOverlay} />
      </div>

      {badge && (
        <div className={clsx(c.statusBadge, badge.className)}>
          <badge.Icon className={c.statusIcon} />
          <span>{badge.label}</span>
        </div>
      )}	

      <div className={c.content}>
        {name ? <span className={c.name}>{name}</span> : null}
        {area ? <span className={c.area}>{area}</span> : null}
      </div>
    </div>
  );
};

export default ReportCard;
