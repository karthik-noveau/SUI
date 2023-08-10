import React from "react";
import { BiSolidWidget } from "react-icons/bi";

import skynoveauLogo from "./images/skynoveauLogo.png";
import { ComponentRenderer } from "./component_renderer";

import styles from "./container.module.css";
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
            Buttons exhibit varying user interfaces and functionalities, as
            outlined below :
          </p>
          <ul>
            <li>normal button</li>
            <li>loading button with text</li>
            <li>loading button with icon </li>
          </ul>
        </div>
        <ComponentRenderer />
      </div>
    </div>
  );
};
