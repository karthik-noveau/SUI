import React from "react";

import styles from "./adStyles.module.css"

export const AdContainer = () => {
  return (
    <>
      <div className={styles.adSection}>
        <img
          src="https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg"
          alt="skynoveauLogo"
        />
        <div className={styles.adTextSection}>
          <p className={styles.adTextContent}>
            Build your premium Website at an Affordable Cost - Skynoveau
            Technology The making wonders
            <span> </span>
          </p>
          <p className={styles.adBy}>ad by SKYUI</p>
        </div>
      </div>
    </>
  );
};
