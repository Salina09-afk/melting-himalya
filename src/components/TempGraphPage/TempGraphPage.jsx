import styles from "./TempGraphPage.module.css";
import Sidebar from "../../ui/Sidebar/Sidebar";
import Navbar from "../../ui/Navbar/Navbar";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";

const TempGraphPage = () => {
  return (
    <>
      <Navbar />

      <div className={styles.electionResultCover}>
        <Sidebar />
        <div className={styles.pageContent}>
          <div className={styles.pageContentLeft}>
            <div className={styles.electionInfo}>
              <div className={styles.electionInfoUp}>
                <h2>Average Temperature Graph</h2>
              </div>
              <div className={styles.electionInfoDown}>
                <div className={styles.electionInfoDownLeft}>
                  <h3>
                    Global warming is accelerating. This graph shows the average
                    temperature anomaly (difference from 1850-1900 baseline)
                    rising steadily. Data suggests 2023 may be the first year
                    exceeding 1.5 degrees Celsius above the baseline,
                    highlighting the urgency of climate action.
                  </h3>
                </div>

                <div className={styles.electionInfoDownRight}>
                  <div className={styles.electionDate}>
                    <ThermostatOutlinedIcon className={styles.icon} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pieChartCover}>
              <img src="/images/AvgTemp.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempGraphPage;
