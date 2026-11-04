import { Outlet } from "react-router-dom";
import c from "./CitizenPageLayout.module.scss";
import Navigation from "../../components/Navigation";

import HouseIcon from "../../assets/icons/house_icon.svg";
import NotificationIcon from "../../assets/icons/notification_icon.svg";
import MapIcon from "../../assets/icons/map_icon.svg";

const CitizenPageLayout = () => {
  return (
    <div className={c.layout}>
      <div className={c.content}>
        <Outlet />
      </div>
      <Navigation
        items={[
          { label: "Item 1", href: "/home", icon: HouseIcon },
          { label: "Item 2", href: "/notifications", icon: NotificationIcon },
          { label: "Item 3", href: "/map", icon: MapIcon },
        ]}
      />
    </div>
  );
};

export default CitizenPageLayout;
