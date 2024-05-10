import styles from "./ConclusionPage.module.css";
import Sidebar from "../../ui/Sidebar/Sidebar";
import Navbar from "../../ui/Navbar/Navbar";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";

const ConclusionPage = () => {
  return (
    <>
      <Navbar />

      <div className={styles.electionResultCover}>
        <Sidebar />
        <div className={styles.pageContent}>
          <div className={styles.pageContentLeft}>
            <div className={styles.electionInfo}>
              <div className={styles.electionInfoUp}>
                <h2>Results</h2>
              </div>
              <div className={styles.electionInfoDown}>
                <div className={styles.top}>
                  <img src="/images/nepgraph.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConclusionPage;
