import React from 'react'
import styles from './Follow.module.css'

import follow from '../../assets/images/Servises Flowers.png';
import phone from '../../assets/images/phone.png';

const Follow = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["follow"]}>
       <div className={styles["follow-media"]}>
         <img src={follow} alt="follow" />
       </div>
       <div className={styles["follow-info"]}>
        <h2>Covid-19 sanitization</h2>
        <h3>We follow guidelines to keep you safe from the COVID-19 virus</h3>
        <p>Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
        <div className={styles["fellow-btn"]}>
        <button type="submit"> Get a free quote</button>
        <div className={styles["fellow-phone"]}>
          <img src={phone} alt="phone" />
          <div className={styles["fellow-phone-info"]}>
          <h3>Call us now</h3>
          <p>(414) 567 - 2109</p>
          </div>
        </div>
      </div>
       </div>
      </div>
    </div>
  )
}

export default Follow
