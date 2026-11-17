import c from "./UserGreeting.module.scss";

type UserGreetingProps = {
  name: string;
  avatarUrl: string;
  subtitle: string;
};

const UserGreeting: React.FC<UserGreetingProps> = ({ name, avatarUrl, subtitle }) => (
  <header className={c.greeting}>
    <div className={c.avatar}>
      <img src={avatarUrl} alt="" className={c.image} />
    </div>
    <h1 className={c.title}>Pozdrav, {name}!</h1>
    <p className={c.subtitle}>{subtitle}</p>
  </header>
);

export default UserGreeting;