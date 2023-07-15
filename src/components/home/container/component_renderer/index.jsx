import React from "react";
import { URL } from "../../../../config.js";

import "./style.css";

export const ComponentRenderer = () => {
  return (
    <div>
      <div className="componentRender-titleSection">
        <p className="title">Normal Button</p>
        <p className="textDescription">button comes with variant colors </p>
      </div>
      <div className="componentRender-iframeSection">
        <iframe
          src={`${URL}/sky-ui/wedgets/button`}
          title="component-render"
        ></iframe>
      </div>
    </div>
  );
};
