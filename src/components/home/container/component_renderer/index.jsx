import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

import { CodeEditor } from "../code_editor/index.jsx";
import { Button } from "../../../common/widgets/button/index.jsx";

import styles from "./comRender.module.css";

export const ComponentRenderer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.titleSection}>
        <p className={styles.title}>Examples</p>
        <p className={styles.textDescription}>
          button comes with variant colors{" "}
        </p>
      </div>

      <div className={styles.componentFrameSection}>
        <Button />
      </div>

      <div className={styles.componentRenderSection}>
        <div className={styles.componentShareSection}>
          <p
            className={styles.openWindow}
            onClick={() => navigate("/sky-ui/components/button")}
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
            code={`<SUIButton className="button1">Contact</SUIButton>

<SUIButton className="button2" loading={true}>
  Submit
</SUIButton>

<SUIButton className="button3" icon={<DownloadOutlined />} loading={true}>
  Download
</SUIButton>`}
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
            code={`.button1 {
  /* default color applied */
  --width: 100%;
}
.button2 {
  --bg-color: #017001;
  --width: 100%;
}
.button3 {
  --bg-color: black;
  --width: 100%;
}
`}
            language="css"
          />
        </div>
      </div>
    </div>
  );
};
