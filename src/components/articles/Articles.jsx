import React from "react";
import box1 from "../../assets/images/Articles1.png";
import box2 from "../../assets/images/Articles2.png";

import styles from "./Articles.module.css";
const Articles = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["articles"]}>
        <h2>Articles & resources</h2>
        <div className={styles["articles-btn"]}>
          <button type="submit" className={styles["btn"]}>
            Get a free quote
          </button>
          <button type="submit" className={styles["btn-primary"]}>
            Browse articles
          </button>
        </div>{" "}
      </div>

      <div className={styles["articles-boxes"]}>
        <div className={styles["articles-all"]}>
          <div className={styles["articles-box"]}>
            <img src={box1} alt="articles-box1" />
            <div className={styles["articles-cards"]}>
              <div className={styles["articles-card"]}>
                <h2>
                  8 best vacuum cleaners to clean any mess for your home in 2022
                </h2>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className={styles["articles-card-info"]}>
                  <h3>Jan 28, 2022</h3>
                  <div className={styles["articles-Square"]}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["articles-box"]}>
            <img src={box2} alt="articles-box1" />
            <div className={styles["articles-cards"]}>
              <div className={styles["articles-card1"]}>
                <h2>
                  How to properly disinfect your phone and other electronics
                </h2>
                <p>
                  Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                  quis odio sit sit ac port titor sit males.
                </p>
                <div className={styles["articles-card-info"]}>
                  <h3>Feb 1, 2022</h3>
                  <div className={styles["articles-Square"]}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
