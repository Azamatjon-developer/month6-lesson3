import React from "react";

import styles from "./Footer.module.css";

import logo from "../../assets/images/CleaningXlogo.png";
const Footer = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["footer-info"]}>
        <div className={styles["footer-desc"]}>
          <h2>Quality cleaning for your home</h2>
          <p>
            Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.
          </p>
        </div>
        <div className={styles["footer-desc"]}>
          <h2>Contact us</h2>
          <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
          <p>(414) 567 - 2109</p>
          <p>contact@cleaning.com</p>
        </div>
        <div className={styles["footer-desc"]}>
          <h2>Hours</h2>
          <h3>Monday to Friday</h3>
          <p>6:00 AM - 9:00 PM</p>
          <h3>Saturday & Sunday</h3>
          <p>8:00 AM - 8:00 PM</p>
        </div>

        <div className={styles["footer-desc"]}>
          <h2>Get a free estimate</h2>
          <h3 className={styles["footer-phone"]}>(414) 567 - 2109</h3>
          <p>
            Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.
          </p>
          <button type="submit">Request a free quote</button>
        </div>
      </div>
      <div className={styles["footer-logo"]}>
        <div className={styles["footer-logo-img"]}>
          <img src={logo} alt="logo" />
        </div>
        <ul className={styles["list"]}>
          <li>Copyright © Cleaning X | Designed by</li>
          <li className={styles["list-blue"]}>BRIX Templates</li>
          <li>- Powered by</li>
          <li className={styles["list-blue"]}>Webflow</li>
          <li className={styles["list-blue"]}>Licenses</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
