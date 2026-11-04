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
          { label: "Item 1", href: "/item1", icon: HouseIcon },
          { label: "Item 2", href: "/item2", icon: NotificationIcon },
          { label: "Item 3", href: "/item3", icon: MapIcon },
        ]}
      />
    </div>
  );
};

export default CitizenPageLayout;
