import ReportCard from "../../components/ReportCard";
import c from "./CitizenHomePage.module.scss";

const CitizenHomePage = () => {
  return (
    <>
      <h1>Citizen Home Page</h1>
      <h2 className={c.title}>Odlagališta koja ste prijavili</h2>
      <div className={c.reportCardDiv}>
        <ReportCard name="Odlagalište PPK Velebit" area="Gospić" status="checked"/>
        <ReportCard name="Odlagalište PPK Velebit" area="Gospić" status="in_progress"/>
        <ReportCard name="Odlagalište PPK Velebit" area="Gospić" status="marked"/>
      </div>
    </>
  );
};

export default CitizenHomePage;
