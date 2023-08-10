import React from "react";

import { SUIButton } from "@sui/widgets/buttons/button";
import { LeftMenuListData } from "./constant";

import "./style.css";

const LeftHomeMenu = () => {
  return (
    <>
      <div className="LeftHomeMenu">
        <div className="LeftHomeMenuContainer">
          {LeftMenuListData.map((navItem) => {
            return (
              <>
                <SUIButton className="LeftHomeMenuButton">{navItem.name}</SUIButton>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LeftHomeMenu;
