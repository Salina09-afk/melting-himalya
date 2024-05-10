import React from "react";
import styles from "./Navbar.module.css";
import { Link, Links } from "react-router-dom";

const handleClick = () => {
  window.location.href = "/";
};

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoCover}>
        <img
          className={styles.logo}
          src="\images\navinepal1.png"
          alt="decentral vote logo"
        />
      </div>

      <div className={styles.navActions}>
        <p>
          <button onClick={handleClick} className={styles.logoutBtn}>
            Log Out
          </button>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
