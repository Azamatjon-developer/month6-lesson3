import React from "react";

import styles from "./Contact.module.css";

import phone from "../../assets/images/phone.png";

const Contact = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["contact"]}>
        <div className={styles["Contact-info"]}>
          <h1>Contact Us </h1>
          <p>
            {" "}
            In dignissim euismod pretium amet enim a eu nam ut urna accumsan
            pellentesque lacus duis pharetra eutortor.
          </p>
          <div className={styles["hero-phone"]}>
            <img src={phone} alt="" />
            <div className={styles["hero-phone-info"]}>
              <p>Call us now</p>
              <p className={styles["hero-phone-number"]}>(414) 567 - 2109</p>
            </div>
          </div>
          <div className={styles["hero-line"]}></div>
          <h2>Not convinced yet?</h2>
          <p>
            Massa bibendum consectetur maurisid gravida purus, dolor dui amet
            morbi non nunc urna purus diam.
          </p>
          <button type="submit" className={styles["btn-primary"]}>
            Browse our packages
          </button>
        </div>
        <div className={styles["contact-forms"]}>
          <div className={styles["contact-input-all"]}>
            <div className={styles["contact-form"]}>
              <form>
                <p>Full name</p>
                <input type="text" />
              </form>
            </div>
            <div className={styles["contact-form"]}>
              <form>
                <p>Phone number</p>
                <input type="number" />
              </form>
            </div>
          </div>
          <div className={styles["contact-input-all"]}>
            <div className={styles["contact-form"]}>
              <form>
                <p>Address</p>
                <input type="text" />
              </form>
            </div>
            <div className={styles["contact-form"]}>
              <form>
                <p>Email</p>
                <input type="number" />
              </form>
            </div>
          </div>
          <div className={styles["contact-input-all"]}>
            <div className={styles["contact-form"]}>
              <form>
                <p>Requested service</p>
                <input type="text" />
              </form>
            </div>
            <div className={styles["contact-form"]}>
              <form>
                <p>Day of service</p>
                <input type="number" />
              </form>
            </div>
          </div>
          <div className={styles["contact-textarea"]}>
            <p>Add a note</p>
            <textarea></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
