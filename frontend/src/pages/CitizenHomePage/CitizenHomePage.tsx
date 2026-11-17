import ReportCard from "../../components/ReportCard";
import ActionCard from "../../components/ActionCard";
import CardCarousel from "../../components/CardCarousel";
import UserGreeting from "../../components/UserGreeting";
import ProfilePlaceholder from "../../assets/images/profile_placeholder.webp";
import c from "./CitizenHomePage.module.scss";

const reports = [
  {
    id: 1,
    name: "Odlagalište PPK Velebit",
    area: "Gospić",
    status: "in_progress",
  },
  { id: 2, name: "Odlagalište Sodol", area: "Ogulin", status: "checked" },
] as const;

const actions = [
  {
    id: 1,
    landfill: "Odlagalište PPK Velebit",
    county: "Ličko-senjska",
    date: "2026-11-13",
    numberOfRegistrations: 177,
  },
  {
    id: 2,
    landfill: "Odlagalište PPK Velebit",
    county: "Ličko-senjska",
    date: "2026-11-14",
    numberOfRegistrations: 12,
  },
] as const;

const CitizenHomePage = () => (
  <main className={c.page}>
    <UserGreeting
      name="Mak"
      avatarUrl={ProfilePlaceholder}
      subtitle="Nažalost, nemate novih obavijesti."
    />

    <section className={c.section}>
      <h2 className={c.title}>Odlagališta koja ste prijavili</h2>
      <CardCarousel>
        {reports.map((report) => (
          <ReportCard
            key={report.id}
            name={report.name}
            area={report.area}
            status={report.status}
          />
        ))}
      </CardCarousel>
    </section>

    <section className={c.section}>
      <h2 className={c.title}>Vaše akcije</h2>
      <CardCarousel>
        {actions.map((action) => (
          <ActionCard
            key={action.id}
            landfill={action.landfill}
            county={action.county}
            date={action.date}
            numberOfRegistrations={action.numberOfRegistrations}
          />
        ))}
      </CardCarousel>
    </section>
  </main>
);

export default CitizenHomePage;
