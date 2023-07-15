import React from "react";

import { SUIDeskNavbar } from "../../../SUI_Library/components/navbar/Desktop";

import "./style.css";

import skynoveauLogo from "./images/skynoveauLogo.png";
import { ComponentRenderer } from "./component_viewer";

export const Container = () => {
  return (
    <div className="container">
      <div className="container-homeContainer">
        <div className="container-title">
          <p className="container-titleName">Button</p>
          <p className="container-titleDescription">
            Buttons allow users to take actions, and make choices, with a single
            tap.
          </p>
        </div>

        <div className="container-adSection">
          <img src={skynoveauLogo} alt="skynoveauLogo" />
          <div className="container-adTextSection">
            <p className="container-adTextContent">
              Build your premium Website at an Affordable Cost -
              <span> Skynoveau Technology The making wonders</span>
            </p>
            <p className="container-adBy">ad by SKYUI</p>
          </div>
        </div>

        <div className="container-componentkDescriptionSection">
          <p>
            Buttons communicate actions that users can take. They are typically
            placed throughout your UI, in places like:
          </p>
          <ul>
            <li>primary button</li>
            <li>primary button</li>
          </ul>
        </div>
      </div>

      <ComponentRenderer/>

      {/* <SUIDeskNavbar /> */}
    </div>
  );
};
