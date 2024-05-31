import React from "react";

import styles from "./Services.module.css";
import servicesBox1 from "../../assets/images/Servises1.png";
import servicesBox2 from "../../assets/images/Servises2.png";

import servicesBox3 from "../../assets/images/Servises3.png";
const Services = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["services"]}>
        <h2>Our Services</h2>
        <button type="submit" className={styles["btn-primary"]}>Explore services</button>
      </div>
      <div className={styles["services-boxes"]}>
        <div className={styles["services-box"]}>
          <img src={servicesBox1} alt="servicesBox1" />
          <h2>House cleaning</h2>
          <p>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
            dalaracc lacus vel facilisis volutpat est.
          </p>
        </div>
        <div className={styles["services-box"]}>
          <img src={servicesBox2} alt="servicesBox1" />
          <h2>Office cleaning</h2>
          <p>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
            dalaracc lacus vel facilisis volutpat est.
          </p>
        </div>
        <div className={styles["services-box"]}>
          <img src={servicesBox3} alt="servicesBox1" />
          <h2>Industrial cleaning</h2>
          <p>
            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
            dalaracc lacus vel facilisis volutpat est.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
