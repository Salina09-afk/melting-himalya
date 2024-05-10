// MapPage.js
import React from "react";
import styles from "./MapPage.module.css";
import Sidebar from "../../ui/Sidebar/Sidebar";
import Navbar from "../../ui/Navbar/Navbar";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MapComponent from "../MapContent/MapContent";


const MapPage = () => {
  return (
    <>
      <Navbar />

      <div className={styles.electionResultCover}>
        <Sidebar />
        <div className={styles.pageContent}>
          <div className={styles.pageContentLeft}>
            <div className={styles.electionInfo}>
              <div className={styles.electionInfoUp}>
                <h2>World Map</h2>
              </div>
            </div>
            <div className={styles.pieChartCover}>
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapPage;
