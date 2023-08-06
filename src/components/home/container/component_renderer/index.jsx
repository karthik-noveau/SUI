import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import {RiReactjsLine} from "react-icons/ri"

import { CodeEditor } from "../code_editor/index.jsx";

import styles from "./style.module.css";
import { SUIButton } from "@sui/widgets/buttons/antbutton/index.jsx";

export const ComponentRenderer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.titleSection}>
        <p className={styles.title}>Normal Button</p>
        <p className={styles.textDescription}>
          button comes with variant colors{" "}
        </p>
      </div>

      <div className={styles.componentFrameSection}>
        <SUIButton>submit</SUIButton>
        <SUIButton>submit</SUIButton>
      </div>

      <div className={styles.componentRenderSection}>
        <div className={styles.componentShareSection}>
          <p
            className={styles.openWindow}
            onClick={() => navigate("/sky-ui/components/navbar")}
          >
            <MdOpenInNew className={styles.icon} />
            <span>open in new window</span>
          </p>
          <p className={styles.openGit}>
            <AiFillGithub className={styles.icon} />
            <span>Git hub</span>
          </p>
        </div>

        <div className={styles.jsxCodeEditor}>
          <div className={styles.jsxFileTitle}>
            <div className={styles.jsxFileTab}>
              <RiReactjsLine className={styles.icon} />
              index.jsx
            </div>
          </div>
          <CodeEditor
            code={`<AiFillGithub className={styles.icon} />`}
            language="jsx"
          />
        </div>

        <div className={styles.cssCodeEditor}>
          <div className={styles.cssFileTitle}>
            <div className={styles.cssFileTab}>
              <SiCss3 className={styles.icon} />
              style.module.css
            </div>
          </div>
          <CodeEditor
            code={`.iframeSection {
  margin-top: 40px;
  border: 1px solid var(--SUI-border-color-grey-light);
  border-radius: 7px 7px 0 0;
  padding: 15px;
  position: relative;
}`}
            language="css"
          />
        </div>
      </div>
    </div>
  );
};
