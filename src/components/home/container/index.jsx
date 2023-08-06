import React from "react";
import {BiSolidWidget} from "react-icons/bi"

import skynoveauLogo from "./images/skynoveauLogo.png";
import { ComponentRenderer } from "./component_renderer";

import styles from "./style.module.css";

export const Container = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homeContainer}>
      <div className={styles.categoryTitle}><BiSolidWidget/>widgets</div>
        <div className={styles.title}>
          <p className={styles.titleName}>Button</p>
          <p className={styles.titleDescription}>
            Buttons allow users to take actions, and make choices, with a single
            tap.
          </p>
        </div>

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

        <div className={styles.componentkDescriptionSection}>
          <p>
            Buttons communicate actions that users can take. They are typically
            placed throughout your UI, in places like:
          </p>
          <ul>
            <li>primary button</li>
            <li>primary button</li>
          </ul>
        </div>
        <ComponentRenderer />
      </div>
    </div>
  );
};
