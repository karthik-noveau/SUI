import React from "react";
import { BiSolidWidget } from "react-icons/bi";

import skynoveauLogo from "./images/skynoveauLogo.png";
import { ComponentRenderer } from "./component_renderer";

import styles from "./style.module.css";
import { AdContainer } from "./ad";

export const Container = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homeContainer}>
        <div className={styles.categoryTitle}>
          <BiSolidWidget />
          widgets
        </div>
        <div className={styles.title}>
          <p className={styles.titleName}>Button</p>
          <p className={styles.titleDescription}>
            Buttons allow users to take actions, and make choices, with a single
            tap.
          </p>
        </div>

        <AdContainer />

        <div className={styles.componentkDescriptionSection}>
          <p>
            Buttons communicate actions that users can take. They are typically
            placed throughout your UI, in places like:
          </p>
          <ul>
            <li>Normal button</li>
            <li>loading button</li>
            <li>loading button with icon </li>
            
          </ul>
        </div>
        <ComponentRenderer />
      </div>
    </div>
  );
};
