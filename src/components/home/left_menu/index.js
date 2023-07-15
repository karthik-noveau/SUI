import React from "react";

import "./style.css";
import { SUIButton } from "../../../SUI_Library/widgets/buttons/antbutton";
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
