import ReportCard from "../../components/ReportCard";
import c from "./CitizenHomePage.module.scss";

const CitizenHomePage = () => {
  return (
    <>
      <h1>Citizen Home Page</h1>
      <div className={c.reportCardDiv}>
        <h2 className={c.title}>Odlagališta koje ste prijavili</h2>
        <ReportCard name="bla" area="bla" />
      </div>
    </>
  );
};

export default CitizenHomePage;
