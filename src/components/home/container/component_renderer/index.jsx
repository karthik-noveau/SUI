import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

import { CodeEditor } from "../code_editor/index.jsx";
import { NormalButton } from "../../../common/widgets/button/index.jsx";

import styles from "./comRender.module.css";

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
        <NormalButton />
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
            code={`<SUIButton/>
<SUIButton className="normalButton1">Button</SUIButton>
<SUIButton className="normalButton2">Button</SUIButton>`}
            language="jsx"
          />
        </div>

        <div className={styles.cssCodeEditor}>
          <div className={styles.cssFileTitle}>
            <div className={styles.cssFileTab}>
              <SiCss3 className={styles.icon} />
              style.css
            </div>
          </div>
          <CodeEditor
            code={`.button1 .SUIButton{
    --bg-color:#009b54;
}
.button2 .SUIButton{
    --bg-color:#ea1010;
}`}
            language="css"
          />
        </div>
      </div>
    </div>
  );
};
