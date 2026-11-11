import c from "./ReportCard.module.scss";
import React from "react";
import clsx from "clsx";
import GearIcon from "../../assets/icons/gear_icon.svg?react";
import DefaultImage from "../../assets/images/default_image.png";

export type ReportStatus = "todo" | "in_progress";

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
  status = "todo",
  className,
  ...handlers
}) => {
  const resolvedImageUrl = imageUrl || DefaultImage;
  return (
    <div className={clsx(c.cardDiv, className)} {...handlers}>
      <div className={c.imageWrap}>
        <img src={resolvedImageUrl} alt="" className={c.backgroundImage} />
        <div className={c.gradientOverlay} />
      </div>

      {status === "in_progress" && (
        <div className={c.statusBadge}>
          <GearIcon className={c.statusIcon} />
          <span>Sanacija u tijeku</span>
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
