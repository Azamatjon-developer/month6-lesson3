import React from "react";
import styles from "./AboutUs.module.css";

import box1 from "../../assets/images/aboutUS1.png";
import box2 from "../../assets/images/aboutUS2.png";
import box3 from "../../assets/images/aboutUS3.png";

const AboutUS = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["about-us"]}>
        <h1>About Us</h1>
        <p>
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
          nisi felis non ultrices massa id egestas quam velit pretium nu.
        </p>
      </div>
      <div className={styles["about-us-boxes"]}>
        <div className={styles["about-us-box"]}>
          <img src={box1} alt="box1" />
          <h3>1. Schedule online</h3>
          <p>
            Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
            sed n.
          </p>
        </div>
        <div className={styles["about-us-box"]}>
          <img src={box2} alt="box1" />
          <h3>2. Pay online easily</h3>
          <p>
            Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
            at nunc.
          </p>
        </div>
        <div className={styles["about-us-box"]}>
          <img src={box3} alt="box1" />
          <h3>3. Get your house cleaned</h3>
          <p>
            Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus
            eleifend.
          </p>
        </div>
      </div>
      <div className={styles["about-us-btn"]}>
        <button type="submit" className={styles["btn"]}>Get a free quote</button>
        <button type="submit" className={styles["btn-primary"]}>Explore services</button>
      </div>
    </div>
  );
};

export default AboutUS;
