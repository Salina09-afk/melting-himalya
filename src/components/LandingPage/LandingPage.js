import React from "react";
import styles from "./LandingPage.module.css";
import Navbar from "../../ui/Navbar/Navbar";
import EastIcon from "@mui/icons-material/East";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import { Link } from "react-router-dom";

const getStartedClicked = () => {
  window.location.href = "/map-page";
};

const onIceClicked = () => {
  window.location.href = "/ice-graph-page";
};

const onTempClicked = () => {
  window.location.href = "/temp-graph-page";
};

const onConcludeClicked = () => {
  window.location.href = "/conclusion-page";
};

const LandingPage = () => {
  return (
    <div>
      <div className={styles.imageCover}>
        <Navbar />
        <div className={styles.body}>
          <h1 className={styles.bodyTitle}>
            NaviNepal : Mapping Nepal's Beauty
          </h1>
          <h5 className={styles.bodyContent}>
            This web platform provides an interactive exploration of climate
            change using data visualizations. Witness the concerning trends in
            glacial shrinkage and rising global temperatures. Delve into the
            scientific basis of climate change, exploring its causes and
            far-reaching consequences. Discover actionable steps you can take to
            contribute to solutions.
          </h5>
        </div>

        <Link to="/election-form">
          <button onClick={getStartedClicked} className={styles.startButton}>
            <p>Get Started</p>
            <EastIcon />
          </button>
        </Link>
      </div>

      <div className={styles.featureCover}>
        <div className={styles.feature} onClick={onIceClicked}>
          <p>Ice Melting Graph</p>

          <AcUnitOutlinedIcon className={styles.icon} />
        </div>

        <div className={styles.feature} onClick={onTempClicked}>
          <p>Average Temperature Graph</p>
          <ThermostatOutlinedIcon className={styles.icon} />
        </div>

        <div className={styles.feature} onClick={onConcludeClicked}>
          <p>Results</p>
          <MapOutlinedIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
