import React from "react";
import logo from "../../assets/images/CleaningXlogo.png";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["header-list"]}>
        <img src={logo} alt="header-logo" />
        <ul className={styles["list"]}>
          <li>
            <a href="#home">Home </a>
          </li>
          <li>
            <a href="#about">About </a>
          </li>
          <li>
            <a href="#services">Services </a>
          </li>
          <li>
            <a href="#articles"> Articles </a>
          </li>
          <li>
            <a href="#contact"> Contact </a>
          </li>
        </ul>
        <ul className={styles["list-btn"]}>
          <li>
            <button type="submit" className={styles["btn"]}>
              Cart (0)
            </button>
            <button type="submit" className={styles["btn-primary"]}>
              Get a free quote
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
