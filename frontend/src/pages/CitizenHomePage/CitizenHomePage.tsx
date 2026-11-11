import ReportCard from "../../components/ReportCard";
import c from "./CitizenHomePage.module.scss";

const CitizenHomePage = () => {
  return (
    <>
      <h1>Citizen Home Page</h1>
      <div className={c.reportCardDiv}>
        <h2 className={c.title}>Odlagališta koja ste prijavili</h2>
        <ReportCard name="Odlagalište PPK Velebit" area="Gospić" />
      </div>
    </>
  );
};

export default CitizenHomePage;
