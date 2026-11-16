import ReportCard from "../../components/ReportCard";
import ActionCard from "../../components/ActionCard";
import c from "./CitizenHomePage.module.scss";

const CitizenHomePage = () => {
  return (
    <>
      <h1>Citizen Home Page</h1>
      <h2 className={c.title}>Odlagališta koja ste prijavili</h2>
      <div className={c.reportCardDiv}>
        <ReportCard
          name="Odlagalište PPK Velebit"
          area="Gospić"
          status="checked"
        />
        <ReportCard
          name="Odlagalište PPK Velebit"
          area="Gospić"
          status="in_progress"
        />
        <ActionCard
          landfill="Odlagalište PPK Velebit"
          county="Ličko-senjska"
          date="2026-11-13"
          numberOfRegistrations={17}
        />
      </div>
    </>
  );
};

export default CitizenHomePage;
