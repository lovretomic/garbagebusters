import { Outlet } from "react-router-dom";
import c from "./CitizenPageLayout.module.scss";

const CitizenPageLayout = () => {
  return (
    <div className={c.layout}>
      <div className={c.content}>
        <Outlet />
      </div>
      <nav>
        <a href="">Item 1</a>
        <a href="">Item 2</a>
        <a href="">Item 3</a>
        <a href="">Item 4</a>
      </nav>
    </div>
  );
};

export default CitizenPageLayout;
