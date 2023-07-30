import React from "react";
import { URL } from "../../../../config.js";

import "./style.css";
import { SUIDeskNavbar } from "../../../navbar/Desktop/index.jsx";

export const ComponentRenderer = () => {
  return (
    <div>
      <div className="componentRender-titleSection">
        <p className="title">Normal Button</p>
        <p className="textDescription">button comes with variant colors </p>
      </div>
      <div className="componentRender-iframeSection">
        <iframe
          src={`${URL}/sky-ui/widgets/button`}
          title="component-render"
          style={{
            height: "100px",
          }}
        ></iframe>
      </div>
    </div>
  );
};
