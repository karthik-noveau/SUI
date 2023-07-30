import React from "react";
import { MdOpenInNew } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

import { SUIDeskNavbar } from "../../../SUI/components/navbar/Desktop";
import { URL } from "../../../config";

import "./style.css";

import skynoveauLogo from "./images/skynoveauLogo.png";
import { ComponentRenderer } from "./iframe_renderer";
import { CodeEditor } from "./code_editor";
import { useNavigate } from "react-router-dom";

export const Container = () => {

  const navigate = useNavigate()

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
          <img src="https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg" alt="skynoveauLogo" />
          <div className="container-adTextSection">
            <p className="container-adTextContent">
              Build your premium Website at an Affordable Cost - Skynoveau Technology The making wonders
              <span> </span>
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
      <div className="container-componentRenderSection">
        <ComponentRenderer />
        <div className="container-componentShareSection">
          <p className="openWindow" onClick={()=>navigate(`/sky-ui/widgets/button`)}>
            <MdOpenInNew className="icon" />
            <span>open in new window</span>
          </p>
          <p className="openGit">
            <AiFillGithub className="icon" />
            <span>Git hub</span>
          </p>
        </div>
        <CodeEditor />
      </div>

      {/* <SUIDeskNavbar /> */}
    </div>
  );
};
