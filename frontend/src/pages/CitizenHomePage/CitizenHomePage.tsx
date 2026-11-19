import ReportCard from "../../components/ReportCard";
import ActionCard from "../../components/ActionCard";
import CardCarousel from "../../components/CardCarousel";
import UserGreeting from "../../components/UserGreeting";
import ProfilePlaceholder from "../../assets/images/profile_placeholder.webp";
import ReportPlaceholder from "../../assets/images/report_placeholder.webp";
import c from "./CitizenHomePage.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

type Report = {
  ID_Report: number;
  category: string;
  report_status: "Prijavljeno" | "Službena sanacija" | "Akcija u tijeku" | "Očišćeno";
  Report_date: string;
  GPS_coordinates: string;
  photos_before?: string;
};

type User = {
  id: number;
  email: string;
  name?: string;
  profile_photo?: string | null;
};

const statusMap = {
  Prijavljeno: "reported",
  "Službena sanacija": "official_sanation",
  "Akcija u tijeku": "in_progress",
  Očišćeno: "cleaned",
} as const;

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

const CitizenHomePage = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    axios
      .get<Report[]>("/reports/me")
      .then((res) => setReports(res.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    axios
      .get<{ user: User }>("/auth/me")
      .then((res) => setUser(res.data.user))
      .catch(console.error);
  }, []);

  return (
    <main className={c.page}>
      <UserGreeting
        name={user?.name ?? "korisnik"}
        avatarUrl={user?.profile_photo || ProfilePlaceholder}
        subtitle="Nažalost, nemate novih obavijesti."
      />

      <section className={c.section}>
        <h2 className={c.title}>Odlagališta koja ste prijavili</h2>
        <CardCarousel>
          {reports.map((report) => (
            <ReportCard
              key={report.ID_Report}
              name={`Prijava #${report.ID_Report}`}
              area={report.GPS_coordinates}
              imageUrl={report.photos_before || ReportPlaceholder}
              status={statusMap[report.report_status]}
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
};

export default CitizenHomePage;
