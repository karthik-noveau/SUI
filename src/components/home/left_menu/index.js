import React from "react";

import "./style.css";
import { SUIButton } from "@sui/widgets/buttons/button";
import { LeftMenuListData } from "./constant";

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
