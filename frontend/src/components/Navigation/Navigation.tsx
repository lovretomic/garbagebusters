import c from "./Navigation.module.scss";
import PlusIcon from "../../assets/icons/plus_icon.svg";

export type NavigationItemProps = {
  label: string;
  href: string;
  icon: string;
};

type NavigationProps = {
  items: NavigationItemProps[];
};

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className={c.navigation}>
      {items.map((item, index) => (
        <a key={index} href={item.href} className={c.item}>
          <img src={item.icon} alt={`${item.label} icon`} />
          <span className={c.label}>{item.label}</span>
        </a>
      ))}
      <button className={c.addButton}>
        <img src={PlusIcon} alt="Plus Icon" />
      </button>
    </nav>
  );
};

export default Navigation;
