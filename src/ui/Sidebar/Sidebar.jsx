import styles from "./Sidebar.module.css";
import SidebarComponent from "../SidebarComponent/SidebarComponent";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className={styles.sidebarCover}>
      <div className={styles.sidebarContents}>
        <Link to="/ice-graph-page">
          <SidebarComponent
            optionTitle="Ice Melting Graph"
            iconTitle={<AcUnitOutlinedIcon />}
          />
        </Link>

        <Link to="/temp-graph-page">
          <SidebarComponent
            optionTitle="Average Temperature Graph"
            iconTitle={<ThermostatOutlinedIcon />}
          />{" "}
        </Link>

        <Link to="/conclusion-page">
          <SidebarComponent
            optionTitle="Results"
            iconTitle={<MapOutlinedIcon />}
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
