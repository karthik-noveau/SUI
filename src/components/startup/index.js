import React from "react";

import { SUIButton } from "@sui/widgets/button";

import HomeBanner from "./images/HomeBanner.png";
import MobileHomeBanner from "./images/MobileHomeBanner.png";

import "./style.css";
import { Link, useNavigate } from "react-router-dom";

function StartUp() {
  const navigate = useNavigate();
  return (
    <div className="startUp">
      <div className="startUpBanner">
        <img src={HomeBanner} alt={HomeBanner} />
        <img src={MobileHomeBanner} alt={HomeBanner} />
      </div>
      <div className="startUpText">
        <div className="startUpTextContainer">
          <p>SKY UI 1.0</p>
          <p>
            Professionally designed widgets and components for beautiful,
            engaging Continuous innovation for developers to cover your needs
            today and tomorrow
          </p>
          <div className="startUpButtonContainer">
            <Link to="/components">
              <SUIButton className="startUpButton">Getting Started</SUIButton>
            </Link>
            <Link to="/">
              <SUIButton className="startUpSecondButton">
                Design Language
              </SUIButton>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default StartUp;
