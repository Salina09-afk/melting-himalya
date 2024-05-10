import styles from "./IceGraphPage.module.css";
import Sidebar from "../../ui/Sidebar/Sidebar";
import Navbar from "../../ui/Navbar/Navbar";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import { typographyClasses } from "@mui/material";

const IceGraphPage = () => {
  return (
    <>
      <Navbar />

      <div className={styles.electionResultCover}>
        <Sidebar />
        <div className={styles.pageContent}>
          <div className={styles.pageContentLeft}>
            <div className={styles.electionInfo}>
              <div className={styles.electionInfoUp}>
                <h2>Ice Melting Graph</h2>
              </div>
              <div className={styles.electionInfoDown}>
                <div className={styles.electionInfoDownLeft}>
                  <h3>
                    The graph below represents the volume change over time for
                    few major glaciers of Nepal including Marsyangdi Basin,
                    Bheri, Tamor and Trishuli Basin. All the basins have been
                    noticed with more than 40% of volume loss till the end of
                    this century. This extensive loss of volume suggests a
                    potential threat to water availability in the future.
                  </h3>
                </div>

                <div className={styles.electionInfoDownRight}>
                  <div className={styles.electionDate}>
                    <AcUnitOutlinedIcon className={styles.icon} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pieChartCover}>
              <div className={styles.top}>
                <div className={styles.topleft}>
                  <img src="/images/ice1.jpg" alt="" />
                </div>
                <div className={styles.topright}>
                  <img src="/images/ice2.jpg" alt="" />
                </div>
              </div>
              <div className={styles.bottom}>
                <div className={styles.bottomleft}>
                  <img src="/images/ice3.jpg" alt="" />
                </div>
                <div className={styles.bottomright}>
                  <img src="/images/ice4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IceGraphPage;
