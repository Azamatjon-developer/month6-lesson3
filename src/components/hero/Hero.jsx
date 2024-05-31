import React from "react";
import styles from "./Hero.module.css";
import phone from "../../assets/images/phone.png";
import heroRight from "../../assets/images/HeroImg.png";

const Hero = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container-list"]}>
        <div className={styles["hero-left"]}>
          <h1>Quality cleaning for your home</h1>
          <p>
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className={styles["hero-btn"]}>
            <button className={styles["btn"]}> Get a free quote</button>
            <div className={styles["hero-phone"]}>
              <img src={phone} alt="" />
              <div className={styles["hero-phone-info"]}>
                <p>Call us now</p>
                <p className={styles["hero-phone-number"]}>(414) 567 - 2109</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={heroRight} alt="heroRight" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
